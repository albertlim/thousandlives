(function() {  
    var leftPanel = angular.module('mainLeftPanelModule', []);
      
      leftPanel.controller('leftPanelController', ['$http', '$scope', function( $http, $scope){

$(function() {
    $('#leftPanelSlim').slimScroll({
        height: '100%'
    });
});

			 var info = this;
	            $scope.authorWorks;
	            $http.get('test/book_data.json').success(function(data){
	            	$scope.authorWorks= data;
	            });
	            
	            this.setCurrent = function(imageNumber){
	              this.current = imageNumber || 0;
	            };
			
    	  $scope.books={};
    	  $scope.save = function(){
    		  if($scope.write.chapter){
    			  $http.put('/asdf/asdfa/sdf');
    		  }
    	  };
    	  
          
      
      }]);
      
      leftPanel.controller('CollapseDemoCtrl', function($scope) {
          $scope.isCollapsed = false;
      });
      
})(); 
  