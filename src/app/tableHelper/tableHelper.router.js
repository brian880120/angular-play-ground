(function() {
    'use strict';
    angular.module('routerApp.tableHelper')
        .run(ModuleRun);

    ModuleRun.$inject = [
        'routerApp.core.states.StatesProvider',
        'routerApp.core.states.StatesConstant'
    ];
    function ModuleRun(StatesProvider, StatesConstant) {
        var states = [
            {
                state: StatesConstant.TABLE_HELPER,
                config: {
                    url: '/tableHelper',
                    templateUrl: 'tableHelper/templates/table-helper.template.html',
                    controller: 'routerApp.tableHelper.TableHelperController as vm'                
                }
            }
        ];
        StatesProvider.configureStates(states);
    }
}());