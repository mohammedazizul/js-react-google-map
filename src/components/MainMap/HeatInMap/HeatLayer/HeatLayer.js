/* global google */
import React from "react";
import { HeatmapLayer } from "@react-google-maps/api";
// import userLatLngData from "../data/userLatLngData";
// const gradient = [
//   "rgba(0, 255, 255, 0)",
//   "rgba(0, 255, 255, 1)",
//   "rgba(0, 191, 255, 1)",
//   "rgba(0, 127, 255, 1)",
//   "rgba(0, 63, 255, 1)",
//   "rgba(0, 0, 255, 1)",
//   "rgba(0, 0, 223, 1)",
//   "rgba(0, 0, 191, 1)",
//   "rgba(0, 0, 159, 1)",
//   "rgba(0, 0, 127, 1)",
//   "rgba(63, 0, 91, 1)",
//   "rgba(127, 0, 63, 1)",
//   "rgba(191, 0, 31, 1)",
//   "rgba(255, 0, 0, 1)",
// ];
const options = {
  // dissipating: false,
  // radius: 0.2,
  // opacity: 0.2,
  // gradient: gradient,
  maxIntensity: 1,
};

const HeatLayer = (props) => {
  const coordinates = props.data.map(
    (data) => new google.maps.LatLng(data.lat, data.lng)
  );
  // options={undefined} default setting
  // options ref: https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions
  return <HeatmapLayer data={coordinates} options={options} />;
};

export default HeatLayer;

// more ref:
// https://github.com/JustFly1984/react-google-maps-api/blob/master/packages/react-google-maps-api-gatsby-example/src/examples/example-heatmap.js
// https://react-google-maps-api-docs.netlify.app/
