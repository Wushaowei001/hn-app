var storiesRoutes = require('./stories/routing/stories.routes');
var newStoriesRoutes = require('./stories/routing/newstories.routes');

module.exports = function routes(app) {
    app.use('/newstories', newStoriesRoutes);
    app.use('/stories', storiesRoutes);
};