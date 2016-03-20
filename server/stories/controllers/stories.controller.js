var storiesService = require('../business/stories.service');
var storiesHelper = require('../business/stories.helper');

var storiesController = {};

storiesController.getTopStories = function (req, res) {
    return storiesService.getStoriesFromHN(req, res, storiesHelper.getTypeNameForTopStories());
};

storiesController.getNewStories = function (req, res) {
    return storiesService.getStoriesFromHN(req, res, storiesHelper.getTypeNameForNewStories());
};

storiesController.getStoryById = function (req, res) {
    return storiesService.getStoryFromHN(req, res);
};

module.exports = storiesController;
