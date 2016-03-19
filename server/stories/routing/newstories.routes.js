var express = require('express');
var router = express.Router();
var storiesController = require('../controllers/stories.controller');

router.get('/', storiesController.getNewStories);

module.exports = router;
