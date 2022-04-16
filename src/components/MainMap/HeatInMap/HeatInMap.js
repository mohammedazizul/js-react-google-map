import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import HeatLayer from "../HeatInMap/HeatLayer/HeatLayer";

class HeatInMap extends Component {
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
      reqLibrary: [["visualization"]], // required for HeatMap
    };
  }

  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey={"AIzaSyDpG-NeL-XGYAduQul2JenVr86HIPITEso"}
        language="en"
        region="us"
        libraries={this.state.reqLibrary}
      >
        <GoogleMap
          id="googleHeatMap"
          mapContainerStyle={this.state.mapContainerStyle}
          center={this.state.center}
          zoom={10}
        >
          {/* to display heatmap */}
          <HeatLayer data={this.props.data} />
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default HeatInMap;
