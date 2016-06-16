(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .run(ModuleRun);

    ModuleRun.$inject = [
        'routerApp.core.states.StatesProvider',
        'routerApp.core.states.StatesConstant'
    ];
    function ModuleRun(StatesProvider, StatesConstant) {
        var states = [
            {
                state: StatesConstant.PLAY_GROUND,
                config: {
                    url: '/playGround',
                    templateUrl: 'playGround/templates/playGround.template.html'               
                }
            }, {
                state: StatesConstant.DELAY_BIND,
                config: {
                    url: '',
                    component: 'delayBind'
                }
            }
        ];
        StatesProvider.configureStates(states);
    }
}());