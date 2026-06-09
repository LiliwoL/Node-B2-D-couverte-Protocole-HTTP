/**
 *  Étape 5: Type de contenu + GET
 * 
 * URL: /etape5
 * 
 * Dans cette étape, les utilisateurs apprennent à spécifier un type de contenu dans une requête GET.
 * Ils doivent faire une requête GET à l'URL /etape5 en incluant un en-tête "Content-Type" pour réussir cette étape.
 * 
 * Pour passer à l'étape suivante, ils doivent faire une requête POST à l'URL /etape6 en incluant un en-tête "Content-Type".
 */
function handleEtape5(req, res) {

    // Récupération de la méthode et du type de contenu de la requête
    const method = req.method;
    const contentType = req.headers['content-type'];

    const response = {
        etape: 'Type de contenu - GET',
        message: `Vous devez spécifier le type de contenu "application/json".`,
        cours: 'Le type de contenu indique au serveur le format des données que vous attendez en réponse. Dans une requête GET, cela peut souvent être "application/json" ou "text/html".'
    };

    // Vérification de la méthode utilisée
    if (method !== 'GET') {
        response.message = `La méthode ${method} n'est pas correcte pour cette étape. Veuillez utiliser la méthode GET pour réussir cette étape.`;
        response.warning = '💀💀💀 Méthode incorrecte. Assurez-vous d\'utiliser la méthode GET pour réussir cette étape. 💀💀💀';
    }else{
        // Vérification du type de contenu spécifié
        if (contentType !== 'application/json') {
            response.message = `Le type de contenu ${contentType} n'est pas correct pour cette étape. Veuillez utiliser le type de contenu "application/json" pour réussir cette étape.`;
            response.warning = '💀💀💀 Type de contenu incorrect. Assurez-vous d\'utiliser le type de contenu "application/json" pour réussir cette étape. 💀💀💀';
        }else{
            response.success = '✅✅✅ Vous avez spécifié le bon type de contenu. Vous pouvez passer à l\'étape suivante. ✅✅✅';
            response.next_step = 'Pour passer à l\'étape suivante, vous devez faire une requête POST à l\'URL /etape6 en incluant un en-tête "Content-Type".';
        }
    }    

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape5
};