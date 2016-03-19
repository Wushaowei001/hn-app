import angular from 'angular';
import StoriesController from './stories.controller';
import StoriesService from './services/stories.service';
import StoriesDataService from './services/stories-data.service';

const storiesModule = angular.module('stories', [])
    .service('StoriesService', StoriesService)
    .factory('StoriesDataService', StoriesDataService)
    .controller('StoriesController', StoriesController);

export default storiesModule;