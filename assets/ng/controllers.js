angular.module("miskupones.controllers",[])
.controller('CuponesCtrl',function($http,$scope,$rootScope){
	$rootScope.showSpinner = true;

	$scope.$evalAsync(function() { 
		$http.get("/dashboard/mapa")
		.success(function(data){
			$('#map').vectorMap({
				map: 'Mexico',
				series: {
					regions: [{
						values: data.colors,
							attribute: 'fill',

							normalizeFunction: 'polynomial'
						}]
					},
				backgroundColor: '#eef3f7',
				onRegionLabelShow: function(e, el, code){
					console.log(code);
					var text = data.labels[code]?data.labels[code]:'0 Ventas';
					el.html(el.html()+': '+text);
				},
				regionStyle: {
					initial: {
						fill: 'gray'
					},
					hover: {
						fill: "#A0D1DC"
					}
				}
			});
		})
		
	});

})