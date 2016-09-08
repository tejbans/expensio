function Expense($resource){
  var Expense = $resource('http://localhost:3000/api/v1/expenses/:id.json', {id: '@id'}, {
    update: {method: 'PUT'}
  });
  return Expense;
}

angular
  .module('app')
  .factory('Expense', Expense)