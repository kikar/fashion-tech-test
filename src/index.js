import angular from 'angular';

import {constantsModule} from './constants';
import {factoriesModule} from './app/factories/index';

import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {productBlock} from './app/product-block';
import {textBlock} from './app/text-block';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', constantsModule, factoriesModule])
  .config(routesConfig)
  .component('app', main)
  .component('productBlock', productBlock)
  .component('textBlock', textBlock);