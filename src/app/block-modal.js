class BlockModalController {
  /** @ngInject */
  $onInit() {
    this.block = this.resolve.block;
  }

  save() {
    this.close({$value: this.block});
  }

  cancel() {
    this.dismiss();
  }
}

export const blockModal = {
  template: require('./block-modal.html'),
  controller: BlockModalController,
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&',
  }
};
