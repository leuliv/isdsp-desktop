var app = angular.module('app', ['ngRoute']);
const { remote } = require('electron');

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: __dirname + '/components/home/home.html',
            controller: 'homeCtrl',
            resolve: {
                currentAuth: function (AuthService) {
                    return AuthService.authenticate();
                }
            }
        })
        .when('/profile', {
            templateUrl: __dirname + '/components/profile/profile.html',
            controller: 'homeCtrl',
            resolve: {
                currentAuth: function (AuthService) {
                    return AuthService.authenticate();
                }
            }
        })
        .when('/auth', {
            templateUrl: __dirname + '/components/auth/auth.html'
        })
        .when('/signin', {
            templateUrl: __dirname + '/components/auth/signin.html'
        })
        .when('/signup', {
            templateUrl: __dirname + '/components/auth/signup.html'
        }).when('/signup_nxt', {
            templateUrl: __dirname + '/components/auth/signup_nxt.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}
]);

app.run(['$rootScope', '$location',
    function ($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
            if (error == 'AUTH_REQUIRED') {
                $rootScope.message = 'Sorry, you must log in to access that page';
                $location.path('/auth');
            } //AUTH_REQUIRED
        }); // $routeChangeError
    }
]);

app.factory('AuthService', function ($q) {
    return {
        authenticate: function () {
            // Your authenication logic
            return $q.reject('AUTH_REQUIRED');
        }
    }
});


app.controller('headCtrl', function ($scope) {
    var win = remote.getCurrentWindow()
    $scope.close = function () {
        win.close()
    };
    $scope.minimize = function () {
        win.minimize()
    };
    $scope.maximize = function () {
        win.isMaximized() ? win.unmaximize() : win.maximize()
    };
});

app.controller('homeCtrl', function ($scope) {

});