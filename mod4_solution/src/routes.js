(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html'
  })

  .state('categoryList', {
    url: '/categories',
    templateUrl: 'src/menulist/templates/menu-categorylist.html',
    controller: 'MenuCategoryListController as menuCategoryList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
        .then(function (response) {
          return response.data;
        });
      }]
    }
  })

  .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'src/menulist/templates/menu-items.html',
    controller: 'CategoryItemsController as categoryItems',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
       function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.shortName)
        .then(function (response) {
          return response.data.menu_items;
        });
      }]
    }
  });


}

})();
