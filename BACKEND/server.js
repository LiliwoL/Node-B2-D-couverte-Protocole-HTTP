/*
*      _                 _              _    _           _  _ _____ _____ ___ 
*   _ | |___ _  _     __| |___     _ __(_)__| |_ ___    | || |_   _|_   _| _ \
*  | || / -_) || |   / _` / -_)   | '_ \ (_-<  _/ -_)   | __ | | |   | | |  _/
*   \__/\___|\_,_|   \__,_\___|   | .__/_/__/\__\___|   |_||_| |_|   |_| |_|  
*                                 |_|                                         
* 
*/

const http = require('http');
const url = require('url');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
// Lecure du fichier .env pour les variables d'environnement
require('dotenv').config();


// *********************************************************
// Importation des fonctions de chaque étape du jeu de piste
// *********************************************************
const { handleEtape1 } = require('./etapes/etape1');
const { handleEtape2 } = require('./etapes/etape2');
const { handleEtape3 } = require('./etapes/etape3');
const { handleEtape4 } = require('./etapes/etape4');
const { handleEtape5 } = require('./etapes/etape5');
const { handleEtape6 } = require('./etapes/etape6');
const { handleEtape7 } = require('./etapes/etape7');
const { handleEtape8 } = require('./etapes/etape8');
const { handleEtape9 } = require('./etapes/etape9');
const { handleEtape10 } = require('./etapes/etape10');
const { handleEtape11 } = require('./etapes/etape11');
const { handleEtape12 } = require('./etapes/etape12');
const { handleEtape13 } = require('./etapes/etape13');
// Ajoutez d'autres étapes du jeu de piste ici...


// Création de la base de données SQLite
const db = new sqlite3.Database('etapes.db');

// Création de la table pour stocker les paramètres
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS parametres (id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, valeur TEXT)");
});

// Mot de passe pour les routes d'administration
const ADMIN_PASSWORD = 'Azertysio-01';

// User-Agent attentu
global.USER_AGENT = 'FenelonBTSSIO-UserAgent-LaRochelle-v1.0'

const server = http.createServer((req, res) => {
    

    //if (userAgent === 'FenelonBTSSIO-UserAgent-LaRochelle v1.0') {
        const parsedUrl = url.parse(req.url, true);
        const path = parsedUrl.pathname;
        const method = req.method;

        // Vérification du mot de passe pour les routes d'administration
        if (path.startsWith('/admin') && !checkAdminPassword(req)) {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Unauthorized. Incorrect admin password.' }));
            return;
        }

        // etape8
        if (path.includes('/etape8/api/users/')) {
            handleEtape8(res, req);
            return;
        }

        // Traitement des différentes étapes du jeu de piste
        switch (path) {
            case '/bienvenue':                
                handleEtape1(res);
                break;
            case '/decouverte-des-parametres':
                handleEtape2(res, parsedUrl.query);
                break;
            case '/plusieurs-parametres':
                handleEtape3(res, req);
                break;
            case '/un-peu-de-post':
                handleEtape4(res, method);
                break;
            case '/5-content-type':
                handleEtape5(req,res);
                break;
            case '/put-method-6':
                handleEtape6(res, req);
                break;
            case '/et-oui-delete':
                handleEtape7(res, req);
                break;
            // Etape 8 est traitée séparément pour gérer les chemins dynamiques avec des IDs d'utilisateurs            
            case '/etape9':
                handleEtape9(res, req);
                break;
            // Ajoutez d'autres étapes du jeu de piste ici...


            case '/admin/parametres':
                handleAdminParametres(res);
                break;
            case '/admin/reset':
                handleAdminReset(res);
                break;

            default:
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Page not found' }));
        }
    
});

// Middleware pour vérifier le mot de passe d'administration
function checkAdminPassword(req) {
    const authorizationHeader = req.headers['authorization'];

    if (authorizationHeader) {
        const encodedCredentials = authorizationHeader.split(' ')[1];
        const credentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8');
        const [username, password] = credentials.split(':');

        return password === ADMIN_PASSWORD;
    }

    return false;
}

// Route d'administration: Liste des paramètres
function handleAdminParametres(res) {
    db.all("SELECT * FROM parametres", [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        const response = {
            admin_etape: 'Liste des paramètres (route d\'administration)',
            parametres: rows
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    });
}

// Route d'administration: Réinitialiser la base de données
function handleAdminReset(res) {
    db.run("DELETE FROM parametres", function (err) {
        if (err) {
            console.error(err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        const response = {
            admin_etape: 'Réinitialisation de la base de données (route d\'administration)',
            message: 'La base de données a été réinitialisée avec succès.'
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    });
}



/**
 * Lecture du port et de l'adresse IP à partir du fichier .env
 * Si les variables d'environnement ne sont pas définies, utilisez des valeurs par défaut
 */
const HOST_PORT = process.env.HOST_PORT || 800;
const HOST_IP = process.env.HOST_IP || '127.0.0.1';

server.listen(HOST_PORT, HOST_IP, () => {
    console.log(`Serveur en écoute sur http://${HOST_IP}:${HOST_PORT}`);
});
