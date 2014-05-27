'use strict';


(function(){
	var mainHomePage = angular.module('mainHomePage', []);

    mainHomePage.controller('MainCtrl', ['$http', '$scope', function ($http, $scope) {
    
    
			 var info = this;
	            $scope.subscriptions;
	            $http.get('test/book_data.json').success(function(data){
	            	$scope.subscriptions= data;
	            });
	            
	            this.setCurrent = function(imageNumber){
	              this.current = imageNumber || 0;
	            };
    }]);
    
    
    mainHomePage.directive("readerSubscriptions", function(){
    	return {
	        restrict: "E",
	        templateUrl: "views/partials/subscriptions/readerSubscriptions.html"
    };
    
    });

})();