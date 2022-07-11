import React, { memo } from "react";
// import { MapBox } from "./styled";
import { MapContainer, TileLayer } from "react-leaflet";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import { map, tileLayer, Browser } from "leaflet";
import "leaflet/dist/leaflet.css";

/** This is a work in progress, the basic idea is to have a Map Container
 * that inherits it's size from it's parent component */
const center = [51.05011, -114.08529];
const MapWrapper = memo((props) => {
  return (
    <MapContainer
      style={{ width: "100%", height: "100vh" }}
      center={center}
      zoom={18}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
});
MapWrapper.displayName = "MapWrapper";

export { MapWrapper };
