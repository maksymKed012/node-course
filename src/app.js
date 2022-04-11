const path = require("path");
const express = require("express");
const exp = require("constants");
const hsb = require("hbs");
const { forecastFromAddress } = require("./utils/forecast");
const app = express();
const port = process.env.PORT || 3000;

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "../public"));

const partialsPath = path.join(__dirname, "../templates/partials");

const htmlFile = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hsb.registerPartials(partialsPath);

app.use(express.static(htmlFile));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather KEK",
    name: "Pepe the Synoptic",
    owner: "Sosisa",
  });
});

app.get("/help", (req, res) => {
  res.render("help", { help: "KEK HEEEEEEEELP", owner: "Sosisa" });
});

app.get("/about", (req, res) => {
  res.render("about", { about: "LOOOOOOL", owner: "Sosisa" });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    console.log("No address provided!");
    return res.send({ error: "No address provided" });
  }

  return forecastFromAddress(req.query.address, (weatherRes) => {
    let current = weatherRes.body.current;
    res.send({
      address: `Address is ${req.query.address}`,
      temperature: current.temperature,
      description: current.weather_descriptions[0],
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    console.log("No search!");
    res.send({ error: "No search" });
    return;
  }
  console.log(req.query);
  res.send({
    products: [],
  });
});

app.get("*", (req, res) => {
  res.render("not_found", { owner: "Pepe" });
});


app.listen(port, () => {
  console.log(`KEK started on port ${port}`);
});
