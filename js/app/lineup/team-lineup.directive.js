(function() {
    'use strict';

    angular
        .module('app.lineup')
        .directive('bskTeamLineup', bskTeamLineup);

    function bskTeamLineup () {
        var directive = {
            scope: {
                'teamName': '@',
                'players': '='
            },
            controller: controller,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: '/js/app/lineup/team-lineup.html',
            restrict: 'EA'
        };
        
        return directive;
        
        /////////
        
        function controller() {
            var vm = this;
        }
    }
})();