(function(){
    'use strict';

    angular
        .module('generator')
        .controller('ListarController', ListarController);

    function ListarController($scope, $timeout, webDevTec, toastr, $http) {
        var vm = this;
        var urlContatos = 'http://localhost:3000/api/contatos';

        vm.init = function(){
            vm.listar();
        }

        vm.listar = function(){
            $http.get(urlContatos)
                .success(function(contatos){
                    vm.contatos = contatos;
                })
        };

        vm.init();
    }
})();