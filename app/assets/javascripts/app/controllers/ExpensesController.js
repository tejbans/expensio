function ExpensesController() {
  var ctrl = this;

  ctrl.expenses = [{
      name: 'Lunch',
      amount: 15
    },{
      name: 'Phone Bill',
      amount: 30
    }];
}

angular
  .module('app')
  .controller('ExpensesController', ExpensesController)