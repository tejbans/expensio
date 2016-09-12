angular
  .module('app')
  .controller('ViewExpenseController', ViewExpenseController)

  function ViewExpenseController(Expense, $stateParams){
    var ctrl = this;

    ctrl.expense = Expense.get({id: $stateParams.id});

  }