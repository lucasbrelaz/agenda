(function(){
    'use strict';

    angular
        .module('generator')
        .controller('ContatoCadastrarController', ContatoCadastrarController);

    function ContatoCadastrarController($timeout, webDevTec, toastr, $http, $window) {
        var vm = this;
        var urlContatos = 'http://localhost:3000/api/contatos';
        vm.contato = {};
        
        vm.init = function() {
            vm.randomPics();
        }

        vm.salvar = function () {
            if(vm.contato.idade)
                vm.contato.idade    = parseInt(vm.contato.idade);
            $http.post(urlContatos, vm.contato)
            .then(function(){
                toastr.success("Contato cadastrado com sucesso!");
                $timeout(function(){$window.location.href = '/listar'}, 2000);
            })
            .catch(function(erro){
                toastr.error("Ops! Erro inesperado. ("+erro.statusText+")");
            });
                
        }

        vm.randomPics = function () {
            $http.get('https://randomuser.me/api/')
            .success(function(retorno){
                vm.randomPic = retorno.results[0].picture.large;
            }).catch(function(erro){
                toastr.error("Ops! Erro inesperado. ("+erro.statusText+")");
            });
        }

        vm.changePic = function () {
            vm.contato.avatar   = vm.randomPic;
            vm.randomPics();
        }

        vm.init();
    }
})();