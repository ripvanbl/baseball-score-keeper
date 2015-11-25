(function() {
    'use strict';
    
    angular
        .module('app.core', [
            // 3rd Party stuff
            'LocalStorageModule'
        ])
        .config(['localStorageServiceProvider', configModule]);
    
    
    ///////////
    
    function configModule(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('bsk');
    }
})();
