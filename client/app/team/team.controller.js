(function() {
    'use strict';

    angular
        .module('app.team')
        .controller('TeamCtrl', ['$location', 'appRoutes', 'teamService', TeamCtrl]);


    /////////

    function TeamCtrl($location, appRoutes, teamService) {
        var vm = this;

        vm.team = teamService.getGenericTeam();
        vm.submit = submit;
        
        activate();


        /////////

        function activate() {
            vm.team.players = teamService.getGenericPlayers();
        }
        
        function submit() {
            teamService.save(vm.team);
        }
    }
})();