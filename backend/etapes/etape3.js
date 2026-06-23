/**
 * Étape 3: Méthodes HTTP - GET
 * 
 * URL: /plusieurs-parametres?prenom=VotrePrenom&age=19
 * 
 * Dans cette étape, les utilisateurs apprennent à utiliser la méthode GET pour faire des requêtes HTTP.
 * Ils doivent faire une requête GET à l'URL /etape3 pour réussir cette étape.
 * Ils doivent inclure un paramètre "prenom" et un paramètre "age" dans l'URL pour réussir cette étape.
 * 
 * Pour passer à l'étape suivante, ils doivent faire une requête POST à l'URL /etape4.
 */
function handleEtape3(res, req) {
    const method = req.method;
    const query = req.url.split('?')[1];

    const response = {
        etape: 'Méthodes HTTP - GET',
        message: `La deuxième étape est réussie ! Maintenant, explorons l'utilisation de la méthode GET pour faire des requêtes HTTP.`,
        cours: 'La méthode GET est utilisée pour récupérer des données à partir du serveur. Elle est souvent utilisée pour les requêtes de lecture.'        
    };

    // Vérification de la méthode utilisée
    if (method !== 'GET') {
        response.message = `La méthode ${method} n'est pas correcte pour cette étape. Veuillez utiliser la méthode GET pour réussir cette étape.`;
        response.warning = '💀💀💀 Méthode incorrecte. Assurez-vous d\'utiliser la méthode GET pour réussir cette étape. 💀💀💀';
    }else{
        // Vérification de la présence des paramètres "prenom" et "age" dans l'URL
        if (query) {
            const params = new URLSearchParams(query);
            const prenom = params.get('prenom');
            const age = params.get('age');

            if (prenom && age) {
                response.success = '✅✅✅ Vous avez utilisé la méthode GET avec les bons paramètres. Vous pouvez passer à l\'étape suivante. ✅✅✅';

                response.next_step = 'Pour passer à l\'étape suivante, vous devez faire une requête POST à l\'URL "/un-peu-de-post"   ';
                response.next_step += 'Cela vous permettra de comprendre comment les différentes méthodes HTTP fonctionnent pour interagir avec les serveurs web. ';
                response.next_step += 'N\'oubliez pas que la méthode GET est souvent utilisée pour récupérer des données du serveur, tandis que la méthode POST est utilisée pour envoyer des données au serveur. ';
                response.next_step += 'En utilisant ces méthodes avec les bons paramètres, vous pourrez mieux comprendre comment interagir avec les API RESTful et les serveurs web. ';
                response.next_step += 'Pour plus d\'informations sur les méthodes HTTP et les paramètres dans l\'URL, vous pouvez consulter la documentation officielle de MDN : ';
                response.next_step += 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET';
                
            } else {
                response.message = 'Les paramètres "prenom" et "age" sont requis pour réussir cette étape.';
                response.warning = '💀💀💀 Paramètres manquants. Assurez-vous d\'inclure les paramètres "prenom" et "age" dans l\'URL. 💀💀💀';
            }
        } else {
            response.message = 'Les paramètres "prenom" et "age" sont requis pour réussir cette étape.';
            response.warning = '💀💀💀 Paramètres manquants. Assurez-vous d\'inclure les paramètres "prenom" et "age" dans l\'URL. 💀💀💀';
        }
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape3
};