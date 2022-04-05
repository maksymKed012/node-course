import http from 'http';

const url = 'http://api.weatherstack.com/current?access_key=576f56d5c05e2f819efab11a0d9b5967&query=London&units=m';

const request = http.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
        console.log(data);
    });

    response.on('end', () => {
        console.log();
    });
});

request.end();