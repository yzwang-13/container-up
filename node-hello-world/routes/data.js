var express = require("express");
var router = express.Router();
var fileData = require("../public/MOCK_DATA.json");

/* GET greeting */
router.get("/", function (req, res, next) {
  const limit = req.query.dataFetchIDs;
  console.log(limit);
  res.send({ data: [fileData.slice(0, limit)] });
});

module.exports = router;
