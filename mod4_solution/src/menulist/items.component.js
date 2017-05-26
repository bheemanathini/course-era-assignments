(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/menulist/templates/itemslist.html',
  bindings: {
    items: '<'
  }
});

})();
