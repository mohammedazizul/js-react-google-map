import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import MapMarker from "./MapMarker/MapMarker";

class MarkersInMap extends Component {
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
    };
  }

  // function to lot markers
  //   plotMarkers() {
  //     let printMarkers = this.props.data.map((gpsObj) => {
  //       return (
  //         <Marker
  //           position={{
  //             lat: parseFloat(gpsObj.lat),
  //             lng: parseFloat(gpsObj.lng),
  //           }}
  //         />
  //       );
  //     });
  //     return printMarkers;
  //   }

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
          {/* to plot map marker */}
          {/* A. using function */}
          {/* {this.plotMarkers()} */}
          {/* B. using functional component */}
          {this.props.data.map((gpsObj) => {
            return <MapMarker data={gpsObj} />;
          })}
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default MarkersInMap;
// Ref: https://developers.google.com/maps/documentation/javascript/reference
