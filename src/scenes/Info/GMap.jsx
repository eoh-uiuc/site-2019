/* global google */

import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon,
  Polyline,
} from 'react-google-maps'

import BusIcon from 'assets/icons/bus.svg';

const shuttleRoute = [
  { lat: 40.097576, lng: -88.238580 },
  { lat: 40.098031, lng: -88.238580 },
  { lat: 40.098074, lng: -88.233325 },
  { lat: 40.105404, lng: -88.233458 },
  { lat: 40.105456, lng: -88.228820 },
  { lat: 40.116355, lng: -88.228953 },
  { lat: 40.116402, lng: -88.224033 },
  { lat: 40.115426, lng: -88.224022 },
  { lat: 40.115430, lng: -88.222364 },
  { lat: 40.114495, lng: -88.222353 },
  { lat: 40.114483, lng: -88.224021 },
  { lat: 40.104186, lng: -88.223820 },
  { lat: 40.104178, lng: -88.221870 },
  { lat: 40.100623, lng: -88.221800 },
  { lat: 40.100530, lng: -88.233369 },
];

const shuttleStops = [
  { lat: 40.097576, lng: -88.238580 },
  { lat: 40.112520, lng: -88.228835 },
  { lat: 40.115384, lng: -88.223194 },
  { lat: 40.112465, lng: -88.224055 },
];

const mainAreas = [
  [
    { lat: 40.116260, lng: -88.228842, },
    { lat: 40.112850, lng: -88.228842, },
    { lat: 40.112850, lng: -88.225800, },
    { lat: 40.116260, lng: -88.225800, },
    { lat: 40.116260, lng: -88.228842, },
  ],
  [
    { lat: 40.112630, lng: -88.228800, },
    { lat: 40.110409, lng: -88.228800, },
    { lat: 40.110614, lng: -88.225700, },
    { lat: 40.112630, lng: -88.225700, },
    { lat: 40.112630, lng: -88.228800, },
  ],
  [
    { lat: 40.114458, lng: -88.225550, },
    { lat: 40.113583, lng: -88.225550, },
    { lat: 40.113583, lng: -88.224053, },
    { lat: 40.114458, lng: -88.224053, },
    { lat: 40.114458, lng: -88.225550, },
  ],
  [
    { lat: 40.111295, lng: -88.223855, },
    { lat: 40.110643, lng: -88.223855, },
    { lat: 40.110643, lng: -88.222677, },
    { lat: 40.111295, lng: -88.222677, },
    { lat: 40.111295, lng: -88.223855, },
  ],
];

const parkingLots = [
  [
    { lat: 40.116325, lng: -88.223976, },
    { lat: 40.115488, lng: -88.223976, },
    { lat: 40.115488, lng: -88.222430, },
    { lat: 40.116325, lng: -88.222430, },
    { lat: 40.116325, lng: -88.223976, },
  ],
  [
    { lat: 40.097918, lng: -88.241344, },
    { lat: 40.094569, lng: -88.241344, },
    { lat: 40.094569, lng: -88.238694, },
    { lat: 40.097918, lng: -88.238694, },
    { lat: 40.097918, lng: -88.241344, },
  ],
];

const Map = withScriptjs(withGoogleMap(() => {
  const shuttleIcon = {
    url: BusIcon,
    anchor: new google.maps.Point(9, 9),
    size: new google.maps.Size(18, 18),
  };

  return (
    <GoogleMap
      defaultZoom={14.7}
      defaultCenter={{ lat: 40.106372, lng: -88.227222 }}
    >
      { shuttleStops.map(stop => (
        <Marker
          position={stop}
          key={`${stop.lat}${stop.lng}`}
          icon={shuttleIcon}
        />
      )) }
      { mainAreas.map((area, i) => (
        <Polygon
          path={area}
          key={`main-${i}`}
          options={{ fillColor: '#2196f3', fillOpacity: 0.2, strokeColor: '#0069c0', strokeOpacity: 0.9, strokeWeight: 1 }}
        />
      ))}
      { parkingLots.map((area, i) => (
        <Polygon
          path={area}
          key={`lot-${i}`}
          options={{ fillColor: '#8e24aa', fillOpacity: 0.3, strokeColor: '#5c007a', strokeOpacity: 0.9, strokeWeight: 1 }}
        />
      ))}
      <Polyline path={shuttleRoute} options={{ strokeColor: '#FF0000', strokeOpacity: 0.6, strokeWeight: 3 }} />
    </GoogleMap>
  );
}));

const WrappedMap = () => (
  <Map
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GMAP_API_KEY}`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `530px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);

export default WrappedMap;

