import angular from 'angular';

import {constantsModule} from './constants';
import {factoriesModule} from './app/factories/index';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', constantsModule, factoriesModule])
  .config(routesConfig);