var express = require('express');
var router = express.Router();
var matrix = require('./matrix');

/* GET home page. */
router.get('/api/:name', function(req, res) {

  //sample json api to get data from mongodb
  req.db.collections("test").find().then(function(data){
    res.json(data);
  });

});

router.get('/matrix', matrix.getIndex);

module.exports = router;
