import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itemsController from './items/items';

const app = angular.module('app', [uiRouter]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('items', {
            url: '/',
            template: require('items/items.html'),
            controller: itemsController
        });

    $locationProvider.html5Mode(true);
});

export default app;
