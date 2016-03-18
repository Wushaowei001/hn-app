var mongoose = require('mongoose');
 mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/stories');


var Story = mongoose.model('Story', {
    id: String,
    title: String,
    url: String,
    Date: Date
});

module.exports.Story = Story;
