var config = require('../config');
var _ = require('lodash');


var storiesHelper = {};

storiesHelper.getLinkForTopStories = function () {
    return config.hn_api_url + config.hn_api_topstories + config.hn_api_url_postfix;
};

storiesHelper.getLinkForNewStories = function () {
    return config.hn_api_url + config.hn_api_newstories + config.hn_api_url_postfix;
};

storiesHelper.getLinkForStory = function (id) {
    return config.hn_api_url + config.hn_api_item + id + config.hn_api_url_postfix;
};

storiesHelper.takeTopItems = function (items) {
    return _.take(items, config.items_counter);
};


module.exports = storiesHelper;