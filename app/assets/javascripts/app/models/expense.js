function Expense($resource){
  var Note = $resource('http://localhost:3000/api/v1/expenses/:id.json', {id: '@id'}, {
    update: {method: 'PUT'}
  });
  return Note;
}

angular
  .module('app')
  .factory('Expense', Expense)