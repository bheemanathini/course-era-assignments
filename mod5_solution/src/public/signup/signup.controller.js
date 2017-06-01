(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var $ctrl = this;
  $ctrl.user = {};

  $ctrl.submit = function(){
     SignUpService.saveUserInfo($ctrl.user);
  };

  $ctrl.isSaved = function(){
    if(SignUpService.user === null || SignUpService.user === undefined){
     return false;
   }
    else {
      return true;
    }

  };
}


})();
