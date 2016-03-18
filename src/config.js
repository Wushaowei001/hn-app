import angular from 'angular';
import uiRouter from 'angular-ui-router';
import storiesModule from './stories/index';

const app = angular.module('app', [uiRouter, storiesModule.name]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('stories', {
            url: '/',
            template: require('stories/stories.html'),
            controller: 'StoriesController',
            controllerAs: 'str',
            resolve: {
                storiesList: function (StoriesService) {
                    return StoriesService.getStoriesList();
                }
            }
        });

    $locationProvider.html5Mode(true);
});

export default app;
