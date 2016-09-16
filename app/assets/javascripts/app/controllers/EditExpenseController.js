angular
  .module('app')
  .controller('EditExpenseController', EditExpenseController)

  function EditExpenseController(Expense, Category, $location, $stateParams){
    var ctrl = this;
    ctrl.categories = Category.query();
    ctrl.expense = Expense.get({id: $stateParams.id});

    ctrl.editExpense = function(){
      ctrl.expense.$update(function(){
        $location.path('expenses');
      });
    };
  }