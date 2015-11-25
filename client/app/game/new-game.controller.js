(function() {
    'use strict';
    
    angular
        .module('app.game')
        .controller('NewGameCtrl', ['$location', 'appRoutes', 'gameService', 'teamService', NewGameCtrl]);
    
    function NewGameCtrl($location, appRoutes, gameService, teamService) {
        var vm = this;
        
        vm.id = '';
        vm.teams = teamService.getTeams();
        vm.awayTeam = {};
        vm.homeTeam = {};
        vm.submit = submit;
        
        function submit() {
            vm.id = new Date().toISOString();
            gameService.game = {id: vm.id, homeTeam: vm.homeTeam, awayTeam: vm.awayTeam };
            $location.path(appRoutes.LINEUP.url).replace();
        }
    }
})();