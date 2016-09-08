angular
  .module('app')
  .controller('NewExpenseController', NewExpenseController)

  function NewExpenseController(Expense, $location){
    var ctrl = this;

    ctrl.expense = new Expense();

    ctrl.addExpense = function(){
     ctrl.expense.$save(function(){
        $location.path('expenses');
     });
    };
  }