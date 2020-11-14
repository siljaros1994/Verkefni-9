import { el, element, formatDate } from './lib/utils';
import { format } from 'date-fns';
import L, { marker } from 'leaflet';
import { init, createPopup } from './lib/map';
import { fetchEarthquakes } from './lib/earthquakes';
// importa öðru sem þarf...

document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOMContentLoaded')
  const map = document.querySelector('.map');

  init(map);

  // Hér er allt „vírað“ saman
});
