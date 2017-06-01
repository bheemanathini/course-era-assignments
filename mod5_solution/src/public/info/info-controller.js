(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['user', 'ApiPath'];
function InfoController(user, ApiPath) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.basePath = ApiPath;

$ctrl.isregistered = function(){
  if($ctrl.user === null || $ctrl.user === undefined){
   return false;
 }
  else {
    return true;
  }

};

}
})();
