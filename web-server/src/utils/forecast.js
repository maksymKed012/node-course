// import request from "postman-request"
const request = require('postman-request');


const kAccessKey = '576f56d5c05e2f819efab11a0d9b5967';
const url = 'http://api.weatherstack.com/current?access_key=&query=${lat},${lon}&units=f';
const kUrl = 'http://api.weatherstack.com/current';

// let kUrl = {
//     _url : 'http://api.weatherstack.com/current',
//     addParam : function (name, value) {
//         return _url + '?' + name + '=' + value;
//     }
// };


 let forecastFromCoord = (lat, lon, callback) => {
    const _url = `${kUrl}?access_key=${kAccessKey}&query=${lat},${lon}&units=m`;
    request({url: _url, json: true}, (error, response) => {
        if(error) {
            callback("KEK ERROR");
        } else {
            callback(response);
        }
    });
}

let forecastFromAddress = (address, callback) => {
    const _url = `${kUrl}?access_key=${kAccessKey}&query=${address}&units=m`;
    request({url: _url, json: true}, (error, response) => {
        if(error) {
            callback("KEK ERROR");
        } else {
            callback(response);
        }
    });
}

module.exports = {forecastFromAddress, forecastFromCoord};