export function productsFactory(PRODUCTS) {
  /** @ngInject */

  let factory = {
    getAllProducts
  };

  return factory;

  function getAllProducts() {
    return PRODUCTS;
  }
};