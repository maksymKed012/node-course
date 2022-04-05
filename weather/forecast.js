import request from "postman-request"

export let forecast = (lat, lon, callback) => {
    const _url = `http://api.weatherstack.com/current?access_key=576f56d5c05e2f819efab11a0d9b5967&query=${lat},${lon}&units=f`;
    request({url: _url, json: true}, (error, response) => {
        if(error) {
            callback("KEK ERROR");
        } else {
            callback(JSON.stringify(response));
        }
    });
}