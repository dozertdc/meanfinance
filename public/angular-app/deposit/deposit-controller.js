angular.module('cdfinance').controller('DepositController', DepositController);

function DepositController($http, $window, AuthFactory, jwtHelper, $location) {
  var vm = this;
  
  vm.deposit = function() {
    if ($window.sessionStorage.token && AuthFactory.isLoggedIn) {
      var token = $window.sessionStorage.token;
      var decodedToken = jwtHelper.decodeToken(token);
      var username = decodedToken.username;
      var data;
      if(vm.amount>0){
        data = {"amount" : vm.amount};
      }
      
      $http.put('/api/users/'+ username +"/deposit", data).then(function(response) {
        if (response.status == 200) {
          vm.message = "Balance increased by $" + vm.amount + "."
        }
      }).catch(function(error) {
        vm.message = "Must Add Positive Amount";
        console.log(error);
      })
    } else {
      $location.path('/');
    }
  }
}