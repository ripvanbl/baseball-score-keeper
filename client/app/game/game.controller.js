(function(){
    'use strict';
    
    angular
        .module('app.game')
        .controller('GameCtrl', ['$location', 'appRoutes', 'gameService', GameCtrl]);
        
    function GameCtrl($location, appRoutes, gameService) {
        var vm = this;
        vm.game = {};
        
        activate();
        
        
        /////////
        
        function activate() {
            vm.game = gameService.game || {};
            
            if(!vm.game.id) {
                $location.path(appRoutes.NEW_GAME.url).replace();
            }
        }
    }
})();