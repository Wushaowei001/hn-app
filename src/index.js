import angular from 'angular';
import appModule from './config';
import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';

angular.bootstrap(document, [appModule.name, angularMaterial]);