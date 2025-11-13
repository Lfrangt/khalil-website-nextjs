'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useLanguage } from '@/lib/LanguageContext';

// Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhbGlsNjY2OSIsImEiOiJjbWh4Mm1taGwwMnk0MmxwcGpyeXlpcGFmIn0.XQzkWA_EotxV67me6R92wQ';

const cities = [
  { name: 'Vancouver', nameZh: '温哥华', coords: [-123.1207, 49.2827], isHome: true },
  { name: 'Toronto', nameZh: '多伦多', coords: [-79.3832, 43.6532], isHome: false },
  { name: 'Seattle', nameZh: '西雅图', coords: [-122.3321, 47.6062], isHome: false },
  { name: 'San Francisco', nameZh: '旧金山', coords: [-122.4194, 37.7749], isHome: false },
  { name: 'New York', nameZh: '纽约', coords: [-74.0060, 40.7128], isHome: false },
];

export default function NomadMapSimple() {
  const { language } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    try {
      // Initialize map centered on Vancouver
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: cities[0].coords as [number, number],
        zoom: 4,
        dragRotate: false,
        touchZoomRotate: false,
      });

      map.current = mapInstance;

      // Add navigation controls
      mapInstance.addControl(
        new mapboxgl.NavigationControl({ showCompass: false }),
        'top-right'
      );

      mapInstance.on('load', () => {
        setMapLoaded(true);

        // Add markers for each city
        cities.forEach((city) => {
          const el = document.createElement('div');
          el.style.width = city.isHome ? '50px' : '40px';
          el.style.height = city.isHome ? '50px' : '40px';
          el.style.borderRadius = '50%';
          el.style.backgroundColor = '#34A853';
          el.style.border = city.isHome ? '4px solid #34A853' : '3px solid white';
          el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
          el.style.cursor = 'pointer';
          el.style.display = 'flex';
          el.style.alignItems = 'center';
          el.style.justifyContent = 'center';
          el.style.fontSize = city.isHome ? '24px' : '20px';
          el.innerHTML = city.isHome ? '🏠' : '📍';

          new mapboxgl.Marker(el)
            .setLngLat(city.coords as [number, number])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<div style="padding: 8px;">
                  <h3 style="font-weight: bold; margin-bottom: 4px;">
                    ${language === 'zh' ? city.nameZh : city.name}
                  </h3>
                  ${city.isHome ? '<p style="font-size: 11px; color: #34A853;">Current Location</p>' : ''}
                </div>`
              )
            )
            .addTo(mapInstance);
        });
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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'zh' ? '旅行足迹' : 'Travel Footprint'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'zh'
              ? '探索我走过的城市，每个地点都承载着独特的故事与回忆'
              : 'Explore the cities I\'ve visited, each place holds unique stories and memories'}
          </p>
        </div>

        {/* Glass Morphism Map Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/40 border border-white/20 p-2">
          <div
            ref={mapContainer}
            className="h-[500px] md:h-[600px] rounded-xl overflow-hidden"
            style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)' }}
          />

          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm">
                  {language === 'zh' ? '加载地图中...' : 'Loading map...'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Current Location Badge */}
        {mapLoaded && (
          <div className="mt-6 text-center">
            <div className="inline-block glass-card px-6 py-4 rounded-full shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-medium mb-0.5">
                    {language === 'zh' ? '当前位置' : 'Current Location'}
                  </p>
                  <p className="text-sm font-bold text-white">
                    {language === 'zh' ? '温哥华, 加拿大' : 'Vancouver, Canada'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            {language === 'zh'
              ? '🌍 已探索 5 座城市 • 持续更新中...'
              : '🌍 Explored 5 cities • More to come...'}
          </p>
        </div>
      </div>
    </section>
  );
}
