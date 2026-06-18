/**
 *  Étape 8: Méthode et type de contenu - POST
 * URL: /etape8/api/users/12345
 * Méthode: PATCH
 * En-tête: Content-Type: application/json
 * Body:
 * {
 *   "role": "Developer",
 *   "email": "anything@truc.com"
 * }
 * 
 * Cette étape combine la méthode PATCH avec la spécification du type de contenu. Cela est souvent nécessaire lors de l'envoi de données au serveur.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
 * 
 * @param {*} res 
 * @param {*} req 
 */
function handleEtape8(res, req) {
    // Récupération de la méthode et du type de contenu de la requête
    const method = req.method;
    const contentType = req.headers['content-type'];    

    const response = {
        etape: 'Méthode et type de contenu - PATCH',
        message: `Vous avez utilisé la méthode ${method} avec le type de contenu ${contentType}.`,
        cours: 'Cette étape combine la méthode PATCH avec la spécification du type de contenu. Cela est souvent nécessaire lors de l\'envoi de données au serveur.'
    };

    // Vérification de la méthode utilisée
    if (method !== 'PATCH') {
        response.message = `La méthode ${method} n'est pas correcte pour cette étape. Veuillez utiliser la méthode PATCH pour réussir cette étape.`;
        response.warning = '💀💀💀 Méthode incorrecte. Assurez-vous d\'utiliser la méthode PATCH pour réussir cette étape. 💀💀💀';
    } else if (contentType !== 'application/json') {
        // Vérification du type de contenu
        response.message = `Le type de contenu ${contentType} n'est pas correct pour cette étape. Veuillez utiliser "application/json" comme type de contenu pour réussir cette étape.`;
        response.warning = '💀💀💀 Type de contenu incorrect. Assurez-vous d\'utiliser "application/json" comme type de contenu pour réussir cette étape. 💀💀💀';
    } else {
        
        // Récupération du body de la requête
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        }).on('end', () => {
            // Conversion du body en chaîne de caractères
            const parsedBody = Buffer.concat(body).toString();
            
            // On attend role avec la valeur contenant le mot "Developer"
            // et email avec n'importe quelle valeur (on ne vérifie pas l'email pour cette étape)
            try {
                // Conversion du body en JSON
                const jsonBody = JSON.parse(parsedBody);
                console.log('Json de la requête:', jsonBody);

                // Vérification de la présence du champ "role" et de sa valeur
                if (!jsonBody.role || !jsonBody.role.includes('Developer') || !jsonBody.email) {
                    response.message = `Le contenu du body n'est pas correct pour cette étape. Assurez-vous d'inclure un champ "role" avec la valeur contenant le mot clé "Developer", et un champ "email" dans le body de votre requête pour réussir cette étape.`;
                    response.warning = '💀💀💀 Contenu du body incorrect. Assurez-vous d\'inclure un champ "role" avec la valeur contenant le mot clé "Developer" et un champ "email" dans le body de votre requête pour réussir cette étape. 💀💀💀';
                } else {
                    response.success = '✅✅✅ Vous avez utilisé la bonne méthode et le bon type de contenu. Vous pouvez passer à l\'étape suivante. ✅✅✅';
                }
            } catch (error) {
                response.message = 'Le contenu du body n\'est pas au format JSON valide.';
                response.warning = '💀💀💀 Contenu du body incorrect. Assurez-vous que le body est au format JSON valide pour réussir cette étape. 💀💀💀';
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response));
        }).on('error', (err) => {
            console.error('Erreur lors de la lecture du body:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
        });
        
    }
    
}

module.exports = {
    handleEtape8
};