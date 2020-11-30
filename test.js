const cache = require("./lib/featureServiceToGeoJSON.js")

const urls = [
  "https://utility.arcgis.com/usrsvcs/servers/76f8f4bd06084d4d9ad4efed1db30590/rest/services/zanesville_utility/MapServer/",
  "https://services9.arcgis.com/IUhP9plEzDTayUVC/arcgis/rest/services/Muskingum_County_Benchmarks/FeatureServer/",
  "https://services9.arcgis.com/IUhP9plEzDTayUVC/arcgis/rest/services/Water_Utilities_View_II/FeatureServer/"
];

cache.featureServiceToGeoJSON(urls[1], {
  debug: true
  // filter: "storm"
});

// const queryAttachments = require("./lib/queryAttachments.js")

// queryAttachments("https://services9.arcgis.com/IUhP9plEzDTayUVC/ArcGIS/rest/services/Water_Utilities_View_II/FeatureServer/", "../geojson-cache", "../images")