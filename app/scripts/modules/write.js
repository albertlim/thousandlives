(function() {  
    var write = angular.module('writeModule', ['angular-medium-editor']);
      
      write.controller('writeCtrl', ['$http', '$scope', function($http, $scope){

    	  $scope.write={};
    	  $scope.save = function(){
    		  if($scope.write.chapter){
    			  $http.put('/asdf/asdfa/sdf');
    		  }
    	  };
    	  
    	  $scope.snapOpts = {
    		      disable: 'right'
    		    };

          $scope.addWriting = function(){

          };
          
      
      }]);
      
      write.directive("writePage", function(){
    	  return{
    		  restrict: 'E',
    		  templateUrl:"views/partials/writePage.html"
    	  };
    	  
      });
})(); 
  