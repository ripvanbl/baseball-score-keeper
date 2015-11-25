(function() {
    'use strict';
    
    angular
        .module('app.lineup', [
            // 3rd Party stuff
            'hmTouchEvents',
            'ui.sortable',
            
            // My Stuff
            'app.core',
            'app.game'
        ]);
})();