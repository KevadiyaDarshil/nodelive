var express = require('express');
var router = express.Router();
var SC = require('../controler/studcontrol')

/* GET home page. */
router.get('/', SC.viewstud);
router.post('/addstud', SC.addstud)
router.delete('/deletestud/:id', SC.deletestud)
router.patch('/updatestud/:id', SC.updatestud)

module.exports = router;
