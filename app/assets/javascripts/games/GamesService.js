(function () {
  'use strict';

  angular
  .module('soccerApp')
  .factory('GamesService', ['$http', function($http) {

    return {
      all,
      getDetail,
      create,
      destroy,
      update
    }
    function all() {
      return $http.get('/api/v1/games')
            .then(response => response.data)
            .catch(err => console.log(err))
    };

    function getDetail(id) {
      return $http.get('/api/v1/games/' + id)
          .then(response => response.data)
          .catch(err => console.log(err))
    };

    function create(gameInfo) {
      const req = {
        method: 'POST',
        url: '/api/v1/games',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          game: gameInfo
        }
      }
      return $http(req)
        .then(response => response.data)
        .catch(err => console.log(err))
    }

    function update(gameInfo, id) {
      const req = {
        method: 'PATCH',
        url: `/api/v1/games/${id}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          game: gameInfo
        }
      }
      return $http(req)
        .then(response => response.data)
        .catch(err => console.log(err))
    }

    function destroy(gameId) {
      const req = {
        method: 'DELETE',
        url: `/api/v1/games/${gameId}`,
      }
      return $http(req)
        .then(response => response.data)
        .catch(err => console.log(err))
    }
  }]);
}());
