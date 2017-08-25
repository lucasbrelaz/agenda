(function() {
  'use strict';

  angular
    .module('generator')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    // $stateProvider
    //   .state('home', {
    //     url: '/',
    //     templateUrl: 'app/main/main.html',
    //     controller: 'MainController',
    //     controllerAs: 'main'
    //   });

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/listar/listar.html',
        controller: 'ListarController',
        controllerAs: 'controller'
      });
    
    $stateProvider
      .state('contatoCadastrar', {
        url: '/contatoCadastrar',
        templateUrl: 'app/contatoCadastrar/contatoCadastrar.html',
        controller: 'ContatoCadastrarController',
        controllerAs: 'controller'
      });

    $stateProvider
      .state('contatoEditar', {
        url: '/contatoEditar/:id',
        templateUrl: 'app/contatoCadastrar/contatoCadastrar.html',
        controller: 'ContatoEditarController',
        controllerAs: 'controller'
      });

    $stateProvider
    .state('contatoDeletar', {
      url: '/contatoDeletar/:id',
      templateUrl: 'app/contatoVer/contatoVer.html',
      controller: 'ContatoDeletarController',
      controllerAs: 'controller'
    });

    $stateProvider
    .state('contatoVer', {
      url: '/contatoVer/:id',
      templateUrl: 'app/contatoVer/contatoVer.html',
      controller: 'ContatoVerController',
      controllerAs: 'ctContatoVer'
    });

    $stateProvider
    .state('listar', {
      url: '/listar',
      templateUrl: 'app/listar/listar.html',
      controller: 'ListarController',
      controllerAs: 'controller'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();
