(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('teamService', ['localStorageService', teamService]);

    function teamService(localStorageService) {
        var LCLSTG_TEAMS = 'teams';
        
        return {
                getTeams: getTeams,
                getGenericTeam: getGenericTeam,
                getGenericPlayers: getGenericPlayers,
                reset: reset,
                save: saveTeam,
                team: getTeam
            };
        
        ////////////
        
        function getTeam(id) {
            var teams = null,
                notFound = null;
            
            if(typeof(id) !== 'number') return notFound;
            
            teams = getTeams();
            
            if(!angular.isObject(teams)) return notFound;
            
            return teams[id] || notFound;
        }
        
        function getTeams() {
            return localStorageService.get(LCLSTG_TEAMS);
        }
        
        function saveTeam(team) {
            var teams = {}, 
                keys = [];
            
            if(!angular.isObject(team)) return;
            
            teams = getTeams() || {};
            
            if(typeof(team.id) !== 'number' || team.id < 0) {
                keys = Object.keys(teams);
                team.id = keys.length + 1;
            }
            
            teams[team.id] = angular.merge(getGenericTeam(), team);
            localStorageService.set(LCLSTG_TEAMS, teams);
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
        
        function getGenericTeam() {
            return {
                id: -1,
                name: '',
                manager: '',
                colors: {
                    primary: '',
                    secondary: ''
                },
                players: [],
                record: {
                    wins: 0,
                    losses: 0,
                    ties: 0
                }
            };
        }
        
        function reset() {
            localStorageService.remove(LCLSTG_TEAMS);
        }
    }
})();