(function() {
    'use strict';
    angular.module('routerApp.about')
        .controller('routerApp.about.AboutController', AboutController);

    AboutController.$inject = [
        'routerApp.core.CoreService',
        'routerApp.core.CoreFactory'
    ];

    function AboutController(CoreService, CoreFactory) {
        var vm = this;
        vm.test = test;
        vm.scotches = [
            {
                name: 'Macallan 12',
                price: 50
            },
            {
                name: 'Chivas Regal Royal Salute',
                price: 10000
            },
            {
                name: 'Glenfiddich 1937',
                price: 20000
            }
        ];
        function test() {
            console.log('in about' + CoreService.getName());
            CoreService.setName('Boo');
            console.log('in about' + CoreService.getName());
        }
    }
}());