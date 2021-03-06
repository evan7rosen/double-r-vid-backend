const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const { Model } = require("objection");
const logger = require("morgan");
const knex = require("./db/knex");

const customers = require("./routes/customersRoutes");
const videos = require("./routes/videosRoutes");

Model.knex(knex);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/customers", customers);
app.use("/videos", videos);

module.exports = { app };
