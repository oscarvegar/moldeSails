/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	home:function(req,res){
		res.view('homepage',{ layout: 'emptyLayout' });
	},
	root:function(req,res){
		if(req.session.user)
			return res.view('default');
		else
			res.redirect('/login')
	}
};

