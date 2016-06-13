(function() {
    'use strict';
    angular.module('routerApp.about')
        .run(ModuleRun);

    ModuleRun.$inject = [
        'routerApp.core.states.StatesProvider',
        'routerApp.core.states.StatesConstant'
    ];
    function ModuleRun(StatesProvider, StatesConstant) {
        var states = [
            {
                state: StatesConstant.ABOUT,
                config: {
                    url: '/about',
                    views: {
                        '': {
                            templateUrl: 'about/templates/partial-about.template.html'
                        },
                        'columnOne@about': {
                            template: 'Look I am a column1'
                        },
                        'columnTwo@about': {
                            templateUrl: 'about/templates/table-data.template.html',
                            controller: 'routerApp.about.AboutController as vm'
                        }
                    }
                }
            }
        ];
        StatesProvider.configureStates(states);   
    }
}());