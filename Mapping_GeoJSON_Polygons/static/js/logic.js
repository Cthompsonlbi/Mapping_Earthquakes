// Add console.log to check to see if our code is working.
console.log("working");
//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);
// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets,
};

// //Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

//Pass our map layers into our layers control and add the layers control
L.control.layers(baseMaps).addTo(map);


let torontoHoods = "https://raw.githubusercontent.com/cthompsonlbi/Mapping_Earthquakes/main/torontoNeighborhoods.json";
//Create a style for the lines
let mStyle = {
    color: "blue",
    fillColor: "yellow",
    weight: 1,
}


//Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function (data) {
    console.log(data);
    //Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        style: mStyle,
        //     //}).addTo(map);
        //     // L.geoJSON(data, {
        onEachFeature: function (features, layer) {
        console.log(layer);
        layer.bindPopup("<h3> Neighborhood: " + features.properties.AREA_NAME + "</h3>");
             }
        }).addTo(map);
});