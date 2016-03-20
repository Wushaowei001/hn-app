var storiesService = require('../business/stories.service');
var dbService = require('../business/db.service');
var storiesHelper = require('../business/stories.helper');

var storiesController = {};

storiesController.getTopStories = function (req, res) {
    if (res.req.query.offline === 'true') {
        return dbService.getStoriesFromCache(req, res, storiesHelper.getTypeNameForTopStories());
    } else {
        return storiesService.getStoriesFromHN(req, res, storiesHelper.getTypeNameForTopStories());
    }
};

storiesController.getNewStories = function (req, res) {
    if (res.req.query.offline === 'true') {
        return dbService.getStoriesFromCache(req, res, storiesHelper.getTypeNameForNewStories());
    } else {
        return storiesService.getStoriesFromHN(req, res, storiesHelper.getTypeNameForNewStories());
    }
};

storiesController.getStoryById = function (req, res) {
    if (res.req.query.offline === 'true') {
        return dbService.getStoryFromCache(req, res);
    } else {
        return storiesService.getStoryFromHN(req, res);
    }
};

module.exports = storiesController;
