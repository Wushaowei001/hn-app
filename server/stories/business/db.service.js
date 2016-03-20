var db = require('../db/db');
var async = require('async');

var dbService = {};

dbService.saveStoriesIds = function (name, ids) {
    db.Stories.findOne({'name': name}, function (err, stories) {
        if (err) {
            return;
        }

        if (stories) {
            stories.ids = ids;
            stories.save();
        } else {
            var storiesList = new db.Stories({name: name, ids: ids});
            storiesList.save();
        }
    });

};

dbService.saveStory = function (story) {
    db.Story.findOne({'_id': story.id}, function (err, doc) {
        if (err) {
            return;
        }

        if (!doc) {
            var newStory = new db.Story({
                _id: story.id,
                title: story.title,
                url: story.url,
                date: story.time,
                kids: story.kids
            });
            newStory.save();
        }
    });

};

dbService.saveComment = function (comment) {
    db.Comment.findOne({'_id': comment.id}, function (err, doc) {
        if (err) {
            return;
        }

        if (!doc) {
            var newStory = new db.Comment({
                _id: comment.id,
                author: comment.by,
                text: comment.text
            });
            newStory.save();
        }
    });

};

dbService.getStoriesFromCache = function (req, res, name) {
    db.Stories.findOne({'name': name}, function (err, stories) {
        if (err || !stories) {
            return res.send();
        }

        async.map(stories.ids, processStory, function (err, response) {
            if (err) {
                return res.send();
            }

            res.json(response);
        });
    });
};

dbService.getStoryFromCache = function (req, res) {
    var id = req.params.id;

    processStory(id, function(err, response) {
        var story = response;

        if (err || !story) {
            return res.send();
        }

        async.map(story.kids, processComments, function (err, response) {

            if (err) {
                return res.send();
            }

            story.comments = response.filter(function (c) {
                return c !== null;
            });
            res.json(story);
        });
    })
};

function processStory (id, cb) {
    db.Story.findOne({'_id': id}).lean().exec(function (err, doc) {
        doc.id = doc._id;
        delete doc._id;
        cb(err, doc);
    });
}

function processComments (id, cb) {
    db.Comment.findOne({'_id': id}).lean().exec(function (err, doc) {
        cb(err, doc);
    });
}

module.exports = dbService;
