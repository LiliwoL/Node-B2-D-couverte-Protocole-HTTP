/**
 * Étape 4: Méthodes HTTP - POST
 * 
 * URL: /etape4
 * 
 * Dans cette étape, les utilisateurs apprennent à utiliser la méthode POST pour faire des requêtes HTTP.
 * Ils doivent faire une requête POST à l'URL /etape4 pour réussir cette étape.
 * 
 * Pour passer à l'étape suivante, ils doivent spécifier un type de contenu dans leur requête POST.
 */
function handleEtape4(res, method) {
    const response = {
        etape: 'Méthodes HTTP - POST',
        message: `La troisième étape est réussie ! Maintenant, explorons l'utilisation de la méthode POST pour faire des requêtes HTTP.`,
        cours: 'La méthode POST est utilisée pour envoyer des données au serveur, souvent utilisée pour les requêtes de création.'
    };

    // Vérification de la méthode utilisée
    if (method !== 'POST') {
        response.message = `La méthode ${method} n'est pas correcte pour cette étape. Veuillez utiliser la méthode POST pour réussir cette étape.`;
        response.warning = '💀💀💀 Méthode incorrecte. Assurez-vous d\'utiliser la méthode POST pour réussir cette étape. 💀💀💀';
    }else{
        response.success = '✅✅✅ Vous avez utilisé la méthode POST. Vous pouvez passer à l\'étape suivante. ✅✅✅';

        response.next_step = 'Pour passer à l\'étape suivante, vous devez spécifier un type de contenu "application/json" dans votre requête POST à l\'URL /etape5.';
        response.next_step += 'Cela vous permettra de comprendre comment les en-têtes HTTP fonctionnent pour spécifier le format des données envoyées au serveur. ';
        response.next_step += 'N\'oubliez pas que la méthode POST est souvent utilisée pour créer de nouvelles ressources sur le serveur, tandis que la méthode PUT est utilisée pour mettre à jour des ressources existantes. ';
        response.next_step += 'En utilisant ces méthodes avec les bons types de contenu, vous pourrez mieux comprendre comment interagir avec les API RESTful et les serveurs web. ';
        response.next_step += 'Pour plus d\'informations sur les méthodes HTTP et les types de contenu, vous pouvez consulter la documentation officielle de MDN : ';
        response.next_step += 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST';
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape4
};