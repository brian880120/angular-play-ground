(function() {
    'use strict';
    angular.module('routerApp.home')
        .controller('routerApp.home.HomeController', HomeController);

    HomeController.$inject = [
        'routerApp.core.CoreService',
        'routerApp.core.CoreFactory'
    ];

    function HomeController(CoreService, CoreFactory) {
        var vm = this;
        vm.test = test;
        vm.dogs = [
            'Bernese',
            'Husky',
            'Goldendoole'
        ];
        function test() {
            console.log('in home' + CoreService.getName());
            CoreService.setName('Bo');
            console.log('in home' + CoreService.getName());
        }
    }
}());