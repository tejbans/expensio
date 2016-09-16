function Category($resource){
  var Category = $resource('http://localhost:3000/api/v1/categories/:id.json', {id: '@id'}, {
    update: {method: 'PUT'}
  });
  return Category;
}

angular
  .module('app')
  .factory('Category', Category)