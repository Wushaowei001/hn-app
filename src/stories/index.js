import angular from 'angular';
import StoriesController from './controllers/stories.controller.js';
import StoryController from './controllers/story.controller';
import StoriesService from './services/stories.service';
import StoriesDataService from './services/stories-data.service';
import StoriesListDirective from './directives/stories-list.directive';

const storiesModule = angular.module('stories', [])
    .service('StoriesService', StoriesService)
    .factory('StoriesDataService', StoriesDataService)
    .controller('StoriesController', StoriesController)
    .controller('StoryController', StoryController)
    .directive('storiesList', StoriesListDirective);

export default storiesModule;