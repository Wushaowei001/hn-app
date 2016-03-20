var db = require('../db/db');

var dbService = {};

dbService.saveStoriesIds = function (name, ids) {
    db.Stories.findOne({'name': name}, function (err, stories) {
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

module.exports = dbService;
