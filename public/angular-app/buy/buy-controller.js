angular.module('cdfinance').controller("BuyController", BuyController);

function BuyController($http, $window, AuthFactory, jwtHelper, $location) {
  var vm = this;
  
  vm.buy = function() {
    if ($window.sessionStorage.token && AuthFactory.isLoggedIn) {
      var token = $window.sessionStorage.token;
      var decodedToken = jwtHelper.decodeToken(token);
      var username = decodedToken.username;
      
      var data = {"symbol" : vm.symbol, "amount": vm.amount}
      
      $http.post('/api/users/'+ username +"/stocks", data).then(function(response) {
        //check the responses
        if (response.status == 200) {
          vm.message = "Bought Stock Successfully!"
        }
      }).catch(function(error) {
        console.log(error);
      })
    } else {
      $location.path('/');
    }
  }
}