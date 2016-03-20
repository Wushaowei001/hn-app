import angular from 'angular';
import domainFilter from './domain.filter.js';
import timeFilter from './time.filter.js';

const commonModule = angular.module('common', [])
    .filter('domain', domainFilter)
    .filter('timeFilter', timeFilter);

export default commonModule;