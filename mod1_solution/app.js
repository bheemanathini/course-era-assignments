(function(){
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
$scope.lunchInput = "";
$scope.fontColor;
$scope.borderColor;
$scope.evaluate = function(){

  var ele = $scope.lunchInput;
  ele = ele.trim();
//  console.log(ele.length);
  if(ele.length == 0){
    $scope.fontColor="red";
    $scope.borderColor="red";

    $scope.lunchOutput = "Please enter data first";
}else{
  $scope.fontColor="green";
  $scope.borderColor="green";
  var eleArray = ele.split(',');
  if(eleArray.length <= 3){
  $scope.lunchOutput = 'Enjoy!';
}
  else {
      $scope.lunchOutput = 'Too much!';
  }
}
}
}
})();
