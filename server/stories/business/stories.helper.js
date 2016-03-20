var config = require('../config');
var _ = require('lodash');


var storiesHelper = {};

storiesHelper.getLinkForStories = function (type) {
    return config.hn_api_url + type + config.hn_api_url_postfix;
};

storiesHelper.getTypeNameForTopStories = function (type) {
    return config.hn_api_topstories;
};

storiesHelper.getTypeNameForNewStories = function (type) {
    return config.hn_api_newstories;
};

storiesHelper.getLinkForItem = function (id) {
    return config.hn_api_url + config.hn_api_item + id + config.hn_api_url_postfix;
};

storiesHelper.takeTopItems = function (items) {
    return _.take(items, config.items_counter);
};


module.exports = storiesHelper;