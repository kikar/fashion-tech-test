class TextBlockController {
  /** @ngInject */
  constructor() {
  }

  $onInit() {
    console.log(this.article);
    console.log(this.edit);
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
