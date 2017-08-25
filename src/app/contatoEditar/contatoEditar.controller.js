(function(){
    'use strict';

    angular
        .module('generator')
        .controller('ContatoEditarController', ContatoEditarController);

    function ContatoEditarController($timeout, toastr, $http, $window, $state) {
        var vm = this;
        var urlContatos = 'http://localhost:3000/api/contatos';
        vm.contato  = {};
        vm.id       = 0;

        vm.init = function () {
            vm.id = $state.params.id;
            if(!vm.id)
                $window.location.href = "/listar";
            vm.buscarContato(vm.id);
            vm.randomPics();
        }

        vm.buscarContato = function(id){
            $http.get(urlContatos + "/" + id)
            .success(function(retorno){
                vm.contato = retorno;
                vm.contato.avatarBkp = vm.contato.avatar;
            })
            .catch(function(erro){
                toastr.error("Ops! Erro inesperado. ("+erro.statusText+")");
            });
        }

        vm.salvar = function () {
            if(vm.contato.idade)
                vm.contato.idade  = parseInt(vm.contato.idade);
            $http.put(urlContatos+"/"+vm.id, vm.contato)
            .then(function(){
                toastr.success("Contato editado com sucesso!");
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

        vm.changePicToBkp = function () {
            vm.contato.avatar = vm.contato.avatarBkp;
        }

        vm.init();
    }
})();