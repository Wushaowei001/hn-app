var itemsRoutes = require('server/items/routes');

module.exports = function routes(app) {
    app.use('/items', itemsRoutes);
};