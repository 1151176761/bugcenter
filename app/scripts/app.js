'use strict';
/**
 * @ngdoc overview
 * @name xiangmuApp
 * @description
 * # xiangmuApp
 *
 * Main module of the application.
 */
angular
  .module('xiangmuApp', ["ui.router","ngCookies"]).config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
    $stateProvider.state("dengl",{
      url:"/dengl",
        templateUrl: "views/dengl.html",
        controller: "dengl"
    }).state("daohang",{
      url:"/daohang",
      templateUrl: "views/daohang.html",
      controller: "daohang"
    }).state("a",{
      url:"/a",
      templateUrl: "views/a.html",
      controller: "a"
    })

    $urlRouterProvider.when('','/dengl')
  }])
