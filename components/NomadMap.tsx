'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

// Mapbox access token
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1Ijoia2hhbGlsNjY2OSIsImEiOiJjbWh4Mm1taGwwMnk0MmxwcGpyeXlpcGFmIn0.XQzkWA_EotxV67me6R92wQ';

export default function NomadMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Vancouver coordinates
  const vancouver: [number, number] = [-123.1207, 49.2827];

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    if (map.current) return; // Already initialized
    if (!mapContainer.current) return;

    // Set access token
    mapboxgl.accessToken = MAPBOX_TOKEN;

    // Create map instance
    const mapInstance = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: vancouver,
      zoom: 3,
      attributionControl: false,
      interactive: false,
    });

    map.current = mapInstance;

    // Handle load
    mapInstance.on('load', () => {
      setIsLoaded(true);

      // Force resize to ensure proper rendering
      mapInstance.resize();

      // Add avatar marker
      const markerEl = document.createElement('div');
      markerEl.className = 'map-avatar-marker';
      markerEl.innerHTML = `
        <div class="map-avatar-ring"></div>
        <div class="map-avatar-img" style="background-image: url(/khalil.jpg)"></div>
      `;

      new mapboxgl.Marker({ element: markerEl, anchor: 'center' })
        .setLngLat(vancouver)
        .addTo(mapInstance);
    });

    // Handle style load
    mapInstance.on('style.load', () => {
      mapInstance.resize();
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Resize on window resize
  useEffect(() => {
    const handleResize = () => {
      if (map.current) {
        map.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 bg-zinc-900 overflow-hidden group">
      {/* Map Container */}
      <div
        ref={mapContainer}
        className={`absolute inset-0 transition-opacity duration-700 ${isLoaded ? 'opacity-90' : 'opacity-0'}`}
      />

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-zinc-600 border-t-amber-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Location Pill */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="px-6 py-2.5 bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl flex items-center gap-3 text-white font-medium">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-sm">Vancouver, Canada</span>
        </div>
      </div>

      {/* Marker Styles */}
      <style jsx global>{`
        .map-avatar-marker {
          width: 64px;
          height: 64px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-avatar-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #06b6d4);
          opacity: 0.6;
          animation: pulse-ring 2s ease-in-out infinite;
        }

        .map-avatar-img {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          border: 3px solid white;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          position: relative;
          z-index: 1;
          transform: rotate(180deg);
        }

        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }

        .mapboxgl-ctrl-logo,
        .mapboxgl-ctrl-attrib {
          display: none !important;
        }

        .mapboxgl-canvas {
          outline: none;
        }
      `}</style>
    </div>
  );
}
