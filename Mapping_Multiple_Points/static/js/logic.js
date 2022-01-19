// Add console.log to check to see if our code is working.
console.log("working");

//Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//This is an array of the 5 most populus cities

//Pulls data from cities.js
let cityData = cities; 

//Loop Through the cities array and create a circleMarker for each city
  cityData.forEach(function(city){
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: "Orange",
        weight: 4,
    })
    .bindPopup("<h2>" +city.city + ", " + city.state + "</h2> <hr> <h3>Population "+ city.population.toLocaleString() + "</h3>").addTo(map);
  });
//This code snippet adds a circle marker to the map for Los Angeles
// let marker = L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: 'yellow',
//     radius:300,
// }).addTo(map);


//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);