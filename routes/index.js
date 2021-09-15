var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("lista", {
    title: "Express",
    list: ["banana", "apple"],
    objectList: [
      { a: 1, b: 2, c: 3 },
      { a: 10, b: 20, c: 30 },
    ],
  });
});

module.exports = router;
