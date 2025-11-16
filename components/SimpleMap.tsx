'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useLanguage } from '@/lib/LanguageContext';

// Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhbGlsNjY2OSIsImEiOiJjbWh4Mm1taGwwMnk0MmxwcGpyeXlpcGFmIn0.XQzkWA_EotxV67me6R92wQ';

export default function SimpleMap() {
  const { language } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Journey: From Wenzhou (hometown) to Vancouver (current home) - Eastward across Pacific
  const wenzhouLocation: [number, number] = [120.6994, 28.0006]; // Wenzhou, China
  const midPacific1: [number, number] = [160, 35]; // First waypoint (moving east)
  const midPacific2: [number, number] = [-160, 42]; // Second waypoint (across dateline)
  const vancouverLocation: [number, number] = [-123.1207, 49.2827]; // Vancouver, Canada

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    try {
      // Initialize map starting from Wenzhou (hometown)
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: wenzhouLocation,
        zoom: 10,
        dragRotate: false,
        touchZoomRotate: false,
        attributionControl: false,
        logoPosition: 'bottom-right',
        // Performance optimizations
        antialias: true,
      });

      map.current = mapInstance;

      // Add minimal navigation controls
      mapInstance.addControl(
        new mapboxgl.NavigationControl({ 
          showCompass: false,
          visualizePitch: false 
        }),
        'top-right'
      );

      mapInstance.on('load', () => {
        setMapLoaded(true);

        // Create responsive avatar marker
        const isMobile = window.innerWidth < 768;
        const avatarSize = isMobile ? 70 : 90;
        const halfSize = avatarSize / 2;
        
        // Marker wrapper (0x0 for precise positioning)
        const markerWrapper = document.createElement('div');
        markerWrapper.style.width = '0px';
        markerWrapper.style.height = '0px';
        markerWrapper.style.position = 'relative';
        
        // Create avatar element with trail effect
        const markerEl = document.createElement('div');
        markerEl.style.cssText = `
          position: absolute;
          left: -${halfSize}px;
          top: -${halfSize}px;
          width: ${avatarSize}px;
          height: ${avatarSize}px;
          background-image: url(/khalil.jpg);
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          border: 4px solid #ff6b00;
          box-shadow: 
            0 0 0 4px rgba(255, 107, 0, 0.3),
            0 0 20px rgba(255, 107, 0, 0.6),
            0 10px 30px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          animation: avatar-pulse 2s ease-in-out infinite;
          z-index: 10;
        `;
        
        markerWrapper.appendChild(markerEl);

        // Add marker at Wenzhou
        const marker = new mapboxgl.Marker({
          element: markerWrapper,
          anchor: 'center'
        })
          .setLngLat(wenzhouLocation)
          .addTo(mapInstance);

        // Smooth and elegant journey animation
        const startJourney = () => {
          const duration = 4500; // 4.5 seconds for smooth, elegant animation
          const startTime = performance.now();
          
          // Smooth camera flight eastward across the Pacific
          mapInstance.flyTo({
            center: vancouverLocation,
            zoom: 10,
            duration: duration,
            essential: true,
            curve: 1.5, // Gentler curve for smoother movement
            speed: 0.7, // Slower, more elegant speed
            bearing: 0,
            pitch: 0,
            easing: (t) => {
              // Cubic ease-in-out for ultra-smooth motion
              return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }
          });

          // Animate marker along the path (eastward across Pacific)
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ultra-smooth cubic ease-in-out
            const eased = progress < 0.5
              ? 4 * progress * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            // Bezier curve through waypoints for natural flight path
            // Use cubic Bezier interpolation for smooth curves
            let lng, lat;
            
            // Create smooth Bezier curve through all points
            const p0 = wenzhouLocation;
            const p1 = midPacific1;
            const p2 = midPacific2;
            const p3 = vancouverLocation;
            
            // Cubic Bezier formula: B(t) = (1-t)³P0 + 3(1-t)²tP1 + 3(1-t)t²P2 + t³P3
            const t = eased;
            const t2 = t * t;
            const t3 = t2 * t;
            const mt = 1 - t;
            const mt2 = mt * mt;
            const mt3 = mt2 * mt;
            
            lng = mt3 * p0[0] + 3 * mt2 * t * p1[0] + 3 * mt * t2 * p2[0] + t3 * p3[0];
            lat = mt3 * p0[1] + 3 * mt2 * t * p1[1] + 3 * mt * t2 * p2[1] + t3 * p3[1];
            
            // Update marker position
            marker.setLngLat([lng, lat]);
            
            // Smooth subtle rotation and scale effects
            const scale = 1 + Math.sin(progress * Math.PI) * 0.1; // Subtle pulsing
            const rotation = progress * 180; // Half rotation for elegance
            markerEl.style.transform = `translateZ(0) scale(${scale}) rotate(${rotation}deg)`;
            markerEl.style.transition = 'none'; // Disable CSS transition for smooth RAF animation
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              // Elegant arrival animation
              markerEl.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
              markerEl.style.transform = 'translateZ(0) scale(1.15) rotate(180deg)';
              markerEl.style.boxShadow = `
                0 0 0 8px rgba(255, 107, 0, 0.5),
                0 0 50px rgba(255, 107, 0, 0.9),
                0 20px 50px rgba(0, 0, 0, 0.5)
              `;
              setTimeout(() => {
                markerEl.style.transform = 'translateZ(0) scale(1) rotate(180deg)';
                markerEl.style.boxShadow = `
                  0 0 0 4px rgba(255, 107, 0, 0.3),
                  0 0 20px rgba(255, 107, 0, 0.6),
                  0 10px 30px rgba(0, 0, 0, 0.3)
                `;
              }, 600);
            }
          };
          
          requestAnimationFrame(animate);
        };

        // Start journey after brief pause
        setTimeout(startJourney, 800);

        console.log('🏠 Journey: Wenzhou → Vancouver');
        console.log('📍 Starting from hometown:', wenzhouLocation);
        console.log('🎓 Arriving at current home:', vancouverLocation);
      });

      mapInstance.on('error', (e) => {
        console.error('Mapbox error:', e);
      });
    } catch (error) {
      console.error('Failed to initialize map:', error);
    }

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <div className="relative w-full h-full bg-gray-50 rounded-xl overflow-hidden shadow-2xl touch-action-none">
      <div ref={mapContainer} className="w-full h-full map-container" style={{ minHeight: '400px' }} />

      {/* Journey indicator */}
      {mapLoaded && (
        <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-10 animate-journey-fade">
          <div className="journey-badge">
            <div className="journey-badge-content">
              <span className="text-lg md:text-xl">✈️</span>
              <div className="journey-text">
                <span className="journey-title">
                  {language === 'zh' ? '我的旅程' : 'My Journey'}
                </span>
                <span className="journey-route">
                  {language === 'zh' ? '温州 → 温哥华' : 'Wenzhou → Vancouver'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Location Badge */}
      {mapLoaded && (
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 animate-arrival">
          <div className="location-badge">
            <div className="flex items-center gap-2">
              <span className="text-base md:text-lg">📍</span>
              <div>
                <div className="location-name">
                  {language === 'zh' ? '温哥华' : 'Vancouver'}
                </div>
                <div className="location-country">
                  {language === 'zh' ? '加拿大 🍁' : 'Canada 🍁'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
          <div className="text-center">
            <div className="loading-spinner"></div>
            <p className="mt-4 text-gray-700 text-sm md:text-base font-medium animate-pulse">
              {language === 'zh' ? '准备起飞...' : 'Preparing for takeoff...'}
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        /* Performance optimizations */
        .map-container {
          will-change: contents;
          contain: layout style paint;
        }

        /* Journey Badge */
        .journey-badge {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.9) 0%, 
            rgba(255, 255, 255, 0.8) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 10px 16px;
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.1),
            0 2px 8px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .journey-badge-content {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .journey-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .journey-title {
          font-size: 10px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .journey-route {
          font-size: 14px;
          font-weight: 700;
          color: #ff6b00;
          background: linear-gradient(135deg, #ff6b00 0%, #ff8a00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (min-width: 768px) {
          .journey-badge {
            border-radius: 20px;
            padding: 12px 20px;
          }
          
          .journey-title {
            font-size: 11px;
          }
          
          .journey-route {
            font-size: 16px;
          }
        }

        /* Location Badge */
        .location-badge {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(255, 255, 255, 0.85) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1.5px solid rgba(255, 107, 0, 0.3);
          border-radius: 16px;
          padding: 10px 16px;
          box-shadow: 
            0 10px 40px rgba(255, 107, 0, 0.2),
            0 2px 8px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 1);
          animation: float-badge 3s ease-in-out infinite;
        }

        @media (min-width: 768px) {
          .location-badge {
            border-radius: 20px;
            padding: 12px 20px;
          }
        }

        .location-name {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .location-country {
          font-size: 11px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.6);
          margin-top: 2px;
        }

        @media (min-width: 768px) {
          .location-name {
            font-size: 16px;
          }
          
          .location-country {
            font-size: 12px;
          }
        }

        /* Avatar pulse animation */
        @keyframes avatar-pulse {
          0%, 100% {
            box-shadow: 
              0 0 0 4px rgba(255, 107, 0, 0.3),
              0 0 20px rgba(255, 107, 0, 0.6),
              0 10px 30px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 
              0 0 0 8px rgba(255, 107, 0, 0.2),
              0 0 40px rgba(255, 107, 0, 0.8),
              0 15px 40px rgba(0, 0, 0, 0.4);
          }
        }

        /* Journey fade animation */
        @keyframes journey-fade {
          0% {
            opacity: 0;
            transform: translate(-50%, -30px) scale(0.9);
          }
          10% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
          80% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -20px) scale(0.95);
          }
        }

        .animate-journey-fade {
          animation: journey-fade 3.8s ease-in-out both;
        }

        /* Arrival animation */
        @keyframes arrival {
          0% {
            opacity: 0;
            transform: translate(-50%, 60px) scale(0.7);
          }
          60% {
            transform: translate(-50%, -8px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }

        .animate-arrival {
          animation: arrival 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 3.8s both;
        }

        /* Float animation for badge */
        @keyframes float-badge {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        /* Loading spinner */
        .loading-spinner {
          width: 60px;
          height: 60px;
          border: 5px solid rgba(255, 107, 0, 0.2);
          border-top: 5px solid #ff6b00;
          border-right: 5px solid #ff8a00;
          border-radius: 50%;
          animation: spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          box-shadow: 0 0 30px rgba(255, 107, 0, 0.4);
          margin: 0 auto;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Hide Mapbox branding */
        .mapboxgl-ctrl-logo,
        .mapboxgl-ctrl-attrib,
        .mapboxgl-ctrl-attrib-button {
          display: none !important;
        }

        /* Smooth map container fade-in */
        .map-container {
          animation: map-fade 1s ease-out;
        }

        @keyframes map-fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Optimize zoom controls */
        .mapboxgl-ctrl-group {
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1) !important;
          transition: all 0.3s ease !important;
          backdrop-filter: blur(10px);
        }

        .mapboxgl-ctrl-group:hover {
          box-shadow: 0 4px 20px rgba(255, 107, 0, 0.25) !important;
        }

        /* Smooth canvas interactions */
        .mapboxgl-canvas {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
