// Importer le module http
// Il contient toutes les méthodes necessaires
// pour la création d'un serveur ainsi que des requêtes HTTP
// Importer les modules
const http = require('http');
const url = require('url');
const querystring = require('querystring');

// Création du serveur
const server = http.createServer(function(req, res) {

    res.writeHead(200, {"Content-Type": "text/plain"});

    const page = url.parse(req.url).pathname;
    console.log("Page: " + page);

    const params = querystring.parse(url.parse(req.url).query);

    if("name" in params) {
        res.end("Bonjour " + params.name + ", vous avez " + params.age + " ans !");
    }else {
        res.end("Bonjour inconnu");
    }
    
});

// Démarrage du serveur sur le port 8085
server.listen(8085);
