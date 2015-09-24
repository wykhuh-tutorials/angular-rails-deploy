class ArticlesController {
  constructor (Articles) {
    'ngInject';

    Articles.query( (res) => {
      this.articles = res;
    });
  }
}

export default ArticlesController;
