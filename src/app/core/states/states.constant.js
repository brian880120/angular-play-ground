(function (angular) {
    'use strict';

    angular.module('routerApp.core.states')
        .constant('routerApp.core.states.StatesConstant', {
            HOME: 'home',
            HOME_LIST: 'home.list',
            HOME_PARAGRAPH: 'home.paragraph',
            ABOUT: 'about',

            PLAY_GROUND: 'playGround',
            PLAY_GROUND_USERCARD: 'playGround.userInfoCard',
            PLAY_GROUND_DECORATOR: 'playGround.decorator',
            PLAY_GROUND_TRANSCLUSION: 'playGround.transclusion',
        });
})(angular);
