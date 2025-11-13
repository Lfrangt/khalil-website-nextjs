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

  // Journey: From Wenzhou (hometown) to Vancouver (current home)
  const wenzhouLocation: [number, number] = [120.6994, 28.0006]; // Wenzhou, China
  const vancouverLocation: [number, number] = [-123.1207, 49.2827]; // Vancouver, Canada

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    try {
      // Initialize map starting from Wenzhou (hometown)
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: wenzhouLocation, // Start at Wenzhou, China
        zoom: 10, // Close-up view of hometown
        dragRotate: false,
        touchZoomRotate: false,
        attributionControl: false,
        logoPosition: 'bottom-right',
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

      // Function to animate marker smoothly from one location to another
      const animateMarker = (
        marker: mapboxgl.Marker,
        start: [number, number],
        end: [number, number],
        duration: number
      ) => {
        const startTime = performance.now();
        
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Match the map's easing function for perfect synchronization
          const eased = progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;
          
          // Interpolate between start and end coordinates
          const lng = start[0] + (end[0] - start[0]) * eased;
          const lat = start[1] + (end[1] - start[1]) * eased;
          
          marker.setLngLat([lng, lat]);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      };

      mapInstance.on('load', () => {
        setMapLoaded(true);

        // Smooth continuous journey animation: Wenzhou → Vancouver
        // Single continuous camera movement for better flow
        setTimeout(() => {
          mapInstance.flyTo({
            center: vancouverLocation, // Fly directly to Vancouver
            zoom: 10,
            duration: 3500, // One smooth 3.5 second journey
            essential: true,
            curve: 1.2, // Arc of the flight path (lower = more direct)
            speed: 0.8, // Speed of the flight
            easing: (t) => {
              // Custom easing for smooth acceleration and deceleration
              return t < 0.5
                ? 2 * t * t
                : -1 + (4 - 2 * t) * t;
            }
          });
        }, 600); // Start shortly after avatar appears

        // Create a simple wrapper for the marker
        const markerWrapper = document.createElement('div');
        markerWrapper.style.width = '0px';
        markerWrapper.style.height = '0px';
        markerWrapper.style.position = 'relative';
        
        // Create the actual avatar element
        const markerEl = document.createElement('div');
        markerEl.style.position = 'absolute';
        markerEl.style.left = '-40px'; // Half of 80px to center
        markerEl.style.top = '-40px';  // Half of 80px to center
        markerEl.style.backgroundImage = 'url(/khalil.jpg)';
        markerEl.style.backgroundSize = 'cover';
        markerEl.style.backgroundPosition = 'center';
        markerEl.style.width = '80px';
        markerEl.style.height = '80px';
        markerEl.style.borderRadius = '50%';
        markerEl.style.border = '4px solid #ff8a00';
        markerEl.style.boxShadow = '0 8px 20px rgba(255, 138, 0, 0.6), 0 0 0 8px rgba(255, 138, 0, 0.2)';
        markerEl.style.cursor = 'pointer';
        markerEl.style.transition = 'all 0.3s ease';
        markerEl.style.opacity = '0';
        markerEl.style.animation = 'marker-appear 0.6s ease-out 0.5s forwards'; // Appear immediately at Wenzhou
        
        // Hover effect
        markerEl.onmouseenter = () => {
          markerEl.style.transform = 'scale(1.15)';
          markerEl.style.boxShadow = '0 12px 30px rgba(255, 138, 0, 0.8), 0 0 0 12px rgba(255, 138, 0, 0.3)';
        };
        markerEl.onmouseleave = () => {
          markerEl.style.transform = 'scale(1)';
          markerEl.style.boxShadow = '0 8px 20px rgba(255, 138, 0, 0.6), 0 0 0 8px rgba(255, 138, 0, 0.2)';
        };
        
        markerWrapper.appendChild(markerEl);

        // Add marker - START at Wenzhou (hometown)
        const marker = new mapboxgl.Marker({
          element: markerWrapper,
          anchor: 'center'
        })
          .setLngLat(wenzhouLocation) // Start at Wenzhou!
          .addTo(mapInstance);

        // Animate marker flying from Wenzhou to Vancouver
        // Perfectly synchronized with the map flight animation
        setTimeout(() => {
          animateMarker(marker, wenzhouLocation, vancouverLocation, 3500);
        }, 600); // Start at exact same time as map flight
        
        console.log('🏠 Journey: Wenzhou → Vancouver');
        console.log('📍 Hometown (Wenzhou, China):', wenzhouLocation);
        console.log('🎓 Current Home (Vancouver, Canada):', vancouverLocation);
        console.log('⚠️ Check: Avatar should be at Downtown Vancouver, NOT West Vancouver');
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
  }, [language]);

  return (
    <div className="relative w-full h-full bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
      <div ref={mapContainer} className="w-full h-full map-container" />

      {/* Flight indicator - Apple Glass Style */}
      {mapLoaded && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flight-indicator">
          <div className="glass-card-flight">
            <span className="text-lg">✈️</span>
            <span className="text-xs font-medium text-gray-800">
              {language === 'zh' ? '温州 → 温哥华' : 'Wenzhou → Vancouver'}
            </span>
          </div>
        </div>
      )}

      {/* Location Badge - Apple Glassmorphism Style */}
      {mapLoaded && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 location-badge-journey">
          <div className="glass-card group">
            <div className="flex items-center gap-2">
              <span className="text-base">📍</span>
              <span className="text-sm font-semibold text-gray-900">
                {language === 'zh' ? '温哥华，加拿大' : 'Vancouver, Canada'}
              </span>
            </div>
            <div className="glass-subtitle">
              {language === 'zh' ? '温州 🇨🇳 → 温哥华 🍁' : 'Wenzhou 🇨🇳 → Vancouver 🍁'}
            </div>
          </div>
        </div>
      )}

      {/* Loading State with enhanced animation */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 loading-screen">
          <div className="text-center">
            <div className="loading-spinner mx-auto mb-6"></div>
            <p className="text-gray-700 text-base font-semibold animate-pulse">
              {language === 'zh' ? '探索世界中...' : 'Exploring the world...'}
            </p>
          </div>
        </div>
      )}

      {/* Global Styles for Map and Enhanced Animations */}
      <style jsx global>{`
        /* Apple Glassmorphism Card */
        .glass-card {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 16px;
          padding: 10px 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08),
                      0 2px 8px rgba(0, 0, 0, 0.04),
                      inset 0 1px 0 rgba(255, 255, 255, 0.9);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.85);
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12),
                      0 4px 12px rgba(0, 0, 0, 0.06),
                      inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        .glass-subtitle {
          font-size: 11px;
          color: rgba(0, 0, 0, 0.5);
          margin-top: 2px;
          text-align: center;
          opacity: 0;
          transform: translateY(-4px);
          transition: all 0.3s ease;
        }

        .glass-card:hover .glass-subtitle {
          opacity: 1;
          transform: translateY(0);
        }

        .glass-card-flight {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          padding: 8px 14px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08),
                      0 2px 8px rgba(0, 0, 0, 0.04),
                      inset 0 1px 0 rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Hide Mapbox logo and attribution */
        .mapboxgl-ctrl-logo,
        .mapboxgl-ctrl-attrib,
        .mapboxgl-ctrl-attrib-button {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }

        /* Map container fade-in with scale */
        .map-container {
          animation: map-fade-in 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes map-fade-in {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Enhanced loading spinner with gradient and glow */
        .loading-spinner {
          width: 70px;
          height: 70px;
          border: 6px solid transparent;
          border-top: 6px solid #ff8a00;
          border-right: 6px solid #ff5722;
          border-bottom: 6px solid #ff8a00;
          border-radius: 50%;
          animation: spin-glow 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          box-shadow: 0 0 20px rgba(255, 138, 0, 0.5);
        }

        @keyframes spin-glow {
          0% {
            transform: rotate(0deg);
            box-shadow: 0 0 20px rgba(255, 138, 0, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 87, 34, 0.8);
          }
          100% {
            transform: rotate(360deg);
            box-shadow: 0 0 20px rgba(255, 138, 0, 0.5);
          }
        }

        /* Loading screen enhanced fade-out */
        .loading-screen {
          animation: fade-out-scale 0.8s ease-out forwards;
        }

        @keyframes fade-out-scale {
          to {
            opacity: 0;
            transform: scale(1.05);
            pointer-events: none;
          }
        }

        /* Marker appear animation */
        @keyframes marker-appear {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }


        /* Flight indicator - smooth fade in and out */
        .flight-indicator {
          animation: flight-indicator-journey 4.1s ease-in-out both;
        }

        @keyframes flight-indicator-journey {
          0% {
            opacity: 0;
            transform: translate(-50%, -20px) scale(0.9);
          }
          10% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -10px) scale(0.95);
          }
        }

        /* Location badge appears right after arrival */
        .location-badge-journey {
          animation: badge-journey-arrive 1s cubic-bezier(0.34, 1.56, 0.64, 1) 4.2s both;
        }

        @keyframes badge-journey-arrive {
          0% {
            opacity: 0;
            transform: translate(-50%, 50px) scale(0.8);
          }
          60% {
            transform: translate(-50%, -5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }

        /* Continuous float animation for badge */
        .location-badge-journey > div {
          animation: float-subtle 3s ease-in-out infinite 5.2s;
        }

        @keyframes float-subtle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        /* Smooth map interactions with brightness */
        .mapboxgl-canvas {
          transition: filter 0.3s ease, brightness 0.3s ease;
        }

        .mapboxgl-canvas:active {
          cursor: grabbing !important;
          filter: brightness(0.95);
        }

        /* Zoom controls subtle glow */
        .mapboxgl-ctrl-group {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
          transition: box-shadow 0.3s ease !important;
        }

        .mapboxgl-ctrl-group:hover {
          box-shadow: 0 4px 20px rgba(255, 138, 0, 0.3) !important;
        }
      `}</style>
    </div>
  );
}

