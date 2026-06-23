/**
 * Étape 1: Introduction
 * 
 * URL: /bienvenue
 * 
 * Dans cette étape, les utilisateurs découvrent le jeu de piste et apprennent les bases du protocole HTTP.
 * Ils reçoivent un message de bienvenue et une introduction au jeu.
 * 
 * Pour passer à l'étape suivant, ils doivent faire une requête GET à l'URL /step2 avec un paramètre nom dans l'URL, par exemple: /step2?nom=VotreNom
 */
function handleEtape1(res) {
    const response = {
        etape: 'Etape 1: Introduction',
        message: 'Bienvenue dans le jeu de piste HTTP !',
        cours: 'Le protocole HTTP (Hypertext Transfer Protocol) est utilisé pour la communication sur le web. Il est indispensable de maitriser ce protocole pour appréhender le développement web. 📖 https://www.it-connect.fr/le-protocole-http-pour-les-debutants/',
        next_step: 'Pour passer à l\'étape suivante, faites une requête GET à l\'URL "/decouverte-des-parametres" avec un paramètre "nom" dans l\'URL, par exemple: /decouverte-des-parametres?nom=VotreNom. Attention, le paramètre "nom" est obligatoire pour réussir l\'étape suivante.',
        tips: 'https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Methods/GET'
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape1
};