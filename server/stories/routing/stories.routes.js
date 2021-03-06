var express = require('express');
var router = express.Router();
var storiesController = require('../controllers/stories.controller');

router.get('/', storiesController.getTopStories);

router.get('/:id', storiesController.getStoryById);

module.exports = router;
