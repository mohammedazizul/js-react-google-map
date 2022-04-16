import React, { Component } from "react";
import data from "../../../data/data";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import MapCluster from "../ClustersInMap/ClusterMarker/MapCluster/MapCluster";

class ClusterInMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 2.9065319,
        lng: 101.6499131,
      },
      mapContainerStyle: {
        height: "75vh",
        width: "100%",
      },
      zoom: -1,
      usersData: data,
    };
  }

  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey={"AIzaSyDpG-NeL-XGYAduQul2JenVr86HIPITEso"}
        language="en"
        region="us"
      >
        <GoogleMap
          id="googleHeatMap"
          mapContainerStyle={this.state.mapContainerStyle}
          center={this.state.center}
          zoom={10}
        >
          <MapCluster locations={this.props.data} />
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default ClusterInMap;
