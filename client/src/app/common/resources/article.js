function Article ($resource) {
  'ngInject';
  return $resource('api/v1/articles/', {
    update: {
      method: 'PUT'
    }
  });
}

export default Article;
