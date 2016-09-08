angular
  .module('app', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/templates/home.html',
        controller: 'HomeController' as ctrl'
      })
      .state('home.new', {
        url: 'new',
        templateUrl: 'app/templates/home/new.html',
        controller: 'ExpensesController as ctrl',
      })
    $urlRouterProvider.otherwise('/');
  });