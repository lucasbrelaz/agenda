angular
    .module("generator")
    .directive("brelazFooter", brelazFooter);

function brelazFooter() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/brelazFooter/brelazFooter.html'
    }
}