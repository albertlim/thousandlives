(function() {  
    var subscribed = angular.module('readerSubscriptionModule', []);
      
    subscribed.controller('readerSubscribedController', ['$scope', '$http', function($scope, $http){

        var info = this;
        $scope.subscriptions;
        $http.get('test/top_ranked.json').success(function(data){
            $scope.subscriptions = data.bookList;
        });
      
    }]);
      
})(); 
  