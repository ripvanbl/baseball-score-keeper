(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('appRoutes', {
            'HOME': {
                url: '/home',
                config: {
                    templateUrl: '/js/app/layout/home.html',
                    controller: 'LayoutCtrl',
                    controllerAs: 'vm',
                    title: 'Baseball Score Keeper'
                }
            },

            'GAME': {
                url: '/game',
                config: {
                    templateUrl: '/js/app/game/game.html',
                    controller: 'GameCtrl',
                    controllerAs: 'vm',
                    title: 'BSK - Game'
                }
            },

            'LINEUP': {
                url: '/lineup',
                config: {
                    templateUrl: '/js/app/lineup/lineup.html',
                    controller: 'LineupCtrl',
                    controllerAs: 'vm',
                    title: 'BSK - Lineup'
                }
            },

            'NEW_GAME': {
                url: '/newgame',
                config: {
                    templateUrl: '/js/app/game/new-game.html',
                    controller: 'NewGameCtrl',
                    controllerAs: 'vm',
                    title: 'BSK - New Game'
                }
            },

            'RESET': {
                url: '/reset',
                config: {
                    controller: 'ResetGameCtrl',
                    controllerAs: 'vm',
                    template: '<p>Resetting...</p>',
                    title: 'BSK - Reset Game'
                }
            },
            
            'TEAM': {
                url: '/team/:id?',
                config: {
                    templateUrl: '/js/app/team/team.html',
                    controller: 'TeamCtrl',
                    controllerAs: 'vm',
                    title: 'BSK - Team'
                }
            }
        });
})();