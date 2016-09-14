class MainController {
  /** @ngInject */
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  $onInit() {
    this.blocks = [];
  }

  editBlock(index) {
    const modal = this.$uibModal.open({
      component: 'blockModal',
      size: 'lg',
      resolve: {
        block: () => {
          return angular.copy(this.blocks[index]);
        }
      }
    });

    modal.result
    .then(updatedBlock => {
      this.blocks[index] = updatedBlock;
    });
  }

  removeBlock(index) {
    this.blocks.splice(index, 1);
  }

  addBlock(type) {
    const modal = this.$uibModal.open({
      component: 'blockModal',
      size: 'lg',
      resolve: {
        block: () => {
          return {
            type
          };
        }
      }
    });

    modal.result
    .then(newBlock => {
      this.blocks.push(newBlock);
    });
  }
}

export const main = {
  template: require('./main.html'),
  controller: MainController
};
