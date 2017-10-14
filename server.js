var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    if (page == '/') {
    	res.writeHead(200, {"Content-Type": "text/plain"});
        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/ss') {
    	res.writeHead(200, {"Content-Type": "text/plain"});
        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    }
    else if (page == '/c') {
    	res.writeHead(200, {"Content-Type": "text/plain"});
        res.write('Hé ho, c\'est privé ici !');
    }
    else {
    	res.writeHead(404, {"Content-Type": "text/plain"});
    	res.write('Not found');
    }
    res.end();
});
server.listen(8080);