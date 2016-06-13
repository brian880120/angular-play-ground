(function (angular) {
    'use strict';

    angular.module('routerApp.core')
        .factory('routerApp.core.CoreFactory', CoreFactory);
    function CoreFactory() {
        var data = {
            name: 'test'
        };
        return {
            setName: setName,
            getName: getName
        };
        function setName(name) {
            data.name = name;
        }
        function getName() {
            return data.name;
        }
    }
})(angular);
