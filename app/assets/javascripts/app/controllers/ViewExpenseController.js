angular
  .module('app')
  .controller('ViewExpenseController', ViewExpenseController)

  function ViewExpenseController(ExpenseService, $stateParams){
    var ctrl = this;

    ExpenseService.readExpense($stateParams.id).then(function(res){
      ctrl.expense = res.data;
    });
  }