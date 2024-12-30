import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Substation } from '../../types/demandGroup';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface SubstationMapProps {
  substations: Substation[];
}

export function SubstationMap({ substations }: SubstationMapProps) {
  // Calculate center point from substations
  const center = substations.length > 0
    ? {
        lat: substations.reduce((sum, s) => sum + s.latitude, 0) / substations.length,
        lng: substations.reduce((sum, s) => sum + s.longitude, 0) / substations.length,
      }
    : { lat: 55.9533, lng: -3.1883 }; // Default to Edinburgh if no substations

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={8}
      className="h-full w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {substations.map(substation => (
        <Marker
          key={substation.id}
          position={[substation.latitude, substation.longitude]}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{substation.name}</h3>
              <p className="text-sm">Capacity: {substation.capacity_mw} MW</p>
              <p className="text-sm">Location: {substation.latitude.toFixed(4)}, {substation.longitude.toFixed(4)}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}