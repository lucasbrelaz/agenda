angular
    .module("generator")
    .directive("brelazNavbar", brelazNavbar);

function brelazNavbar() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/brelazNavbar/brelazNavbar.html'
    }
}