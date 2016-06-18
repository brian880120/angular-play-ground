(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.PersonAddressController', PersonAddressController);

    PersonAddressController.$inject = [
        '$scope'
    ];

    function PersonAddressController($scope) {
        $scope.collapsed = false;
        $scope.collapseAddress  = collapseAddress;
        $scope.expandAddress  = expandAddress;

        function collapseAddress() {
            $scope.collapsed = true;
        }

        function expandAddress() {
            $scope.collapsed = false;
        }
    }
}());