import angular from 'angular';
import uiRouter from 'angular-ui-router';
import storiesModule from './stories/index';
import commonModule from './common/index';

const app = angular.module('app', [uiRouter, storiesModule.name, commonModule.name]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('stories', {
            url: '/',
            template: require('stories/stories.html'),
            controller: 'StoriesController',
            controllerAs: 'str'
        });

    $locationProvider.html5Mode(true);
});

export default app;
