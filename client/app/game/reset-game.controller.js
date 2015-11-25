(function() {
    'use strict';
    
    angular.module('app.game')
        .controller('ResetGameCtrl', ['$location', 'appRoutes', 'gameService', ResetGameCtrl]);
    
    function ResetGameCtrl($location, appRoutes, gameService) {
        activate();
        
        
        /////////
        
        function activate() {
            gameService.reset();
            
            $location.path(appRoutes.HOME.url).replace();
        }
    }
})();
