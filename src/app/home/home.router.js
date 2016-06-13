(function() {
    'use strict';
    angular.module('routerApp.home')
        .run(ModuleRun);

    ModuleRun.$inject = [
        'routerApp.core.states.StatesProvider',
        'routerApp.core.states.StatesConstant'
    ];
    function ModuleRun(StatesProvider, StatesConstant) {
        var states = [
            {
                state: StatesConstant.HOME,
                config: {
                    url: '/home',
                    templateUrl: 'home/templates/partial-home.template.html'
                }
            }, {
                state: StatesConstant.HOME_LIST,
                config: {
                    url: '/list',
                    templateUrl: 'home/templates/partial-home-list.template.html',
                    controller: 'routerApp.home.HomeController as vm'
                }
            }, {
                state: StatesConstant.HOME_PARAGRAPH,
                config: {
                    url: '/paragraph',
                    template: 'I could sure use a drink right now.'
                }
            }
        ];
        StatesProvider.configureStates(states);
    }
}());