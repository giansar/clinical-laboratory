(function() {
'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    //AppController.$inject = ['dependency1'];
    function AppController() {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();