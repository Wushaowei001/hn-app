var itemsRoutes = require('server/stories/routes');

module.exports = function routes(app) {
    app.use('/stories', itemsRoutes);
};