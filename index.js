const express = require("express");
require("dotenv").config();
const router = require("./router");
const app = express();
app.use(router);
//localhost:5000
app.listen(process.env.SERVER_PORT || 8080, () => {
  console.log("Server nijar moto coltaca");
});
