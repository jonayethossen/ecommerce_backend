const express = require("express");
const router = express.Router();
// localhost: 5000 / application / v1 / auth;
router.get("/auth", (req, res) => {
  res.send("auth");
});
module.exports = router;
