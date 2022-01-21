import { Marker } from "@react-google-maps/api";
import React from "react";

const ClusterMarker = (props) => {
  // console.log(props);
  // to generate key
  // function createKey(location) {
  //   return location.lat + location.lng;
  // }

  return (
    <Marker
      // key={createKey(props.position)}
      key={props.position.userId}
      position={props.position}
      clusterer={props.clusterer}
    />
  );
};

export default ClusterMarker;
