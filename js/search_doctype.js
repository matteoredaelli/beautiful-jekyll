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
    $scope.searchV = function(index, doctype, query) {
      var url = "http://paroleonline.it/" + index + "/" + doctype + "/_search?size=100&q=" + query;
      $http.get(url)
      	.then(function(response) {
            $scope.hits = response.data.hits.hits;
            ga('send', 'event', 'search', index + '/' + doctype, query);
         });
     };
});
