(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('gameService', ['localStorageService', gameService]);

    function gameService(localStorageService) {
        var LCLSTG_GAME = 'game';
        
        return {
                get game() { return getGame(); },
                set game(val) { saveGame(val); },
                reset: reset
            };
        
        ////////////
        
        function getGame() {
            return localStorageService.get(LCLSTG_GAME);
        }
        
        function saveGame(game) {
            localStorageService.set(LCLSTG_GAME, game);
        }
        
        function reset() {
            localStorageService.remove(LCLSTG_GAME);
        }
    }
})();