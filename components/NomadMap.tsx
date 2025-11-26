'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useLanguage } from '@/lib/LanguageContext';

// Mapbox access token
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1Ijoia2hhbGlsNjY2OSIsImEiOiJjbWh4Mm1taGwwMnk0MmxwcGpyeXlpcGFmIn0.XQzkWA_EotxV67me6R92wQ';
mapboxgl.accessToken = MAPBOX_TOKEN;

export default function NomadMap() {
  const { language } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Locations
  const vancouver: [number, number] = [-123.1207, 49.2827];

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    try {
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11', // Keep dark to match site theme, but clean
        projection: { name: 'mercator' }, // 2D Map
        center: vancouver,
        zoom: 3, // Zoomed out enough to see context but focused on location
        attributionControl: false,
        logoPosition: 'bottom-left',
        interactive: false, // Static-like feel as per reference card
      });

      map.current = mapInstance;

      mapInstance.on('load', () => {
        setMapLoaded(true);

        // Premium Avatar Marker
        const el = document.createElement('div');
        el.className = 'avatar-marker';

        // Inner Avatar
        const img = document.createElement('div');
        img.className = 'avatar-img';
        img.style.backgroundImage = 'url(/khalil.jpg)';
        el.appendChild(img);

        new mapboxgl.Marker({
          element: el,
          anchor: 'center',
        })
          .setLngLat(vancouver)
          .addTo(mapInstance);
      });
    } catch (error) {
      console.error('Map init error:', error);
    }

    return () => {
      map.current?.remove();
    };
  }, [language]);

  return (
    <div className="relative w-full h-full bg-gray-900 rounded-xl overflow-hidden group">
      <div ref={mapContainer} className="w-full h-full opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Location Pill Overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-xl flex items-center gap-2 text-white font-medium animate-fade-in-up">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Vancouver, Canada
        </div>
      </div>

      {/* CSS for Marker */}
      <style jsx global>{`
        .avatar-marker {
          width: 60px;
          height: 60px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .avatar-img {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          border: 3px solid white;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          transform: rotate(180deg);
        }
        
        .avatar-marker:hover .avatar-img {
          transform: scale(1.1) rotate(180deg);
        }

        .mapboxgl-ctrl-logo, .mapboxgl-ctrl-attrib { display: none !important; }
      `}</style>
    </div>
  );
}
