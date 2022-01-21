import { MarkerClusterer } from "@react-google-maps/api";
import React from "react";
import ClusterMarker from "../ClusterMarker/ClusterMarker";

const MapCluster = (props) => {
  return (
    <MarkerClusterer>
      {(clusterer) =>
        props.locations.map((location) => (
          <ClusterMarker
            key={location.userId}
            position={location}
            clusterer={clusterer}
          />
        ))
      }
    </MarkerClusterer>
  );
};

export default MapCluster;
