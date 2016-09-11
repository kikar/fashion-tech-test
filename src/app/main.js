class MainController {
  /** @ngInject */
  constructor() {
  }

  $onInit() {
    this.blocks = [
      {
        "type": "text",
        "title": "This is a title",
        "body": "This is body text"
      },
      {
        "type": "products",
        "products": [167687, 168012]
      },
      {
        "type": "text",
        "title": "Title of final text block",
        "body": "This is body text again"
      }
    ];
  }
}

export const main = {
  template: require('./main.html'),
  controller: MainController
};
