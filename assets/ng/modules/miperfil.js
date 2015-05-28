angular.module("miskupones.usuarios",[])
.controller('PerfilCtrl',function($http,$scope,$rootScope,$route){
	$scope.action = $route.current.action;
	$scope.showContent=false;
	$scope.init = function(){
		switch($scope.action){
		case 'R':
			break;
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