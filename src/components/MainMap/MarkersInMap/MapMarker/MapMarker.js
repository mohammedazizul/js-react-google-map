import { Marker } from "@react-google-maps/api";
import React from "react";

const MapMarker = (props) => {
  // let statusIcon = "http://maps.google.com/mapfiles/kml/shapes/caution.png";

  return (
    <Marker
      position={{
        lat: parseFloat(props.data.lat),
        lng: parseFloat(props.data.lng),
      }}
      // Configuration of GpsObj Marker
      title={props.data.countryName}
      name={props.data.countryName}
      key={props.data.countryCode}
      // icon={statusIcon}
    />
  );
};

export default MapMarker;
