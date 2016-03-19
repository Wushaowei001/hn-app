var storiesService = require('../business/stories.service');
var storiesHelper = require('../business/stories.helper');

var storiesController = {};

storiesController.getTopStories = function (req, res) {
    return storiesService.getStoriesFromHN(req, res, storiesHelper.getLinkForTopStories());
};

storiesController.getNewStories = function (req, res) {
    return storiesService.getStoriesFromHN(req, res, storiesHelper.getLinkForNewStories());
};

storiesController.getStoryById = function (req, res) {
    return storiesService.getStoryFromHN(req, res);
};

module.exports = storiesController;
