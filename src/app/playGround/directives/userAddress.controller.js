(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.UserAddressController', UserAddressController);

    UserAddressController.$inject = [
        '$scope'
    ];

    function UserAddressController($scope) {
        console.log($scope);
    }
}());