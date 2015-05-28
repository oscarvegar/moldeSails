angular.module("miskupones.password",[])
.controller('PasswordCtrl',function($http,$scope,$rootScope){
	console.log("CCARGR CTRL")
	$scope.auth = {};
	$scope.auth.password = null;
	$scope.auth.confirmacion = null;
	
	$scope.change = function(){
		$http.post("/changepass",$scope.auth)
		.success(function(data){
			console.log("Se ha cambiado la contraseña.");
			$scope.auth = {};
			$rootScope.modal.title = "Éxito";
			$rootScope.modal.msg = "Se ha cambiado la contraseña.";
			$('#myModal').modal('show');
		}).error(function(err){
			console.error(err);
		})
	}
});