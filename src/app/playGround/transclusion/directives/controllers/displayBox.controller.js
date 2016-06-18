(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.DisplayBoxController', DisplayBoxController);

    DisplayBoxController.$inject = [
        '$scope'
    ];

    function DisplayBoxController($scope) {
        $scope.hidden = false;
        $scope.close = close;

        function close() {
            $scope.hidden = true;
        }
    }
}());