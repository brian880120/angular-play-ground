(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.PlayGroundController', PlayGroundController);

    PlayGroundController.$inject = [
        '$timeout'
    ];
    function PlayGroundController($timeout) {
        var vm = this;
        vm.customers = [
            {
                name: 'customer1',
                street: 'steet1',
                url: 'url1'
            }
        ];

        vm.user = {
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
    }
}());