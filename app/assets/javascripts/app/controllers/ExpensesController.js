function ExpensesController(Expense, $location, $state) {
  var ctrl = this;
 
  ctrl.expenses = Expense.query();
  
  ctrl.getTotal = function(){
    var total = 0;
    for (var i = 0; i< ctrl.expenses.length; i++) {
      total += ctrl.expenses[i].amount;
    };
    return total;
  } 
  
  ctrl.deleteExpense = function(expense){
    var firm = confirm("Are you sure?");
    if (firm == true){
      expense.$delete(function(){
      $state.go($state.current, {}, {reload: true});
      });
    };
  };
};

angular
  .module('app')
  .controller('ExpensesController', ExpensesController)