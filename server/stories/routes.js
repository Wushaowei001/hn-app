var mongoose = require('mongoose');
var Story = require('server/db/db').Story;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send([4,1,2,3]);
});

module.exports = router;
