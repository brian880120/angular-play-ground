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
                    templateUrl: 'playGround/playGround.template.html'               
                }
            }, {
                state: StatesConstant.DELAY_BIND,
                config: {
                    url: '',
                    views: {
                        'contentPlayground@playGround': {
                            component: 'delayBind'
                        }
                    }
                }
            }, {
                state: StatesConstant.PLAY_GROUND_DECORATOR,
                config: {
                    url: '',
                    views: {
                        'contentPlayground@playGround': {
                            component: 'decorator'
                        }
                    }
                }
            }
        ];
        StatesProvider.configureStates(states);
    }
}());