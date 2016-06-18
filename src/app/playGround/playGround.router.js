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
                    templateUrl: 'playGround/playGround.template.html',
                    controller: 'routerApp.playGround.PlayGroundController as vm'
                }
            }, {
                state: StatesConstant.PLAY_GROUND_USERCARD,
                config: {
                    url: '',
                    views: {
                        'contentPlayground@playGround': {
                            component: 'userInfoCard'
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
            }, {
                state: StatesConstant.PLAY_GROUND_TRANSCLUSION,
                config: {
                    url: '',
                    views: {
                        'contentPlayground@playGround': {
                            component: 'transclusion'
                        }
                    }
                }  
            }
        ];
        StatesProvider.configureStates(states);
    }
}());