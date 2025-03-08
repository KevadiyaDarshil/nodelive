var express = require('express');
var router = express.Router();
var RC = require('../controler/rsltcontrol')


/* GET users listing. */
router.get('/',RC.viewrslt);
router.post('/addrslt',RC.addrslt)


module.exports = router;
