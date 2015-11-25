(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('appData', ['localStorageService', appData]);

    function appData(localStorageService) {
        return {
                get game() { return getGame(); },
                set game(val) { saveGame(val); },
                getTeams: getTeams,
                getGenericPlayers: getGenericPlayers,
                reset: reset,
                get team(id) { return getTeam(id); },
                set team(val) { saveTeam(val); }
            };
        
        ////////////
        
        function getGame() {
            return localStorageService.get('game');
        }
        
        function saveGame(game) {
            localStorageService.set('game', game);
        }
        
        // Attempts to find a team either by the id or the name
        function getTeam(id) {
            var teams = null,
                notFound = null,
                matches = [];
            
            if(!id) return notFound;
            
            teams = getTeams();
            
            if(!angular.isArray(teams)) return notFound;
            
            if(typeof(id) === 'number') {
                matches = teams.filter(function(team) {
                    return team.id === id;
                });
            }
            
            if(typeof(id) === 'string') {
                id = id.toLowerCase();
                
                matches = teams.filter(function(team) {
                    return team.name.toLowerCase() === id;
                });
            }
            
            if(matches.length === 1) {
                return matches[0];
            }
            
            return notFound;
        }
        
        function getTeams() {
            return localStorageService.get('teams');
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