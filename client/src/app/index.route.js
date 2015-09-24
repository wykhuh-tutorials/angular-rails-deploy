function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })

    .state('articles', {
      url: '/articles',
      templateUrl: 'app/articles/articles.html',
      controller: 'ArticlesController',
      controllerAs: 'vm'
    });



  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
