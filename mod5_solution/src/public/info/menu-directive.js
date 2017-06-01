(function () {
var myMod = angular.module('public');
myMod.directive('menu', Menu);

Menu.$inject = ['$http', 'ApiPath', 'SignUpService', '$q'];
function Menu($http, ApiPath, SignUpService, $q) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$asyncValidators.menu = function(modelValue, viewValue) {
              var promise = SignUpService.getMenu(viewValue);
               var def = $q.defer();
               promise.then(function (response) {

                  def.resolve();
               })
                 .catch(function (error) {
                  def.reject();
               });
                  return def.promise;
        };
        }
    }

}
})();
