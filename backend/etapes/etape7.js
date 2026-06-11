/**
 * Etape 7
 * 
 * URL: /etape7?filename=monfichier.txt
 * Methode DELETE
 * Paramètre dans l'url filename
 * 
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/DELETE
 * 
 * @param {*} res 
 * @param {*} method 
 * @param {*} query 
 */
function handleEtape7(res, req) {
    const method = req.method;
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    const response = {
        etape: 'Paramètres dans l\'URL et méthode - DELETE',
        message: `Vous avez utilisé la méthode ${method} avec les paramètres ${JSON.stringify(query)}.`,
        cours: 'Combiner la méthode DELETE avec des paramètres dans l\'URL vous permet de personnaliser davantage vos requêtes. Dans cette étape, vous avez utilisé les deux ensemble.'
    };

    // Vérification de la méthode utilisée
    if (method !== 'DELETE') {
        response.message = `La méthode ${method} n'est pas correcte pour cette étape. Veuillez utiliser la méthode DELETE pour réussir cette étape.`;
        response.warning = '💀💀💀 Méthode incorrecte. Assurez-vous d\'utiliser la méthode DELETE pour réussir cette étape. 💀💀💀';
    } else {
        // Vérification de la présence du paramètre "filename" dans l'URL
        if (!query.filename) {
            response.message = `Le paramètre "filename" est manquant dans l'URL. Veuillez inclure le paramètre "filename" pour réussir cette étape.`;
            response.warning = '💀💀💀 Paramètre manquant. Assurez-vous d\'inclure le paramètre "filename" dans l\'URL pour réussir cette étape. 💀💀💀';
        } else {
            response.success = '✅✅✅ Vous avez utilisé la bonne méthode et les bons paramètres. Vous pouvez passer à l\'étape suivante. ✅✅✅';

            /**
             * @todo Ajouter des instructions pour passer à l'étape suivante, en expliquant comment utiliser les méthodes GET et DELETE avec les types de contenu appropriés.
             */
            response.next_step = 'Pour passer à l\'étape suivante, vous devez faire une requête GET à l\'URL /etape8 en incluant un en-tête "Accept" de type "application/json". ';
            response.next_step += 'Cela vous permettra de comprendre comment les en-têtes "Accept" fonctionnent pour spécifier le format des données que vous attendez en réponse. ';
            response.next_step += 'N\'oubliez pas que la méthode GET est souvent utilisée pour récupérer des données du serveur, tandis que la méthode DELETE est utilisée pour supprimer des ressources sur le serveur. ';
            response.next_step += 'En utilisant ces méthodes avec les bons types de contenu et les bons paramètres, vous pourrez mieux comprendre comment interagir avec les API RESTful et les serveurs web. ';
            response.next_step += 'Pour plus d\'informations sur les méthodes HTTP et les types de contenu, vous pouvez consulter la documentation officielle de MDN : ';
            response.next_step += 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET';
        }
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape7
};