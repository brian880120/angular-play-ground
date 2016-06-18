(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.DelayBindController', DelayBindController);

    DelayBindController.$inject = [
        '$timeout'
    ];
    function DelayBindController($timeout) {
        var vm = this;
        vm.customers = [
            {
                name: 'customer1',
                street: 'steet1',
                url: 'url1'
            }
        ];

        vm.user1 = {
            name: 'Luke Skywalker',
            address: {
                street: 'PO Box 123',
                city: 'Secret Rebel Base',
                planet: 'Yavin 4'
            },
            friends: [
                'Han',
                'Leia',
                'Chewbacca'
            ]
        };
        vm.user2 = {
            name: 'Han',
            address: {
                street: 'PO Box 123',
                city: 'Secret Rebel Base',
                planet: 'Yavin 4'
            },
            friends: [
                'Han',
                'Leia',
                'Chewbacca'
            ]
        };
    }
}());