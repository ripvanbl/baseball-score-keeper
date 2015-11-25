(function() {
    'use strict';

    angular
        .module('app.lineup')
        .directive('bskTeamLineup', bskTeamLineup);

    function bskTeamLineup () {
        var directive = {
            scope: {
                'isEditable': '@editable',
                'teamName': '@',
                'players': '='
            },
            controller: controller,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: './app/lineup/team-lineup.html',
            restrict: 'EA'
        };
        
        return directive;
        
        /////////
        
        function controller() {
            var vm = this;
            
            vm.editPlayer = function(player) { window.alert(player.name);};
        }
    }
})();