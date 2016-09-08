function ExpensesController(Expense) {
  var ctrl = this;
 
  ctrl.expenses = Expense.query();
}

angular
  .module('app')
  .controller('ExpensesController', ExpensesController)