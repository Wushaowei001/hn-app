var mongoose = require('mongoose');
 mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/items');


var Item = mongoose.model('Item', {
    id: String,
    title: String,
    url: String,
    Date: Date
});

module.exports.Item = Item;
