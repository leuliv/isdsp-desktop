var app = angular.module('app',['ngRoute']);
const {remote} = require('electron')

app.config(function($routeProvider){
	$routeProvider.when('/',{
        //templateUrl: __dirname +'/components/auth/signup.html',
		templateUrl: __dirname +'/components/home/home.html',
		controller: 'homeCtrl'
	})
});

app.config(function($routeProvider){
	$routeProvider.when('/profile',{
		templateUrl: __dirname +'/components/profile/profile.html',
		controller: 'homeCtrl'
	})
});

app.controller('headCtrl', function($scope) {
    var win = remote.getCurrentWindow()
    $scope.close = function(){
        win.close()
    };
    $scope.minimize = function(){
        win.minimize()
    };
    $scope.maximize = function(){
        win.isMaximized() ? win.unmaximize() : win.maximize()
    };
});

app.controller('homeCtrl', function($scope) {

});