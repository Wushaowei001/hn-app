var storiesRoutes = require('./stories/routing/routes');

module.exports = function routes(app) {
    app.use('/stories', storiesRoutes);
};