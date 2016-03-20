var request = require('request');
var async = require('async');
var storiesHelper = require('./stories.helper');
var dbService = require('./db.service');

var storiesService = {};

storiesService.getStoriesFromHN = function (req, res, type) {
    request.get(storiesHelper.getLinkForStories(type), function (error, response, body) {
        var ids = storiesHelper.takeTopItems(JSON.parse(body));
        dbService.saveStoriesIds(type, ids);

        async.map(ids, processStory, function (error, response) {
            res.json(response);
        });
    });
};

storiesService.getStoryFromHN = function (req, res) {
    var id = req.params.id;

    processStory(id, function(error, response) {
        var story = response;
        async.map(story.kids, processComments, function (error, response) {
            story.comments = response;
            res.json(story);
        });
    })
};

function processStory (id, cb) {
    request.get(storiesHelper.getLinkForItem(id), function (error, response, body) {
        var story = JSON.parse(body);
        dbService.saveStory(story);
        cb(null, story);
    })
}

function processComments (id, cb) {
    request.get(storiesHelper.getLinkForItem(id), function (error, response, body) {
        var comment = JSON.parse(body);
        dbService.saveComment(comment);
        cb(null, comment);
    })
}



module.exports = storiesService;
