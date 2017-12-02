var express = require('express');
var router = express.Router();
const getPallete = require("../lib/getPallete");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
