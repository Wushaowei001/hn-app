var request = require('request');
var async = require('async');
var storiesHelper = require('./stories.helper');

var storiesService = {};

storiesService.getStoriesFromHN = function (req, res, link) {
    request.get(link, function (error, response, body) {
        var ids = storiesHelper.takeTopItems(JSON.parse(body));

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
        cb(null, JSON.parse(body));
    })
}

function processComments (id, cb) {
    request.get(storiesHelper.getLinkForItem(id), function (error, response, body) {
        cb(null, JSON.parse(body));
    })
}


module.exports = storiesService;
