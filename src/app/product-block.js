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
      this.PRODUCTS.forEach(product => {
        product.isSelected = this.selected.products.includes(product.id);
      });
    }
  }

  selectProduct(index) {
    if (!this.edit) {
      return;
    }
    this.PRODUCTS[index].isSelected = !this.PRODUCTS[index].isSelected;

    if (this.PRODUCTS[index].isSelected) {
      this.selected.products.push(this.PRODUCTS[index].id);
    } else {
      let idIndex = this.selected.products.indexOf(this.PRODUCTS[index].id);
      this.selected.products.splice(idIndex, 1);
    }
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
