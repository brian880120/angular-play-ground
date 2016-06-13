(function() {
    'use strict';
    angular.module('routerApp.tableHelper')
        .controller('routerApp.tableHelper.TableHelperController', TableHelperController);

    function TableHelperController() {
        var vm = this;
        vm.customers = [
            {
                name: 'customer1',
                street: 'steet1',
                url: 'url1'
            }
        ];
    }
}());