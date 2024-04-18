# EcoVista
This app provides weather and air quality data of desired location. [Live site](https://ecovista-bay.vercel.app/)

## Features
1. While first visiting the app, the app asks for the user's location permisiion. After getting the permission, the app uses the browser's geolocation API to get the user's location (longitude and latitude). The weather and air quality data is displayed for that location.
2. There are 4 cards displaying the following data: current weather condition, wind, temperature and air quality and pollution.
3. By clicking the location selector icon, user can see data of different regions. User can find the data of other region by simply going to the ```/locationName``` route where locationName needs to be replaced by user's desired location. If the location is not supported, an error message is shown to each card with a button to go to the home.

## APIs
The app uses some external apis as well as a few internal apis.

External APIs:
1. [Open Weather Map current weather API](https://openweathermap.org/current)
2. [Open Weather Map Air Pollution API](https://openweathermap.org/api/air-pollution)
3. [Bigdata Cloud Reverse Geocode to City API](https://www.bigdatacloud.com/free-api/free-reverse-geocode-to-city-api)

Internal API endpoints:
1. ```GET '/api/location'``` : returns all the location data
2. ```GET '/api/location/[locationName]'``` : returns the data of only a particular location

## Technologies used
Next JS
