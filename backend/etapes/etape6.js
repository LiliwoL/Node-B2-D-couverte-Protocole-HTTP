/**
 * Étape 6: Types de contenu - PUT
 * URL: /put-method-6
 * Methode: PUT
 * Content-Type: text/html
 * Accept: application/json
 * 
 * Dans cette étape, les utilisateurs apprennent à spécifier un type de contenu dans une requête PUT.
 * Ils doivent faire une requête PUT à l'URL /etape6 en incluant un en-tête "Content-Type" et un en-tête "Accept" pour réussir cette étape.
 * 
 * Pour passer à l'étape suivante, ils doivent faire une requête POST à l'URL /etape7 en incluant des paramètres dans l'URL et en utilisant la méthode GET.
 */
function handleEtape6(res, req) {
    // Récupération de la méthode, du type de contenu et de l'en-tête Accept de la requête
    const method = req.method;
    const contentType = req.headers['content-type'];
    const accept = req.headers['accept'];

    const response = {
        etape: 'Types de contenu - PUT',
        message: `Vous avez spécifié le type de contenu ${contentType} dans votre requête. https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/PUT`,
        cours: 'Lors de l\'envoi de données avec la méthode PUT, vous devez indiquer au serveur le format des données que vous envoyez. Cela est souvent spécifié avec l\'en-tête "Content-Type".'
    };

    // Vérification de la méthode utilisée
    if (method !== 'PUT') {
        response.message = `La méthode ${method} n'est pas correcte pour cette étape. Veuillez utiliser la méthode PUT pour réussir cette étape.`;
        response.warning = '💀💀💀 Méthode incorrecte. Assurez-vous d\'utiliser la méthode PUT pour réussir cette étape. 💀💀💀';
    } else {
        // Vérification du type de contenu spécifié
        if (contentType !== 'text/html') {
            response.message = `Le type de contenu ${contentType} n'est pas correct pour cette étape. Veuillez utiliser le type de contenu "text/html" pour réussir cette étape.`;
            response.warning = '💀💀💀 Type de contenu incorrect. Assurez-vous d\'utiliser le type de contenu "text/html" pour réussir cette étape. 💀💀💀';
        } else if (accept !== 'application/json') {
            response.message = `L'en-tête Accept ${accept} n'est pas correct pour cette étape. Veuillez utiliser l'en-tête Accept "application/json" pour réussir cette étape.`;
            response.warning = '💀💀💀 En-tête Accept incorrect. Assurez-vous d\'utiliser l\'en-tête Accept "application/json" pour réussir cette étape. 💀💀💀';
        } else {
            response.success = '✅✅✅ Vous avez spécifié le bon type de contenu et le bon en-tête Accept. Vous pouvez passer à l\'étape suivante. ✅✅✅';

            response.next_step = 'Pour passer à l\'étape suivante, vous devez faire une requête DELETE à l\'URL "/et-oui-delete" en incluant le paramètre "filename" dans l\'URL. ';
            response.next_step += 'Cela vous permettra de comprendre comment les paramètres dans l\'URL fonctionnent avec la méthode GET pour personnaliser vos requêtes. ';
            response.next_step += 'N\'oubliez pas que la méthode GET est souvent utilisée pour récupérer des données du serveur, tandis que la méthode PUT est utilisée pour mettre à jour des ressources sur le serveur. ';
            response.next_step += 'En utilisant ces méthodes avec les bons types de contenu et les bons paramètres, vous pourrez mieux comprendre comment interagir avec les API RESTful et les serveurs web. ';
            response.next_step += 'Pour plus d\'informations sur les méthodes HTTP et les types de contenu, vous pouvez consulter la documentation officielle de MDN : ';
            response.next_step += 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE';
        }
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape6
};