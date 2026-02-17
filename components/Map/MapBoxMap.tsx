"use client";
import { UserLocationContext } from "@/context/UserLocationContext";
import React, { useContext } from "react";
import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "./Markers";

function MapboxMap() {
  const { userLocation } = useContext(UserLocationContext);

  if (!userLocation) return <p>Loading map...</p>;

  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Map</h2>

      <div className="rounded-lg overflow-hidden">
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: userLocation.lng,
            latitude: userLocation.lat,
            zoom: 14,
          }}
          style={{ width: "100%", height: 450 }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >

          <Markers />
         
        </Map>
      </div>
    </div>
  );
}

export default MapboxMap;
