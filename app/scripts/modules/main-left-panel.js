(function() {  
    var leftPanel = angular.module('mainLeftPanelModule', []);
      
      leftPanel.controller('leftPanelController', function(){


			alert('asdfasdf');
			
    	  $scope.books={};
    	  $scope.save = function(){
    		  if($scope.write.chapter){
    			  $http.put('/asdf/asdfa/sdf');
    		  }
    	  };
    	  
          
      
      });
      
})(); 
  