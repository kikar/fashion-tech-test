export function modalsFactory($uibModal) {
  /** @ngInject */

  let factory = {
    productsModal,
    textModal
  };

  return factory;

  function productsModal() {
    var modal = $uibModal.open({

    });
  }

  function textModal() {
    var modal = $uibModal.open({

    });
  }
};