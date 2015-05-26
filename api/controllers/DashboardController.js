/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Dashboards
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	mapa:function(req,res){
		var data={};
		data.labels={
			"PUE" :'100 ventas',
			"CHH" :'200 ventas',
			"BCS" :"300 ventas"
		};
		data.colors={
			"PUE" :"#33CC00",
			"CHH" :'#339900',
			"BCS" :"#336600"
		};
		return res.json(data);
	}
};

