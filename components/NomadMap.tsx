'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useLanguage } from '@/lib/LanguageContext';

// Mapbox access token from env
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1Ijoia2hhbGlsNjY2OSIsImEiOiJjbWh4Mm1taGwwMnk0MmxwcGpyeXlpcGFmIn0.XQzkWA_EotxV67me6R92wQ';
mapboxgl.accessToken = MAPBOX_TOKEN;

export default function NomadMap() {
  const { language } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<[number, number] | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isSharing, setIsSharing] = useState(false);
  const animationRef = useRef<number | null>(null);
  const flightPathRef = useRef<[number, number][]>([]);

  // Flight path coordinates
  const wenzhou: [number, number] = [120.6986, 28.0006]; // Wenzhou, China
  const vancouver: [number, number] = [-123.1207, 49.2827]; // Vancouver, Canada

  // Generate arc points for flight path (great circle route)
  const generateArc = (start: [number, number], end: [number, number], numPoints: number = 100): [number, number][] => {
    const points: [number, number][] = [];
    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      // Simple interpolation - for trans-Pacific flight
      const lng = start[0] + (end[0] - start[0]) * t;
      const lat = start[1] + (end[1] - start[1]) * t;
      // Add arc curvature for better visualization
      const arcHeight = Math.sin(t * Math.PI) * 8; // Arc curvature
      points.push([lng, lat + arcHeight]);
    }
    return points;
  };

  // Animate avatar along flight path
  const animateFlightPath = () => {
    if (!map.current || flightPathRef.current.length === 0) return;

    const totalDuration = 8000; // 8 seconds for complete flight
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);

      // Ease in-out function for smooth acceleration/deceleration
      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const easedProgress = easeInOutCubic(progress);
      const pathIndex = Math.floor(easedProgress * (flightPathRef.current.length - 1));
      const currentPos = flightPathRef.current[pathIndex];

      // Update avatar position
      setCurrentLocation(currentPos);

      // Update camera to follow avatar with smooth zoom
      if (map.current) {
        // Zoom in gradually as we approach destination
        const zoomLevel = 2.5 + (progress * 10.5); // From 2.5 to 13

        map.current.easeTo({
          center: currentPos,
          zoom: zoomLevel,
          duration: 100, // Smooth transition
          essential: true
        });
      }

      // Continue animation until complete
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsSharing(true);
      }
    };

    animate();
  };

  // Replay flight animation
  const recenterToKhalil = () => {
    // Cancel existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Reset to start position
    setCurrentLocation(wenzhou);
    setIsSharing(false);

    // Fly map back to overview
    if (map.current) {
      map.current.flyTo({
        center: [-30, 45],
        zoom: 2.5,
        duration: 1500,
      });

      // Start animation after camera settles
      setTimeout(() => {
        animateFlightPath();
      }, 1600);
    }
  };

  useEffect(() => {
    if (!mapContainer.current || map.current || mapLoaded) return;

    console.log('Initializing map with token:', MAPBOX_TOKEN?.substring(0, 10) + '...');

    // Set a timeout to prevent infinite loading
    const timeout = setTimeout(() => {
        console.error('Map loading timeout');
        setLocationError(language === 'zh' ? '地图加载超时' : 'Map loading timeout');
        setMapLoaded(true);
    }, 10000); // 10 second timeout

    try {
      // Initialize map with dark theme like Instagram/WeChat
      // Center map to show both Wenzhou and Vancouver
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-30, 45], // Center between Wenzhou and Vancouver
        zoom: 2.5, // Zoom out to show full Pacific flight path
        dragRotate: false,
        touchZoomRotate: false,
        attributionControl: false,
        logoPosition: 'bottom-left',
      });

      map.current = mapInstance;

      mapInstance.on('load', () => {
        console.log('Map loaded successfully');
        clearTimeout(timeout);
        setMapLoaded(true);

        // Generate flight path from Wenzhou to Vancouver
        const flightPath = generateArc(wenzhou, vancouver);
        flightPathRef.current = flightPath;

        // Add flight path as a line
        mapInstance.addSource('flight-route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: flightPath
            }
          }
        });

        // Add flight path line layer with animation
        mapInstance.addLayer({
          id: 'flight-route-line',
          type: 'line',
          source: 'flight-route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#3b82f6', // Blue color
            'line-width': 3,
            'line-opacity': 0.8
          }
        });

        // Add animated dashed line on top
        mapInstance.addLayer({
          id: 'flight-route-dashed',
          type: 'line',
          source: 'flight-route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#60a5fa',
            'line-width': 2,
            'line-dasharray': [0, 4, 3],
            'line-opacity': 0.6
          }
        });

        // Add markers for start and end points
        // Wenzhou marker
        const wenzhouEl = document.createElement('div');
        wenzhouEl.className = 'flight-marker';
        wenzhouEl.style.width = '12px';
        wenzhouEl.style.height = '12px';
        wenzhouEl.style.borderRadius = '50%';
        wenzhouEl.style.backgroundColor = '#3b82f6';
        wenzhouEl.style.border = '2px solid white';
        wenzhouEl.style.boxShadow = '0 0 10px rgba(59, 130, 246, 0.8)';

        new mapboxgl.Marker({ element: wenzhouEl })
          .setLngLat(wenzhou)
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(language === 'zh' ? '温州（起点）' : 'Wenzhou (Start)'))
          .addTo(mapInstance);

        // Vancouver destination marker
        const vancouverEl = document.createElement('div');
        vancouverEl.className = 'flight-marker';
        vancouverEl.style.width = '12px';
        vancouverEl.style.height = '12px';
        vancouverEl.style.borderRadius = '50%';
        vancouverEl.style.backgroundColor = '#10b981';
        vancouverEl.style.border = '2px solid white';
        vancouverEl.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.8)';

        new mapboxgl.Marker({ element: vancouverEl })
          .setLngLat(vancouver)
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(language === 'zh' ? '温哥华（终点）' : 'Vancouver (Destination)'))
          .addTo(mapInstance);

        // Start avatar at Wenzhou and begin flight animation
        setCurrentLocation(wenzhou);

        // Wait a bit for map to settle, then start animation
        setTimeout(() => {
          animateFlightPath();
        }, 1000);
      });

      mapInstance.on('error', (e) => {
        console.error('Mapbox error:', e);
        clearTimeout(timeout);
        setLocationError(language === 'zh' ? '地图加载失败' : 'Map failed to load');
        setMapLoaded(true); // Show error instead of infinite loading
      });

      // Cleanup
      return () => {
        clearTimeout(timeout);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        if (marker.current) {
          marker.current.remove();
        }
        if (mapInstance) {
          mapInstance.remove();
        }
      };
    } catch (error) {
      console.error('Map initialization error:', error);
      clearTimeout(timeout);
      setLocationError(language === 'zh' ? '地图初始化失败' : 'Map initialization failed');
      setMapLoaded(true);
    }
  }, [language, mapLoaded]);

  // Update marker when location changes
  useEffect(() => {
    if (!map.current || !currentLocation || !mapLoaded) return;

    console.log('Creating marker at:', currentLocation);

    // Remove old marker
    if (marker.current) {
      marker.current.remove();
    }

    try {
      // Create custom marker element with avatar
      const el = document.createElement('div');
      el.style.position = 'relative';
      el.style.cursor = 'pointer';

      // Avatar container with gradient border (like Instagram)
      const avatarContainer = document.createElement('div');
      avatarContainer.style.width = '70px';
      avatarContainer.style.height = '70px';
      avatarContainer.style.borderRadius = '50%';
      avatarContainer.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
      avatarContainer.style.padding = '4px';
      avatarContainer.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.6)';
      avatarContainer.style.display = 'flex';
      avatarContainer.style.alignItems = 'center';
      avatarContainer.style.justifyContent = 'center';
      avatarContainer.style.animation = 'pulse 2s ease-in-out infinite';

      // Avatar image - use img element for better reliability
      const avatar = document.createElement('img');
      avatar.src = '/khalil.jpg';
      avatar.alt = 'Khalil';
      avatar.style.width = '100%';
      avatar.style.height = '100%';
      avatar.style.borderRadius = '50%';
      avatar.style.objectFit = 'cover';
      avatar.style.border = '3px solid white';
      avatar.style.display = 'block';

      avatarContainer.appendChild(avatar);
      el.appendChild(avatarContainer);

      // Label below avatar
      const label = document.createElement('div');
      label.style.position = 'absolute';
      label.style.top = '75px';
      label.style.left = '50%';
      label.style.transform = 'translateX(-50%)';
      label.style.background = 'rgba(0, 0, 0, 0.85)';
      label.style.color = 'white';
      label.style.padding = '6px 14px';
      label.style.borderRadius = '14px';
      label.style.fontSize = '13px';
      label.style.fontWeight = '600';
      label.style.whiteSpace = 'nowrap';
      label.style.backdropFilter = 'blur(10px)';
      label.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
      label.textContent = language === 'zh' ? 'Khalil 在这里' : 'Khalil Here';
      el.appendChild(label);

      // Add marker to map
      const newMarker = new mapboxgl.Marker({ element: el })
        .setLngLat(currentLocation)
        .addTo(map.current);

      marker.current = newMarker;
      console.log('Marker created successfully');
    } catch (error) {
      console.error('Error creating marker:', error);
    }
  }, [currentLocation, language, mapLoaded]);

  return (
    <div className="relative w-full h-full">
      {/* Top header - Location status */}
      {isSharing && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          {language === 'zh' ? 'Khalil 的当前位置' : "Khalil's Current Location"}
        </div>
      )}

      {/* Right top - Replay flight animation button */}
      <button
        onClick={recenterToKhalil}
        className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
        title={language === 'zh' ? '重播飞行动画' : 'Replay Flight Animation'}
      >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
      </button>

      {/* Map container */}
      <div ref={mapContainer} className="w-full h-full" />

      {/* Loading overlay */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gray-600 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-sm">
              {language === 'zh' ? '加载地图中...' : 'Loading map...'}
            </p>
          </div>
        </div>
      )}

      {/* Error message */}
      {locationError && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-red-500/90 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm shadow-lg">
          {locationError}
        </div>
      )}

      {/* Custom styles */}
      <style jsx global>{`
        .mapboxgl-ctrl-logo,
        .mapboxgl-ctrl-attrib {
          display: none !important;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6), 0 0 0 0 rgba(240, 148, 51, 0.7);
          }
          50% {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6), 0 0 0 10px rgba(240, 148, 51, 0);
          }
        }
      `}</style>
    </div>
  );
}
