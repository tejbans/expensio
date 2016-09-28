function ExpensesController(ExpenseService, CategoryService, $location, $state) {
  var ctrl = this;
  ctrl.chartLabels = [];
  ctrl.chartData =[];
  ctrl.showbtn = true;
  ctrl.options = {legend: {display: true}};
  ctrl.expenses =[];
  
  ExpenseService.getExpenses().then(function(res){
    ctrl.expenses = res.data;
  });

  CategoryService.getCategories().then(function(res){
    ctrl.categories = res.data;
  });

  ctrl.getCategoryTotal = function(category){
    var catTotal = 0;
     ctrl.expenses.forEach(function(exp){
       if (exp.category.name == category){
        catTotal += exp.amount;
       }
     });
      return catTotal;
  }


  ctrl.getTotal = function(){
    var total = 0;
    ctrl.expenses.forEach(function(exp) {
      total += exp.amount;
    });
    return total;
  } 


  
  ctrl.deleteExpense = function(expense){
    var firm = confirm("Are you sure you want to delete this item?");
    if (firm == true){
      ExpenseService.deleteExpense(expense.id).then(function(res){
        $location.path('expenses');
      });
    };
  };

   ctrl.getChartInfo = function(){
      ctrl.showbtn = false;
    ctrl.categories.forEach(function(cat){
     ctrl.chartLabels.push(cat.name);
     ctrl.chartData.push(ctrl.getCategoryTotal(cat.name));
    });
  }

     
};



angular
  .module('app')
  .controller('ExpensesController', ExpensesController)



  