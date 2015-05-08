(function() {
    'use strict';

    angular
        .module('app.lineup')
        .controller('LineupCtrl', ['$location', 'appRoutes', 'appData', LineupCtrl]);


    /////////

    function LineupCtrl($location, appRoutes, appData) {
        var vm = this;

        vm.game;
        vm.dragControlListeners = {};
        vm.oneAtATime = true;
        vm.awayTeamTab = { isOpen: true };
        vm.homeTeamTab = { isOpen: false };

        activate();


        /////////

        function activate() {
            vm.game = appData.game || {};

            if (!vm.game.id) {
                $location.path(appRoutes.NEW_GAME.url).replace();
            }
        }
    }
})();