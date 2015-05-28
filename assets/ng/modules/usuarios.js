angular.module("miskupones.usuarios",[])
.controller('UsuariosCtrl',function($http,$scope,$rootScope,$route){
	$scope.action = $route.current.action;
	$scope.showContent=false;
	$scope.init = function(){
		switch($scope.action){
		case 'L':
			$scope.users = [{username:'oscarvegar'},{username:'eldani'}];
			$scope.showContent=true;
			break;
		case 'C':
			$scope.user = {};
			$scope.showContent=true;
			break;
		case 'R':
		case 'U':
			console.info($scope.action)
			$scope.user = {username:'oscarvegar'};
			$scope.showContent=true;
			break;
		}
	}
	


	$scope.$evalAsync(function() { 
		$scope.init();

	})
});