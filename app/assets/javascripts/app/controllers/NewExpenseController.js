angular
  .module('app')
  .controller('NewExpenseController', NewExpenseController)

  function NewExpenseController(ExpenseService, CategoryService, $location){
    var ctrl = this;
    
    CategoryService.getCategories().then(function(res){
      ctrl.categories = res.data;
    });

   // ctrl.expense = new Expense();
    
    ctrl.addExpense = function(){
        var params={
          name: ctrl.name,
          category_id: ctrl.category_id,
          amount: ctrl.amount,
          description: ctrl.description
        }

        ExpenseService.createExpense(params).then(function(response){
          $location.path('expenses');
        });
    }
   
  

    //ctrl.addExpense = function(){
    // ctrl.expense.$save(function(){
     //   $location.path('expenses');
    // });
    //};
  }