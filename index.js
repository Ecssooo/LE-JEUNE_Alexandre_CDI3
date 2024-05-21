const express = require("express");
const routes = require("./routes/start");
const cors = require("cors");
require("dotenv").config();
const app = express();
const ip = require("ip");
const port = 3000;
const ipAddr = ip.address();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

let lastHouseVisited = "Gryffindor";

//Rendu semaine IOT

app.get("/", (req, res) => {
  res.json({ house: lastHouseVisited });
});

app.post("/", (req, res) => {
  lastHouseVisited = req.body.message;
  res.json({ house: lastHouseVisited });
});

let collection = [];
app.get("/getCollection", (req, res) => {
  res.json({ collection: collection });
});

app.post("/addCollection", (req, res) => {
  collection.push(req.body.message);
  res.json({ collection: collection });
});

app.listen(port, () => {
  console.log("Server run : http://" + ipAddr + ":" + port);
});
