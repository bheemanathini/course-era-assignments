(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;

  service.saveUserInfo = function(user){
    var promise = service.getMenu(user.menuNumber);
    promise.then(function (response) {
    service.menuItemValid = true;

    if(service.menuItemValid){
      service.user = user;
    }
    service.user.menuItem = response.data;
})
.catch(function (error) {
console.log("Something went terribly wrong.");
service.menuItemValid = false;
});

  };

  service.getUserInfo = function(){
    return service.user;
  };

  service.getMenu = function(shortName){

    var response = $http({
      method: "GET",
      url: (ApiPath+"/menu_items/"+shortName+".json")
    });

    return response;
  };
  
}



})();
