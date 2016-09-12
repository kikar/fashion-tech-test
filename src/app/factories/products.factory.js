export function productsFactory(PRODUCTS) {
  /** @ngInject */

  const factory = {
    getAllProducts
  };

  return factory;

  function getAllProducts() {
    return PRODUCTS;
  }
}
