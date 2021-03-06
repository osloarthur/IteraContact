angular.module('app').controller('navBarLoginController', function($scope, $http, identity, notifier, authService, $location) {
    $scope.identity = identity;
    $scope.signin = function (username, password) {
        authService.authenticateUser(username, password).then(function (success) {
            if(success) {
                notifier.notify('You have signed in!');
            } else {
                notifier.notify('Username/Password combination incorrect');
            }
        })

    }

    $scope.signout = function() {
        authService.logoutUser().then(function () {
            $scope.username = "";
            $scope.password = "";
            notifier.notify('You have signed out!');
            $location.path('/');

        })

    }
});