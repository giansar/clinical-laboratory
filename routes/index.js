var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendfile(__dirname + "/public/index.html");
  //res.render('index', { title: process.version });
});

module.exports = router;
