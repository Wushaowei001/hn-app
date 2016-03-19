var request = require('request');
var async = require('async');
var storiesHelper = require('./stories.helper');

var storiesService = {};

storiesService.getTopStoriesFromHN = function (req, res) {

    request.get(storiesHelper.getLinkForTopStories(), function (error, response, body) {
        var ids = storiesHelper.takeTopItems(JSON.parse(body));

        async.map(ids, storiesService.getStoryFromHN, function (error, response) {
            res.json(response);
        });
    });

};

storiesService.getStoryFromHN = function (id, cb) {

    request.get(storiesHelper.getLinkForStory(id), function (error, response, body) {
        cb(null, JSON.parse(body));
    })

};







module.exports = storiesService;
