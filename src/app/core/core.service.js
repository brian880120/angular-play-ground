(function (angular) {
    'use strict';

    angular.module('routerApp.core')
        .service('routerApp.core.CoreService', CoreService);
    function CoreService() {
        this.data = {
            name: 'test'
        };
        this.setName = setName;
        this.getName = getName;

        function getName() {
            return this.data.name;
        }

        function setName(name) {
            this.data.name = name;
        }
    }
})(angular);
