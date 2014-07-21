var express = require('express');
var router = express.Router();
var matrix = require('./matrix');

/* GET home page. */
router.get('/:name', function(req, res) {

  //sample json api to get data from mongodb
  // req.db.collections("test").find({}).then(function(data){
  //   res.json(data);
  // });

  res.json({
    application: "Angular-Express",
    name: req.params.name,
    message: "Hello World"
    });

});

router.get('/matrix', matrix.getIndex);

module.exports = router;
