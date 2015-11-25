(function() {
    'use strict';

    angular
        .module('app.lineup')
        .controller('LineupCtrl', ['$location', 'appRoutes', 'gameService', LineupCtrl]);


    /////////

    function LineupCtrl($location, appRoutes, gameService) {
        var vm = this;

        vm.game;
        vm.dragControlListeners = {};
        vm.oneAtATime = true;
        vm.awayTeamTab = { isOpen: true };
        vm.homeTeamTab = { isOpen: false };

        activate();


        /////////

        function activate() {
            vm.game = gameService.game || {};

            if (!vm.game.id) {
                $location.path(appRoutes.NEW_GAME.url).replace();
            }
        }
    }
})();