import {BaseElement} from './base-element.js';

export class GoogleMap extends BaseElement {

  constructor(mapCenter, data) {
    super();
    this.mapCenter = mapCenter;
    this.data = data;
  }

  createElement() {
    super.createElement();
    setTimeout(() => {
      var map = new window.google.maps.Map(document.getElementById('map'), 
        {zoom : 13, center : this.mapCenter});

      for (let vehicle of this.data) {
        let [lat,long] = vehicle.latLong.split(' ');
        let googleLatLong = new window.google.maps.LatLng(lat, long);

        var marker = new window.google.maps.Marker(
          {
            position : googleLatLong,
            map: map
          }
        )

        marker.setMap(map);
      }

    }, 0);
  }

  getElementString() {
    return `
      <div style="width:800px; height:400px;" id="map"></div>
    `;
  }
}