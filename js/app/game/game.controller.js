(function(){
    'use strict';
    
    angular
        .module('app.game')
        .controller('GameCtrl', ['$location', 'appRoutes', 'appData', GameCtrl]);
        
    function GameCtrl($location, appRoutes, appData) {
        var vm = this;
        vm.game = {};
        
        activate();
        
        
        /////////
        
        function activate() {
            vm.game = appData.game || {};
            
            if(!vm.game.id) {
                $location.path(appRoutes.NEW_GAME.url).replace();
            }
        }
    }
})();