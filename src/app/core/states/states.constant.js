(function (angular) {
    'use strict';

    angular.module('routerApp.core.states')
        .constant('routerApp.core.states.StatesConstant', {
            HOME: 'home',
            HOME_LIST: 'home.list',
            HOME_PARAGRAPH: 'home.paragraph',
            ABOUT: 'about',

            PLAY_GROUND: 'playGround',
            DELAY_BIND: 'playGround.delayBind',
            PLAY_GROUND_DECORATOR: 'playGround.decorator',
        });
})(angular);
