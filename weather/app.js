// console.log('Start');

// setTimeout(() => {
//     console.log('2 seconds later');
// }, 2000);

// console.log('Stop');
import request from "postman-request";

import * as forecast from "./forecast.js";


const apiKey = '576f56d5c05e2f819efab11a0d9b5967';

const baseUrl = 'http://api.weatherstack.com/';

const kekUrl = 'http://api.weatherstack.com/current?access_key=576f56d5c05e2f819efab11a0d9b5967&query=37.8267,-122.4233';

// request({ url: kekUrl, json: true }, (error, response) => {
//     // console.log(response.body.current);
//     console.log(`it is ${response.body.current.temperature} degrees, feels like ${response.body.current.feelslike}`);
// });

const weatherUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2NpdXJ1czAxMiIsImEiOiJjbDE0NXBma3AwNGtpM2JzNTZlN2Y4dmd1In0.StogOqWed5EiSSNyYrgmNA";

// request({url: weatherUrl, json: true}, (error, response) => {
//     console.log(`KEK`);
//     // console.log(response);
//     console.log(response.body.features[0].center);
// });

const geocode = (address, callback) => {
    const _url = `http://api.weatherstack.com/current?access_key=576f56d5c05e2f819efab11a0d9b5967&query=${lat},${lon}&units=c`;
    request({url: _url, json: true}, (error, response) => {
        callback(response.body.features[0].center);
    });
};

// geocode('Philadelphia', (result) => {
//     console.log('KEK ' + result);
// });

forecast.forecast(51.515542, -0.125271, (result) => {
    console.log(result);
});