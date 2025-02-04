const LAT = "43.8866";
const LON = "-111.6777";
const APIKEY = "https://api.openweathermap.org/data/2.5/weather?lat=43.8866&lon=-111.6777&appid=3737816ef52c12e67b685e8f426fd701";

const WEATHER_URL_STUB = "./data/weather.json";
const WEATHER_URL_PROD = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}`;

const apiURL = WEATHER_URL_PROD;

const DIRECTORY_DATA_URL_PROD = "<PRODUCTION_URL_HERE>";
const DIRECTORY_DATA_URL_STUB = "./data/business.json";
const DIRECTORY_DATA_URL_TEST = "http://127.0.0.1:8000/data/all";

const businessDataUrl = DIRECTORY_DATA_URL_TEST;
