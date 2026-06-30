/**
 *  Étape 5: Type de contenu + POST
 * 
 * URL: /5-content-type
 * 
 * Dans cette étape, les utilisateurs apprennent à spécifier un type de contenu dans une requête POST.
 * Ils doivent faire une requête POST à l'URL /etape5 en incluant un en-tête "Content-Type" pour réussir cette étape.
 * 
 * Pour passer à l'étape suivante, ils doivent faire une requête POST à l'URL /etape6 en incluant un en-tête "Content-Type".
 */
function handleEtape5(req, res) {

    // Récupération de la méthode et du type de contenu de la requête
    const method = req.method;
    const contentType = req.headers['content-type'];

    const response = {
        etape: 'Type de contenu - POST',
        message: `Vous devez spécifier le type de contenu "application/json".`,
        cours: 'Le type de contenu indique au serveur le format des données que vous attendez en réponse. Dans une requête POST, cela peut souvent être "application/json" ou "text/html".'
    };

    // Vérification de la méthode utilisée
    if (method !== 'POST') {
        response.message = `La méthode ${method} n'est pas correcte pour cette étape. Veuillez utiliser la méthode POST pour réussir cette étape.`;
        response.warning = '💀💀💀 Méthode incorrecte. Assurez-vous d\'utiliser la méthode POST pour réussir cette étape. 💀💀💀';
    }else{
        // Vérification du type de contenu spécifié
        if (contentType !== 'application/json') {
            response.message = `Le type de contenu ${contentType} n'est pas correct pour cette étape. Veuillez utiliser le type de contenu "application/json" pour réussir cette étape.`;
            response.warning = '💀💀💀 Type de contenu incorrect. Assurez-vous d\'utiliser le type de contenu "application/json" pour réussir cette étape. 💀💀💀';
        }else{
            response.success = '✅✅✅ Vous avez spécifié le bon type de contenu. Vous pouvez passer à l\'étape suivante. ✅✅✅';


            response.next_step = 'Pour passer à l\'étape suivante, vous devez faire une requête PUT à l\'URL "/put-method-6" en incluant un en-tête "Content-Type" de type "text/html" et un en-tête "Accept" de type "application/json". ';
            
            response.next_step += 'Cela vous permettra de comprendre comment les en-têtes "Content-Type" et "Accept" fonctionnent ensemble pour spécifier le format des données envoyées et reçues. ';
            response.next_step += 'N\'oubliez pas que la méthode PUT est souvent utilisée pour mettre à jour des ressources sur le serveur, tandis que la méthode POST est utilisée pour créer de nouvelles ressources. ';
            response.next_step += 'En utilisant ces méthodes avec les bons types de contenu, vous pourrez mieux comprendre comment interagir avec les API RESTful et les serveurs web. ';
            response.next_step += 'Pour plus d\'informations sur les méthodes HTTP et les types de contenu, vous pouvez consulter la documentation officielle de MDN : ';
            response.next_step += 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT';
        }
    }    

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape5
};