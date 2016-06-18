(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.UserAddressController', UserAddressController);

    UserAddressController.$inject = [
        '$scope'
    ];

    function UserAddressController($scope) {
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