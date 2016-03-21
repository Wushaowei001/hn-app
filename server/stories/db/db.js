var mongoose = require('mongoose');
 mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/stories');


var Story = mongoose.model('story_content', {
    _id: Number,
    title: String,
    url: String,
    by: String,
    time: Number,
    kids: [Number]
});

var Stories = mongoose.model('stories_list', {
    name: String,
    ids: [Number]
});

var Comment = mongoose.model('comment', {
    _id: Number,
    author: String,
    text: String
});

var models = {
    Story: Story,
    Stories: Stories,
    Comment: Comment
};

module.exports = models;
