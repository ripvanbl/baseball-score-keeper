(function() {
    'use strict';
    
    angular
        .module('app.game')
        .controller('NewGameCtrl', ['$location', 'appRoutes', 'appData', NewGameCtrl]);
    
    function NewGameCtrl($location, appRoutes, appData) {
        var vm = this;
        
        vm.id = '';
        vm.availableTeams = appData.getTeams();
        vm.awayTeam = {};
        vm.homeTeam = {};
        vm.submit = submit;
        
        function submit() {
            vm.id = new Date().toISOString();
            appData.game = {id: vm.id, homeTeam: vm.homeTeam, awayTeam: vm.awayTeam };
            $location.path(appRoutes.LINEUP.url).replace();
        }
    }
})();