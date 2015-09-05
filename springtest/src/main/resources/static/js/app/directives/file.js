/**
 * Created by S.M.Farhad on 19/08/2015.
 */
(function () {
"use strict";
    angular.module("mlevel").directive("fileread", [function () {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    scope.fileread = changeEvent.target.files[0];
                    scope.$apply(function () {
                        scope.fileread = changeEvent.target.files[0];
                        // or all selected files:
                        // scope.fileread = changeEvent.target.files;
                    });
                });
            }
        }
    }]);
}());