(function(){
    'use strict';

    angular
        .module('generator')
        .controller('ContatoDeletarController', ContatoDeletarController);

    // ContatoDeletarController.$inject = [$window];

    function ContatoDeletarController($timeout, webDevTec, toastr, $http, $window, $state) {
        var vm = this;
        var urlContatos = 'http://localhost:3000/api/contatos';
        vm.contato  = {};
        vm.id       = 0;

        vm.init = function () {
            vm.id = $state.params.id;
            if(!vm.id)
                $window.location.href = "/listar";
            vm.buscarContato(vm.id);
            vm.deletar(vm.id);
        }

        vm.buscarContato = function(id){
            $http.get(urlContatos + "/" + id)
            .success(function(retorno){
                vm.contato = retorno;
            })
            .catch(function(erro){
                toastr.error("Ops! Erro inesperado. ("+erro.statusText+")");
            });
        }

        vm.deletar = function (id) {
            $http.delete(urlContatos+"/"+id, vm.contato)
            .then(function(){
                toastr.success("Contato deletado!");
                $timeout(function(){$window.location.href = '/listar'}, 2000);
            })
            .catch(function(erro){
                toastr.error("Ops! Erro inesperado. ("+erro.statusText+")");
            });
                
        }

        vm.init();
    }
})();