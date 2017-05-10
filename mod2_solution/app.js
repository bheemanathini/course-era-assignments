(function(){
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

function ShoppingListCheckOffService(){
  var service = this;
  var toBuy = [
  { name: "cookies", quantity: 10},
  { name: "Chips", quantity: 2},
  { name: "Almonds", quantity: 1},
  { name: "crackers", quantity: 3},
  { name: "juice", quantity: 2}
  ];

  var bought = [];
  service.getToBuyItems = function(){
    return toBuy;
  };

  service.getBoughtItems = function(){
    return bought;
  }

  service.addItem = function (itemIndex) {
    var item = {
      name: toBuy[itemIndex].name,
      quantity: toBuy[itemIndex].quantity
    };
    bought.push(item);
  };

  service.removeItem = function (itemIdex) {
    toBuy.splice(itemIdex, 1);
  };

}


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
var toBuy = this;
toBuy.items = ShoppingListCheckOffService.getToBuyItems();

toBuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.addItem(itemIndex);
    ShoppingListCheckOffService.removeItem(itemIndex);

  };

toBuy.toShowEverythingBoughtMessage = function(){
  return ShoppingListCheckOffService.getToBuyItems().length == 0;
};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;

alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
alreadyBought.toShowNothingMessage = function(){
  return ShoppingListCheckOffService.getBoughtItems().length == 0;
};
}

})();
