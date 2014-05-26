(function() {  
    var write = angular.module('writeModule', ['angular-medium-editor']);
      
      write.controller('writeCtrl', function( $scope){
    	  $scope.snapOpts = {
    		      disable: 'right'
    		    };

          $scope.addWriting = function(){

          };
          
      
      });
      
      write.directive("writePage", function(){
    	  return{
    		  restrict: 'E',
    		  templateUrl:"views/partials/writePage.html"
    	  };
    	  
      });
})(); 
  