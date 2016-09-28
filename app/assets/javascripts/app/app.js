angular
  .module('app', ['ui.router', 'templates', 'ngResource', 'chart.js'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'app/templates/home.html',
        controller: 'HomeController as ctrl'
      })
      .state('home.new', {
        url: 'new',
        templateUrl: 'app/templates/home/new.html',
        controller: 'NewExpenseController as ctrl',
      })
      .state('home.expenses',{
        url: 'expenses',
        templateUrl: 'app/templates/home/expenses.html',
        controller: 'ExpensesController as ctrl',
        resolve: {
          expenses: function(ExpenseService){
            return ExpenseService.getExpenses();
          }
        }
      })
      .state('home.expense', {
        url: 'expense/:id',
        templateUrl: 'app/templates/home/show.html',
        controller: 'ViewExpenseController as ctrl'
      })
      .state('home.edit',{
        url: 'edit/:id',
        templateUrl: 'app/templates/home/edit.html',
        controller: 'EditExpenseController as ctrl'
      });
    $urlRouterProvider.otherwise('/');
  });