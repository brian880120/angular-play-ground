(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.PlayGroundController', PlayGroundController);

    PlayGroundController.$inject = [
        '$scope',
        '$timeout'
    ];
    function PlayGroundController($scope, $timeout) {
        var vm = this;
        vm.customers = [
            {
                name: 'customer1',
                street: 'steet1',
                url: 'url1'
            }
        ];
        $scope.$watch(function() {
            console.log('Top-level digest 1.');
        });
        $scope.$watch(function() {
            console.log('Top-level digest 2.');
        });
        $scope.$watch(function() {
            console.log('Top-level digest 3.');
        });

        vm.isHot = false;
        vm.setIsHot = function(newIsHot) {
            vm.isHot = newIsHot;
        };
    }
}());