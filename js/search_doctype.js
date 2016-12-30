var app = angular.module('myApp', [], function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

app.config(['$httpProvider', function($httpProvider) {
        //$httpProvider.defaults.useXDomain = true;
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.controller('planetController', function($scope, $http, $location) {
    $scope.q = $location.search().q;
    $scope.searchV = function(idx, typ, q) {
      var url = "http://paroleonline.it/" + idx + "/" + typ + "/_search?size=100&q=" + q.substring(0,30);
      $http.get(url)
      	.then(function(response) {
            $scope.hits = response.data.hits.hits;
            ga('send', 'event', 'search', idx + '/' + typ, q);
         });
    };
    //$scope.searchV($scope.idx, $scope.typ, $scope.q);
});
