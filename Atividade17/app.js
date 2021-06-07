var app = require('./config/server');

var rotaHome = require('./routes/home');
rotaHome(app);

app.listen(3000, function(){
	console.log("Servidor carregado.");
});