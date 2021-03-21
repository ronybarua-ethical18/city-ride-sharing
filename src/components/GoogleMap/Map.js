import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './Map.css';

export class MapContainer extends Component {
  render() {
    return (
      <div id="map-styling">
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
            
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAF-qcw5M7FfE1SWysDNZgf410YlHmSUw8'
})(MapContainer);