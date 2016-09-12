function ExpensesController(Expense) {
  var ctrl = this;
 
  ctrl.expenses = Expense.query();

  ctrl.deleteExpense = function(expense){
    expense.$delete(function(){
      $state.go($state.current, {}, {reload: true});
    });
  };
};

angular
  .module('app')
  .controller('ExpensesController', ExpensesController)