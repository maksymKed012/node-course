console.log("KEEEEEEEEEEEEEEEEEEEEK");

const weatherForm = document.querySelector("form");
const searchEl = document.querySelector("input");
const msgOk = document.querySelector("#msgOk");
// const msgError = document.querySelector("#msgError");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = searchEl.value;
  console.log(`test input ${location}`);
  const kAccessKey = "576f56d5c05e2f819efab11a0d9b5967";
  const kUrl = "http://api.weatherstack.com/current";
  const _url = `${kUrl}?access_key=${kAccessKey}&query=${location}&units=m`;
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      console.log(data);
      if (data.error) {
        msgOk.textContent = `Error: ${data.error.info}`;
      } else {
        msgOk.textContent = `In ${location} it is ${data.temperature} degrees. Forecast is ${data.description}`;
      }
    });
  });
});
