import angular from 'angular';
import domainFilter from './domain.filter.js';

const commonModule = angular.module('common', [])
    .filter('domain', domainFilter);

export default commonModule;