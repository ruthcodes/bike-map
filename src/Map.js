import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
export class Map extends Component {
   render() {
   const MyMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 47.6288591, lng: -122.34569190000002 } }
        defaultZoom = { 15 }
      >
      </GoogleMap>
   ));
   return(
      <div className="myMap">
        <MyMap
          containerElement={ <div style={{ height: `450px`, width: '800px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
