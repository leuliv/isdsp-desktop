var app = angular.module('app',['ngRoute']);
const {remote} = require('electron')

app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: path.join(__dirname, 'components/home/index.html'),
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