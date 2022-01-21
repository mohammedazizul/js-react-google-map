import { Marker } from "@react-google-maps/api";
import React from "react";

const MapMarker = (props) => {
  return (
    <Marker
      position={{
        lat: parseFloat(props.data.lat),
        lng: parseFloat(props.data.lng),
      }}
    />
  );
};

export default MapMarker;
