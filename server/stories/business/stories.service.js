var request = require('request');
var async = require('async');
var storiesHelper = require('./stories.helper');
var dbService = require('./db.service');

var storiesService = {};

storiesService.getStoriesFromHN = function (req, res, type) {
    request.get(storiesHelper.getLinkForStories(type), function (err, response, body) {
        if (err) {
            return res.send();
        }

        var ids = storiesHelper.takeTopItems(JSON.parse(body));
        dbService.saveStoriesIds(type, ids);

        async.map(ids, processStory, function (err, response) {
            if (err) {
                return res.send();
            }

            res.json(response);
        });
    });
};

storiesService.getStoryFromHN = function (req, res) {
    var id = req.params.id;

    processStory(id, function(err, response) {
        if (err) {
            return res.send();
        }

        var story = response;
        async.map(story.kids, processComments, function (err, response) {
            if (err) {
                return res.send();
            }

            story.comments = response;
            res.json(story);
        });
    })
};

function processStory (id, cb) {
    request.get(storiesHelper.getLinkForItem(id), function (err, response, body) {
        var story = JSON.parse(body);
        dbService.saveStory(story);
        cb(err, story);
    })
}

function processComments (id, cb) {
    request.get(storiesHelper.getLinkForItem(id), function (err, response, body) {
        var comment = JSON.parse(body);
        dbService.saveComment(comment);
        cb(err, comment);
    })
}



module.exports = storiesService;
