angular.module('app').controller('navBarLoginController', function($scope, $http, identity, notifier, authService) {
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
});