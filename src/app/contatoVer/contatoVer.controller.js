(function(){
    'use strict';

    angular
        .module('generator')
        .controller('ContatoVerController', ContatoVerController);

    function ContatoVerController($timeout, webDevTec, toastr, $http, $state) {
        var vm = this;
        var urlContatos = 'http://localhost:3000/api/contatos';

        vm.init = function (){
            vm.id = $state.params.id;
            vm.buscarContato(vm.id);
        }
        
        vm.buscarContato = function(id){
            $http.get(urlContatos + "/" + id)
            .success(function(retorno) {
                vm.contato = retorno;
                if(retorno.dataCriacao) {
                    var dc = new Date(retorno.dataCriacao)
                    vm.contato.dataCriacaoHumanized = dc.getDate()+'/'+dc.getMonth()+'/'+dc.getFullYear()+' às '+dc.getHours()+':'+dc.getMinutes();
                }
            })
            .catch(function(erro){
                toastr.error("Ops! Erro inesperado. ("+erro.statusText+")");
            });
        }

        vm.init();
    }
})();