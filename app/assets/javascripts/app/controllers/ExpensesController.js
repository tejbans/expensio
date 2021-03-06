function ExpensesController(ExpenseService, CategoryService, $location, $scope, $filter) {
  var ctrl = this;
  ctrl.chartLabels = [];
  ctrl.chartData =[];
  ctrl.showbtn = true;
  ctrl.options = {legend: {display: true}};
  ctrl.expenses =[];
  
  
  ExpenseService.getExpenses().then(function(res){
    ctrl.expenses = res.data;
    ctrl.filteredExpenses = res.data;
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


  ctrl.getTotal = function(expenseList){
    var total = 0;
     expenseList.forEach(function(exp) {
      total += exp.amount;
    });
    return total;
  } ;

  ctrl.addTen = function(expense){
    var params={amount: expense.amount + 10}
    //expense.amount = expense.amount+10;
    ExpenseService.updateExpense(params, expense.id).then(function(response){
         ctrl.updateExpenses();
         
    });
  };

  ctrl.updateExpenses = function(){
    ExpenseService.getExpenses().then(function(res){
    ctrl.expenses = res.data;
    });
  };
  
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
  };

  ctrl.updateExp = function(expense){
      console.log(expense);
      var params={
        category_id: expense.category_id,
        }

        ExpenseService.updateExpense(params, expense.id).then(function(response){
        });
    };

    ctrl.getExpensesByCat = function(category){
      ctrl.filteredExpenses = ctrl.expenses;
      if(category){
        ctrl.filteredExpenses = ctrl.filteredExpenses.filter(function(exp){
          return exp.category_id === category;
        });
      };
      ctrl.catTotal = ctrl.getTotal(ctrl.filteredExpenses);
      ctrl.catPercent = ctrl.catTotal/ctrl.getTotal(ctrl.expenses) * 100;
    };

    
}



angular
  .module('app')
  .controller('ExpensesController', ExpensesController)



  