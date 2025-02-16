import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

const restaurantCoords: [number, number] = [40.712776, -74.005974];

export const Map = () => {
  const [center, setCenter] = useState<[number, number] | null>(null);

  useEffect(() => {
    setCenter(restaurantCoords); // Устанавливаем координаты после монтирования
  }, []);

  if (!center) return <p>Загрузка карты...</p>;

  return (
    <MapContainer
      center={center}
      zoom={30}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }} // ✅ Исправлено
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>Мой ресторан в Нью-Йорке 🗽🍔</Popup>
      </Marker>
    </MapContainer>
  );
};
