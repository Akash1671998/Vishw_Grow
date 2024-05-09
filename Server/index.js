const express = require("express");
const connect = require("../Server/src/database/db");
const { DefaultData } = require("../Server/src/DefaultData");
const routes = require("./src/routes/Routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 9091;

const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);
app.listen(port, () => console.log(`Example app listening on port ${port}`));

DefaultData();
