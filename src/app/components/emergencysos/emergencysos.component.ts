import { Component, OnInit } from '@angular/core';
import 'leaflet-routing-machine';

import * as mapboxgl from 'mapbox-gl';
import { map } from 'rxjs';
import { environment } from 'src/app/environments/environment';

declare var L: any;

@Component({
  selector: 'app-emergencysos',
  templateUrl: './emergencysos.component.html',
  styleUrls: ['./emergencysos.component.css'],
})
export class EmergencysosComponent implements OnInit {
  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('Not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      let mymap = L.map('map').setView([17.444679403612145, 78.39229672317512], 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mymap);
      var marker = L.marker([17.444679403612145, 78.39229672317512]).addTo(mymap);

      L.Routing.control({
        waypoints: [
          L.latLng(17.444679403612145, 78.39229672317512),
          L.latLng(17.440901232624647, 78.39165205495834)
        ]
      }).addTo(mymap)
      
      var circle = L.circle([17.444679403612145, 78.39229672317512], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
    }).addTo(mymap);
    });
    this.watchPosition();
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

  // map: mapboxgl.Map | undefined;
  // style = 'mapbox://stylee/mapbox/streets-v11';
  // lat = 12.0911;
  // lng = 85.8211;
  // zoom = 10;

  // constructor(){
  //   (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  // }

  // ngOnInit(){
  //   this.buildMap();
  // }
  // buildMap() {
  //   const navControl = new mapboxgl.NavigationControl({
  //     visualizePitch: true
  //   })
  //   this.map = new mapboxgl.Map({
  //     container: 'map',
  //     style: this.style,
  //     zoom: this.zoom,
  //     center: [this.lng, this.lat],
  //     attributionControl: false
  //   })

  //   this.map.addControl(navControl, 'top-right')
  // }
}
