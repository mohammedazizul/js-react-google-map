import React, { Component } from "react";
// import data from "../../data/data";
import countriesData from "../../data/countryData";
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
import HeatInMap from "./HeatInMap/HeatInMap";
import MarkersInMap from "./MarkersInMap/MarkersInMap";
import ClusterInMap from "./ClustersInMap/ClustersInMap";

class MainMap extends Component {
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
      showMarker: false,
      showHeat: false,
      showCluster: false,
      data: countriesData,
    };
    this.handelMarkerClusterClicked =
      this.handelMarkerClusterClicked.bind(this);
    this.handelShowMarkersClicked = this.handelShowMarkersClicked.bind(this);
    this.handelHeatMapClicked = this.handelHeatMapClicked.bind(this);
    this.handelOtherClicked = this.handelOtherClicked.bind(this);
  }

  handelMarkerClusterClicked() {
    this.setState({
      showCluster: true,
      showMarker: false,
      showHeat: false,
    });
  }

  handelShowMarkersClicked() {
    this.setState({
      showCluster: false,
      showMarker: true,
      showHeat: false,
    });
  }

  handelHeatMapClicked() {
    this.setState({
      showCluster: false,
      showMarker: false,
      showHeat: true,
    });
  }

  handelOtherClicked() {
    this.setState({
      showCluster: false,
      showMarker: false,
      showHeat: false,
    });
    alert("Sorry, this feature is underdevelopment!");
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
                onClick={() => this.handelMarkerClusterClicked()}
              >
                Marker Clustering
              </Button>
            </Col>
            <Col className="bg-light border">
              <Button color="primary" onClick={this.handelShowMarkersClicked}>
                Show Markers
              </Button>
            </Col>
            <Col className="bg-light border">
              <Button color="primary" onClick={this.handelHeatMapClicked}>
                HeatMap
              </Button>
            </Col>
            <Col className="bg-light border">
              <Button color="primary" onClick={this.handelOtherClicked}>
                Others
              </Button>
            </Col>
          </Row>
        </CardBody>
        {this.state.showCluster && <ClusterInMap data={this.state.data} />}
        {this.state.showHeat && <HeatInMap data={this.state.data} />}
        {this.state.showMarker && <MarkersInMap data={this.state.data} />}
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
