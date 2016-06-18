(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.UserInfoCardController', UserInfoCardController);

    UserInfoCardController.$inject = [
        '$timeout'
    ];
    function UserInfoCardController($timeout) {
        var vm = this;
        vm.customers = [
            {
                name: 'customer1',
                street: 'steet1',
                url: 'url1'
            }
        ];

        vm.person1 = {
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
            ],
            level: 0
        };
        vm.person2 = {
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
            ],
            level: 1
        };

        vm.droid1 = {
            name: 'R2-D2',
            specifications: {
                manufacturer: 'Industrial Automaton',
                type: 'Astromech',
                productLine: 'R2 series'
            },
            level: 0
        };
    }
}());