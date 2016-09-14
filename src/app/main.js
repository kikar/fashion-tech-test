class MainController {
  /** @ngInject */
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  $onInit() {
    this.blocks = [
      {
        type: "text",
        title: "This is a title",
        body: "This is body text"
      },
      {
        type: "products",
        products: [167687, 168012]
      },
      {
        type: "text",
        title: "Title of final text block",
        body: "This is body text again"
      }
    ];
  }

  editBlock(index) {
    const modal = this.$uibModal.open({
      component: 'blockModal',
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
