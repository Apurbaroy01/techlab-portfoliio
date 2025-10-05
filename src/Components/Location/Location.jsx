import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const Location = () => {
  const position = [22.808678663899396, 89.53672596297686];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-blue-200 py-10">
      <div className="relative w-full max-w-5xl h-[550px] bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-[1.01]">
        
        {/* Header */}
        <div className="absolute top-4 left-6 z-[1000] bg-white px-4 py-2 rounded-full shadow-md text-gray-700 font-semibold text-lg flex items-center gap-2">
          <span className="text-green-600">📍</span> TechLabs Location
        </div>

        {/* Map Section */}
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-full w-full rounded-3xl"
        >
          {/* Map style */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />

          {/* Marker */}
          <Marker position={position}>
            <Popup>
              <div className="text-center font-medium">
                <p className="text-green-600">TechLabs</p>
                <p className="text-gray-500 text-sm">
                  Service Available ✅
                </p>
              </div>
            </Popup>
          </Marker>

          {/* Circle Coverage */}
          <Circle
            center={position}
            radius={50000}
            color="#16a34a"
            fillColor="#86efac"
            fillOpacity={0.3}
          />
        </MapContainer>

        {/* Footer overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-md text-sm text-gray-700">
          🌐 Location Coverage: <span className="text-green-600 font-semibold">50km Radius</span>
        </div>
      </div>
    </div>
  );
};

export default Location;
