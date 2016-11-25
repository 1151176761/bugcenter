angular.module('xiangmuApp') .controller("dengl",["$scope","$http","$state","$rootScope",function ($scope,$http,$state,$rootScope){
    $scope.sub=function(){
            $http({
                url: "http://www.bugcenter.com.cn:1511/users/login",
                method:"POST",
                withCredentials:true,
                data:$scope.updata
            }).success(function(e){
              $rootScope.user={}
              $rootScope.user.username=$scope.updata.username
              $rootScope.user.uid= e.uid
              $state.go("daohang")
            })
       }
}])

