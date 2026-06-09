/**
 * Étape 3: Méthodes HTTP - GET
 * 
 * URL: /etape3
 * 
 * Dans cette étape, les utilisateurs apprennent à utiliser la méthode GET pour faire des requêtes HTTP.
 * Ils doivent faire une requête GET à l'URL /etape3 pour réussir cette étape.
 * 
 * Pour passer à l'étape suivante, ils doivent faire une requête POST à l'URL /etape4.
 */
function handleEtape3(res, method) {
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
        response.success = '✅✅✅ Vous avez utilisé la méthode GET. Vous pouvez passer à l\'étape suivante. ✅✅✅';
        response.next_step = 'Pour passer à l\'étape suivante, vous devez faire une requête POST à l\'URL /etape4.';
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape3
};