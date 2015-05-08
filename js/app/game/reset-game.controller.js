(function() {
    'use strict';
    
    angular.module('app.game')
        .controller('ResetGameCtrl', ['$location', 'appRoutes', 'addData', ResetGameCtrl]);
    
    function ResetGameCtrl($location, appRoutes, appData) {
        appData.game = null;
        $location.path(appRoutes.HOME).replace();
    }
})();