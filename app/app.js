var http = require('http');

var myserver = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write("<b>Hola que tal como estamos</b>");
	response.end();
});

myserver.listen(3000, function(){
   console.log("Servidor iniciado en ip " + this.address().address + " por el puerto " + this.address().port );
});