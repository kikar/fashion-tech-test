class TextBlockController {
  /** @ngInject */
}

export const textBlock = {
  template: require('./text-block.html'),
  controller: TextBlockController,
  bindings: {
    edit: '=',
    article: '='
  }
};
