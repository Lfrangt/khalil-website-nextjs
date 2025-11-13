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

  // Recenter map to Khalil's location (no privacy invasion!)
  const recenterToKhalil = () => {
    const khalilLocation: [number, number] = [-123.1207, 49.2827]; // Vancouver
    
    if (map.current) {
      map.current.flyTo({
        center: khalilLocation,
        zoom: 13,
        duration: 1500,
      });
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
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-123.1207, 49.2827], // Default to Vancouver
        zoom: 11,
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
        // Set Khalil's location (Vancouver) by default - no privacy invasion!
        const khalilLocation: [number, number] = [-123.1207, 49.2827]; // Vancouver
        setCurrentLocation(khalilLocation);
        setIsSharing(true);
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

      {/* Right top - Recenter to Khalil's location button */}
      <button
        onClick={recenterToKhalil}
        className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
        title={language === 'zh' ? '回到我的位置' : 'Back to My Location'}
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
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
