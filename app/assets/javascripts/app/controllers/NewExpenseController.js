angular
  .module('app')
  .controller('NewExpenseController', NewExpenseController)

  function NewExpenseController(Expense, Category, $location){
    var ctrl = this;
    
    ctrl.categories = Category.query();
    ctrl.expense = new Expense();
    
   
  

    ctrl.addExpense = function(){
     ctrl.expense.$save(function(){
        $location.path('expenses');
     });
    };
  }