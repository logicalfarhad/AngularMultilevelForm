(function () {
    "use strict";
    function homeController($http) {
        var vm=this;
        vm.error = function(name) {
            var s = vm.form[name];
            return s.$invalid && s.$dirty ? "has-error" : "";
        };

        var person ={
            Id:1,
            name:"forhad",
            email:"forhad.univdhaka@gmail.com"
        };

        var speaker={
             Id:2,
             name:"dummy",
             age:25
        };
       /* $http.post("/save",JSON.stringify(person)).success(function(a){
           console.log(a);
        }).error(function(d){
            console.log(d);
        });*/
        vm.processForm=function(speaker,speech){
            var file=vm.file;
            console.log(file)
            var fd=new FormData();
            fd.append("person",angular.toJson(person));
            fd.append("file",file);
            console.log(fd);
            $http({
                method: 'POST',
                url: '/save',
                headers: {'Content-Type': undefined},
                data: fd,
                transformRequest: angular.identity
            })
                .success(function(data, status) {
                    alert("success");
                });
        }
    }
    homeController.$inject=["$http"];
    angular.module("mlevel").controller("homeController", homeController);
}());
