import L from 'leaflet';
import { format } from 'date-fns';
import { formatDate } from './utils';

let map;

// Býr til popup á korti út frá geojson með content
export function createPopup(geojson, content) {
  // TODO
}
// Býr til Leaflet kort og setur miðju á (0, 0) í zoom level 2

export function init(el) {
  // TODO
  map = L.map(el, {
    center: [0, 0],
    zoom: 2
  });
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,  
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}
  //L.marker([51.5, -0.09]).addTo(map)
 //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
 //   .openPopup();
//}

  // Bætum við "tiles" frá OSM sem eru open source. Gætum líka
  // notað frá Google, mapbox eða fleirum en þyrftum þá aðgang
