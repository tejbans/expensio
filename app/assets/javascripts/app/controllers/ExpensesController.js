function ExpensesController(Expense, Category, $location, $state) {
  var ctrl = this;
 
  ctrl.expenses = Expense.query();
  ctrl.categories = Category.query();
  
  ctrl.getTotal = function(){
    var total = 0;
    for (var i = 0; i< ctrl.expenses.length; i++) {
      total += ctrl.expenses[i].amount;
    };
    return total;
  } 

  ctrl.getCategoryTotal = function(category){
    var catTotal = 0;
     ctrl.expenses.forEach(function(exp){
       if (exp.category.name == category){
        catTotal += exp.amount;
       }
     });
      return catTotal;
  }

  
  ctrl.deleteExpense = function(expense){
    var firm = confirm("Are you sure you want to delete this item?");
    if (firm == true){
      expense.$delete(function(){
      $location.path('expenses');
      });
    };
  };
};

angular
  .module('app')
  .controller('ExpensesController', ExpensesController)