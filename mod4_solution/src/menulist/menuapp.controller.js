(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoryListController', MenuCategoryListController);


MenuCategoryListController.$inject = ['items'];
function MenuCategoryListController(items) {
  console.log("entered");
  console.log("controller",items);
  var menuCategoryList = this;
  menuCategoryList.items = items;
}

})();
