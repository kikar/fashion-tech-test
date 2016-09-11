class BlockModalController {
  /** @ngInject */
  constructor() {
  }

  $onInit() {
    this.block = this.resolve.block;
    console.log(this.block);
  }

  close() {
    this.close({ $value: 'Chiuso' });
  }

  dismiss() {
    this.dismiss({ $value: 'Cancellato' });
  }
}

export const blockModal = {
  template: require('./block-modal.html'),
  controller: BlockModalController,
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  }
};
