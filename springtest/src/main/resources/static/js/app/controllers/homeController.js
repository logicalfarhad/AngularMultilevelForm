(function () {
    "use strict";
    function homeController() {
        var vm=this;
        vm.step=1;
        vm.previousStep=previousStep;
        vm.nextStep=nextStep;
        vm.save=save;
        vm.speechEdit=speechEdit;
        function previousStep(){
            vm.step--;
        }
        function nextStep(){
            vm.step++;
        }
        function save(model) {
            console.log(model);
        }
        function speechEdit(){
            vm.step=2;
        }
    }
    angular.module("mlevel").controller("homeController", homeController);
}());