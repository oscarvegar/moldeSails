var app = angular.module('miskupones',
  ['ngRoute',"miskupones.controllers","miskupones.usuarios","miskupones.password"])

app.run(function($rootScope){
  $rootScope.modal = {};
})

app.config(function($routeProvider){
  $routeProvider
  .when("/",
    {
      templateUrl: "/home",
      controller: "CuponesCtrl"
    }
  ).when("/graphicsview",
    {
      templateUrl: "/charts"
    }
  ).when("/usuarios",
    {
      action:"L",
      templateUrl: "/ng/modules/usuarios.html",
      controller:'UsuariosCtrl'
    }
  ).when("/usuarios/create/:id",
    {
      action:"C",
      templateUrl: "/ng/modules/usuariosEdit.html",
      controller:'UsuariosCtrl'
    }
  ).when("/usuarios/read/:id",
    {
      action:"R",
      templateUrl: "/ng/modules/usuariosEdit.html",
      controller:'UsuariosCtrl'
    }
  ).when("/usuarios/edit/:id",
    {
      action:"U",
      templateUrl: "/ng/modules/usuariosEdit.html",
      controller:'UsuariosCtrl'
    }
  ).when("/changePassword",
    {
      templateUrl: "/ng/modules/password.html",
      controller:'PasswordCtrl'
    }
  ).otherwise({
    redirectTo: "/"
  });
})

app.run(function($rootScope,$location){
  $rootScope.go = function(location){
    $rootScope.showSpinner = false;
    $location.url("/graphicsview")
  }
})


