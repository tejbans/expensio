function ExpenseService($http){
  this.getExpenses = function(){
    return $http.get('http://localhost:3000/api/v1/expenses');
  }
}


angular
.module('app')
.service("ExpenseService", ExpenseService)