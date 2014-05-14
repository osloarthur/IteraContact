angular.module('app').controller('mainController', function($scope) {
    $scope.lists = [
        {name: 'Best List Ever', featured: true, published: new Date('1/1/12')},
        {name: 'Worst List Ever', featured: false, published: new Date('1/1/02')},
    ];
});                                                                                