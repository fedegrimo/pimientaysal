var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/detalle', (req, res) => {
  res.render('detalleMenu');
});


module.exports = router;