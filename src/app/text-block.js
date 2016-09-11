class TextBlockController {
  /** @ngInject */
  constructor() {
  }

  $onInit() {
  }
}

export const textBlock = {
  template: require('./text-block.html'),
  controller: TextBlockController,
  bindings: {
    edit: '=',
    article: '='
  }
};
