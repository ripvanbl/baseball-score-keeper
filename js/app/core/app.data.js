(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('appData', ['localStorageService', appData]);

    function appData(localStorageService) {
        return {
                get game() { return getGame(); },
                set game(val) { saveGame(val); },
                getGenericPlayers: getGenericPlayers,
                reset: reset
            };
        
        ////////////
        
        function getGame() {
            return localStorageService.get('game');
        }
        
        function saveGame(game) {
            localStorageService.set('game', game);
        }
        
        function getGenericPlayers() {
            return [
                { name: 'Player 1', num: 1 },
                { name: 'Player 2', num: 2 },
                { name: 'Player 3', num: 3 },
                { name: 'Player 4', num: 4 },
                { name: 'Player 5', num: 5 },
                { name: 'Player 6', num: 6 },
                { name: 'Player 7', num: 7 },
                { name: 'Player 8', num: 8 },
                { name: 'Player 9', num: 9 }
            ];
        }
        
        function reset() {
            localStorageService.remove('game');
        }
    }
})();