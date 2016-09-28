angular
  .module('app')
  .controller('EditExpenseController', EditExpenseController)

  function EditExpenseController(ExpenseService, CategoryService, $location, $stateParams){
    var ctrl = this;
    ctrl.expense = {};
    
    CategoryService.getCategories().then(function(res){
      ctrl.categories = res.data;
    });

    ExpenseService.readExpense($stateParams.id).then(function(res){
      ctrl.expense = res.data;
    });

    ctrl.editExpense = function(){
      var params={
          name: ctrl.expense.name,
          category_id: ctrl.expense.category_id,
          amount: ctrl.expense.amount,
          description: ctrl.expense.description
        }

        ExpenseService.updateExpense(params, $stateParams.id).then(function(response){
          $location.path('expenses');
        });
    };
    
  }