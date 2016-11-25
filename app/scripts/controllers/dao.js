angular.module('xiangmuApp') .controller("daohang",["$scope","$http","$rootScope","$state",function ($scope,$http,$rootScope,$state){
  $http({
    url: "http://www.bugcenter.com.cn:1511/users/"+$rootScope.user.uid,
    method:"get"
  }).success(function(e){
    if (e.charactor == 0) {//jgr
      //$scope.isshow = false
    }
  })
  $http({
    url: "http://www.bugcenter.com.cn:1511/item",
    method:"get",
    params:{'to':$rootScope.user.username}
  }).success(function(e){
    $scope.data = e
  })
}])
