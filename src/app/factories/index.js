import angular from 'angular';

import {productsFactory} from './products.factory';
import {isSelectedFilter} from './is-selected.filter';

export const helpersModule = 'helpers';

angular
  .module(helpersModule, [])
  .factory('Products', productsFactory)
  .filter('isSelected', isSelectedFilter);
