import React, { Component } from "react";
import data from "../../data/userData";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button,
  Row,
  Col,
} from "reactstrap";
// import MapMarker from "../MapMarker/MapMarker";
// import HeatLayer from "../HeatLayer/HeatLayer";
import MapCluster from "../MapCluster/MapCluster";

// Ref: https://developers.google.com/maps/documentation/javascript/reference

class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerClustering: false,
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

  // function to lot markers
  plotMarkers() {
    let printMarkers = this.state.usersData.map((gpsObj) => {
      return (
        <Marker
          position={{
            lat: parseFloat(gpsObj.lat),
            lng: parseFloat(gpsObj.lng),
          }}
        />
      );
    });
    return printMarkers;
  }

  render() {
    return (
      <Card>
        <CardHeader>Markers, HeatMaps, MapCluster</CardHeader>
        <CardBody>
          <Row>
            <Col className="bg-light border">
              <Button
                color="primary"
                onClick={() =>
                  this.setState({
                    markerClustering: !this.state.markerClustering,
                  })
                }
              >
                Marker Clustering
              </Button>
            </Col>
            <Col className="bg-light border">
              <Button color="primary">Show Markers</Button>
            </Col>
            <Col className="bg-light border">
              <Button color="primary">HeatMap</Button>
            </Col>
            <Col className="bg-light border">
              <Button color="primary">Others</Button>
            </Col>
          </Row>
        </CardBody>
        <LoadScript
          id="script-loader"
          googleMapsApiKey={"AIzaSyDpG-NeL-XGYAduQul2JenVr86HIPITEso"}
          language="en"
          region="us"
          libraries={["visualization"]} // required for HeatMap
        >
          <GoogleMap
            id="googleHeatMap"
            mapContainerStyle={this.state.mapContainerStyle}
            center={this.state.center}
            zoom={10}
          >
            {/* to display heatmap */}
            {/* <HeatLayer /> */}
            {/* to plot map marker */}
            {/* A. using function */}
            {/* {this.plotMarkers()} */}
            {/* B. using functional component */}
            {/* {this.state.usersData.map((gpsObj) => {
              return <MapMarker data={gpsObj} />;
            })} */}
            {/* to do map cluster */}
            {this.state.markerClustering && (
              <MapCluster locations={this.state.usersData} />
            )}
          </GoogleMap>
        </LoadScript>
        <CardBody>
          <CardTitle tag="h2">Google Maps JavaScript API v3</CardTitle>
          <CardText>Library: @react-google-maps/api</CardText>
        </CardBody>
        <CardFooter>Note: Please do not misuse the data, Thank you.</CardFooter>
      </Card>
    );
  }
}

export default MainMap;
