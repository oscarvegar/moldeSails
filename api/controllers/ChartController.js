/**
 * ChartController
 *
 * @description :: Server-side logic for managing Charts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	show:function(req,res){
		res.view('graphics',{ layout: 'emptyLayout' });
	}
};

