const fs = require("fs");

async function ihatemyself() {
  try {
    var data = fs.readFileSync("src/assets/CountyStats.txt", "utf8");
    var pathData = require("./pathData.json");
    data = data.split("\n");
    var obj = [];
    for (var s = 0; s < data.length; s++) {
      // for each row
      data[s] = data[s].split(",");
      var miniObj = {
        name: "",
        gdp: 0,
        path: "",
        totalCrimes: 0,
        population: 0,
        percentInPoverty: 0,
        countySeat: "",
        lat: 0,
        long: 0,
        climate: "",
      };
      miniObj.name = data[s][0];
      miniObj.gdp = Number(data[s][1]);
      miniObj.path = pathData[s].path;
      console.log(miniObj.path);
      miniObj.totalCrimes = Number(data[s][18]) + Number(data[s][19]);
      miniObj.population = Number(data[s][20]);
      miniObj.percentInPoverty = Number(data[s][44]);
      miniObj.countySeat = data[s][47].replace(/\r/, "s");
      var geoData = await getGeoData(data[s][47]);
      miniObj.lat = geoData.results[0].locations[0].latLng.lat;
      miniObj.long = geoData.results[0].locations[0].latLng.lng;
      var weatherData = await getWeatherData(miniObj.lat, miniObj.long);
      miniObj.climate = weatherData.return_values.zone_description;
      miniObj.climate = weatherData.return_values[0].zone_description;
      obj.push(miniObj);
    }

    fs.writeFileSync("src/assets/countyData.json", JSON.stringify(obj));
  } catch (err) {
    console.error(err);
  }
}
ihatemyself();

async function getGeoData(cityName) {
  var a = "initial";
  await fetch(
    `http://www.mapquestapi.com/geocoding/v1/address?key=dQnhK4WO16Lk8Ap2GsdZvqG1qBv9uud4&location=${cityName},CA`
  )
    .then((response) => response.json())
    .then((data) => {
      a = data;
    });
  return a;
}

async function getWeatherData(lat, long) {
  var a = "initial";
  await fetch(
    `http://climateapi.scottpinkelman.com/api/v1/location/${lat}/${long}`
  )
    .then((response) => response.json())
    .then((data) => {
      a = data;
    });
  return a;
}
