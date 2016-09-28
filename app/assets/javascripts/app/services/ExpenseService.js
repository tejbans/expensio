function ExpenseService($http){
  this.getExpenses = function(){
    return $http.get('http://localhost:3000/api/v1/expenses');
  }
  this.createExpense = function(params){
    return $http.post('http://localhost:3000/api/v1/expenses', params);
  }

  this.readExpense = function(id){
    return $http.get('http://localhost:3000/api/v1/expenses/' +id );
  }

  this.updateExpense = function(params, id){
    return $http.put('http://localhost:3000/api/v1/expenses/' +id, params);
  }

  this.deleteExpense = function(id){
    return $http.delete('http://localhost:3000/api/v1/expenses/' + id);
  }
  
}


angular
.module('app')
.service("ExpenseService", ExpenseService)