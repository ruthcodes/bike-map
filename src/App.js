import React, { Component } from 'react';
import { Sidebar } from './Sidebar.js';
import { Map } from './Map.js';
import './bootstrap.min.css';
import './App.css';
import config from './config.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filters: {
        ofoFilter: true,
        limebikeFilter: true,
        spinFilter: true,
      },
      bikePositions: {
        ofoLoc: [],
        limebikeLoc: [],
        spinLoc: [],
      },
      userLat: 47.6288591,
      userLon: -122.34569190000002,
    }

    var mykey = config.MY_KEY;
  }
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <div className="grid">
            <div className="row">
              <div className="col-md-12">
                <h1>Bikeshare Map</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="sidebar col-xl-3 col-lg-3 col-md-3 d-none d-md-block">
            <Sidebar />
          </div>
          <div ref="map" className="map col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
