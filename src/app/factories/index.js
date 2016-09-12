import angular from 'angular';

import {productsFactory} from './products.factory';

export const factoriesModule = 'factories';

angular
  .module(factoriesModule, [])
  .factory('Products', productsFactory);
