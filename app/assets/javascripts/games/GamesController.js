function GamesController(GamesService, $stateParams, $scope, $state) {
  var vm = this;

  GamesService.all()
    .then(data => $scope.games = data)

    if ($stateParams.id) {
      GamesService.getDetail($stateParams.id)
        .then(data => vm.game = data)
    }

    vm.createGame = function () {
      GamesService
      .create(vm.game)
      .then(game => $scope.$parent.games.push(game))
      .then(vm.game = {})
    }

    vm.deleteGame = function () {
      GamesService
        .destroy(vm.game.id)
        .then(() => {
          var currentGames = $scope.$parent.games.filter(game => game.id !== vm.game.id);
          $scope.$parent.games = currentGames;
          $state.go('games')
        })
    }

}

angular
.module('soccerApp')
.controller('GamesController', GamesController);
