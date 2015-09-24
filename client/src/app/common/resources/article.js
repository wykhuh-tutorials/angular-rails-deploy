function Articles ($resource) {
    return $resource('api/v1/articles/', {
      update: {
        method: 'PUT'
      }
    });
}


export default Articles;
