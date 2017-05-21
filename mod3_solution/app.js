(function(){
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

function FoundItems(){
  var ddo = {
templateUrl: 'found.html',
    scope: {
      found: '<',
      onRemove: '&'
    }

  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var controller = this;
  controller.searchTerm="";
  controller.search = function(){
  var search = controller.searchTerm.trim();
  if(search.length == 0){
    controller.items = [];
  }else{
  var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
  promise.then(function (response) {
  controller.items = response;
})
.catch(function (error) {
  console.log("Something went terribly wrong.");
});
}
};
controller.removeItem = function(index){
  controller.items.splice(index, 1);
};

}

MenuSearchService.$inject = ['$q','$http'];
function MenuSearchService($q, $http){
  var service = this;
  service.getMatchedMenuItems = function(searchTerm){
  var deferred = $q.defer();
  var promise = getMenuCategories();

  promise.then(function (response) {
    var items;
   items = response.data.menu_items;
   var found = [];
   for (var i = 0; i < items.length; i++) {
      var description = items[i].description;
      if (description.toLowerCase().indexOf(searchTerm) !== -1) {
        found.push(items[i]);
      }
    }
   deferred.resolve(found);
})
  .catch(function (error) {
   console.log("Something went terribly wrong.");
});
    return deferred.promise;
}

  var getMenuCategories = function(){

    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });

    return response;
  };

}
})();
