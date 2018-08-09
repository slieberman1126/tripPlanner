const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1Ijoic2xpZWJlcm1hbjExMjYiLCJhIjoiY2prZnY5dHJ0MGN1aTNrcDlsaGk0dnR4aSJ9.sLiJ4L9Rp5p5hlXnbSX0gg";
const buildMarker = require("./marker");

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});



const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);