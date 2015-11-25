(function(){
    'use strict';
    
    angular
        .module('app.layout')
        .controller('LayoutCtrl', LayoutCtrl);
        
    function LayoutCtrl() {
        var vm = this;
        
        vm.isCollapsed = true;
    }
})();