const express = require("express");
const router = express.Router();
const auth = require("./auth");
// localhost:5000
const baseurl = process.env.BASE_URL;
// localhost:5000/api/v1
router.use(baseurl, auth);
module.exports = router;
