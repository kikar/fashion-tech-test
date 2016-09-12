class ProductBlockController {
  /** @ngInject */
  constructor(PRODUCTS) {
    this.PRODUCTS = PRODUCTS;
  }

  $onInit() {
    if (!angular.isArray(this.selected.products)) {
      this.selected.products = [];
    }

    if (this.edit) {
      this.selectedProducts = angular.copy(this.PRODUCTS);
      this.selectedProducts = this.selectedProducts.map(product => {
        if (this.selected.products.includes(product.id)) {
          product.isSelected = true;
        }
        return product;
      });
    } else {
      this.selectedProducts = this.PRODUCTS.filter(product => {
        return this.selected.products.includes(product.id);
      });
    }
  }

  selectProduct(index) {
    this.selectedProducts[index].isSelected != this.selectedProducts[index].isSelected;
  }
}

export const productBlock = {
  template: require('./product-block.html'),
  controller: ProductBlockController,
  bindings: {
    edit: '=',
    selected: '=?'
  }
};
