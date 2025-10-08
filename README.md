# 🌐 TP2 — Serveur HTTP en Node.js

## 🧩 Description

Ce projet est un **petit serveur HTTP** développé en **Node.js**.  
Il affiche un message de bienvenue personnalisé à l'utilisateur en fonction des **paramètres passés dans l'URL**.

Le projet a été réalisé dans le cadre du **BTS SIO SLAM** à La Rochelle.

---

## ⚙️ Fonctionnement du serveur

Le serveur :
- écoute les requêtes sur le **port 8085** ;
- récupère le chemin de la page (`/`, `/contact`, etc.) ;
- lit les **paramètres passés dans l’URL** (par exemple `?name=Tom&age=20`) ;
- renvoie un message différent selon les paramètres envoyés.

### Exemple de code principal :
```js
const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});

    const page = url.parse(req.url).pathname;
    console.log("Page: " + page);

    const params = querystring.parse(url.parse(req.url).query);

    if ("name" in params) {
        res.end("Bonjour " + params.name + ", vous avez " + params.age + " ans !");
    } else {
        res.end("Bonjour inconnu");
    }
});

server.listen(8085);
