(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.list = "";
    $scope.message = "";

    $scope.sayMessage = function () {
        if ($scope.list) {
            var splitList = $scope.list.split(",");
            if (splitList.length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        } else {
            $scope.message = "Please enter data first";
        }
        ;
      };

}

})();