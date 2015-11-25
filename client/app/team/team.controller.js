(function() {
    'use strict';

    angular
        .module('app.team')
        .controller('TeamCtrl', ['$location', 'appRoutes', 'appData', TeamCtrl]);


    /////////

    function TeamCtrl($location, appRoutes, appData) {
        var vm = this;

        vm.team = {
            name: '',
            players: angular.merge([], appData.getGenericPlayers())
        };
        
        vm.submit = submit;
        
        activate();


        /////////

        function activate() {
            
        }
        
        function submit() {}
    }
})();