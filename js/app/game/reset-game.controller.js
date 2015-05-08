(function() {
    'use strict';
    
    angular.module('app.game')
        .controller('ResetGameCtrl', ['$location', 'appRoutes', 'appData', ResetGameCtrl]);
    
    function ResetGameCtrl($location, appRoutes, appData) {
        activate();
        
        
        /////////
        
        function activate() {
            appData.reset();
            
            $location.path(appRoutes.HOME.url).replace();
        }
    }
})();
