(function() {
  'user strict';

  angular
    .module('soccerApp', ['ui.router', 'templates'])
    .config(["$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise("/");

      $stateProvider
       .state('games', {
         url: "/",
         templateUrl: "games/games.list.html",
         controller: 'GamesController as vm'
       })
       .state('games.new', {
         url: 'games/new',
         templateUrl: 'games/games.new.html',
         controller: 'GamesController as vm'
       })
       .state('games.detail', {
         url: 'games/:id',
         templateUrl: 'games/games.detail.html',
         controller: 'GamesController as vm'

       })

    }]);
}())
