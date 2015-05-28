var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    resetcode : 'string',
    activationcode : 'string',
    status : {type:'integer',defaultsTo:-1}
  },
  	beforeCreate: function(user, next){
		var code = new Date().getTime();
    	code = code *  Math.random();
    	code = code.toString(16);
        user.activationcode = code;
        var options = {};
	    options.to = user.email;
	    options.subject = "Bienvenido a MisKupones";
	    options.html =  "<h3>Felicidades! ahora eres parte de MisKupones</h3>\
	      <br><br>\
	      Para activar tu cuenta da clic en el siguiente link:\
	      <br><br>\
	      http://miskupones.com/activate/"
	      +code+
	      "<br><br>\
	      Feliz día te desea el Equipo Tus Kupones";
	      MailService.send(options)
    	next();
	}   

};

module.exports = User;
