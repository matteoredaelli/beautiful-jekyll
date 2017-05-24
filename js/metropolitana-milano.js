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
    $scope.searchV = function(from, to) {
      var url = "https://paroleonline.it/apis/metropolitana-milano?from=" + from + "&to=" + to;
      $http.get(url)
      	.then(function(response) {
            $scope.result = response.data;
            ga('send', 'event', 'Metropolitana-Milano', 'path', from + ':' + to);
         });
    };
    
    $scope.from = $location.search().from;
    $scope.to = $location.search().to;
    //searchV($scope.from, $scope.to);
			 
});
