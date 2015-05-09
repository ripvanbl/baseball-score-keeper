(function() {
    'use strict';

    angular
        .module('app', [
            // Angular stuff
            'ngRoute',
            
            // 3rd Party stuff
            'ui.bootstrap',

            // My stuff
            'app.core',
            'app.layout',
            'app.lineup',
            'app.game',
            'app.team'
        ])
        .config(['$routeProvider', 'appRoutes', setRoutes])
        .run(['$rootScope', runApp]);


    ///////////

    function runApp($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(event, currentRoute, previousRoute) {
            document.title = currentRoute.title || 'Baseball Score Keeper';
        });
    }

    function setRoutes($routeProvider, appRoutes) {
        $routeProvider.caseInsensitiveMatch = true;

        angular.forEach(appRoutes, function(route) {
            $routeProvider.when(route.url, route.config);
        });

        // Could be changed to look for a route which has a "default" key or something similar...
        $routeProvider.otherwise({
            redirectTo: appRoutes.HOME.url
        });
    }
})();
