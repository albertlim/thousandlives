'use strict';

angular.module('thousandlivesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'writeModule',
  'ui.bootstrap',
  'ui.slimscroll',
  'snap',
  'mainLeftPanelModule',
  'mainHomePage',
  'readerSubscriptionModule'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/write', {
        templateUrl: 'partials/write',
        controller: 'writeCtrl',
      })
    /*  .when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'SettingsCtrl',
        authenticate: true
      })*/
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
      
    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      
      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  }).controller('TabsDemoCtrl', function($scope){
	  
	  $scope.tabs = [
	                 { title:'Home', navigation:'/' },
	                 { title:'Write', navigation:'/write'},
	                 { title:'Login', navigation:'/login'},
	                 { title:'Register', navigation:'/signup'},
	                 { title:'Logout', navigation:'logout'},
	               ];
	  
  }).directive("mainLeftPanel", function(){
	  return {
            restrict: "E",
            templateUrl: "views/partials/panels/mainLeftPanel.html"
      };
  }).directive("mainRightPanel", function(){
	  return {
	        restrict: "E",
	        templateUrl: "views/partials/panels/mainRightPanel.html"
    };
});