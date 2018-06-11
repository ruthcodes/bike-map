import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import config from './config.js';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '450px',
      height: '450px'
    }
    return (
      <div style={style}>
        <Map google={this.props.google} zoom={14}>
        </Map>
      </div>
    );
  }
}

var mykey = config.MY_KEY;

export default GoogleApiWrapper({
  apiKey: (mykey)
})(MapContainer)
