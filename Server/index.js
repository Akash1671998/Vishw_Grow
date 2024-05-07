

const express = require('express')
const connect = require('../Server/src/database/db')
const {DefaultData} = require('../Server/src/DefaultData');
const app = express()
const port = 8080


app.listen(port, () => console.log(`Example app listening on port ${port}`));

DefaultData();