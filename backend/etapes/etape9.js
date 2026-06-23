/**
 * Etape 9: 
 * POST avec contenu attendu
 * Content-Type JSON
 * Authorization:
    api-key: FenelonBTSSIO
 * User-Agent: FenelonBTSSIO-UserAgent-LaRochelle v1.0
 * Body:
 * {
 *   "name": "Donald Duck"
 * }
 * 
 * @param {*} res 
 * @param {*} req
 */
// Étape 9: Méthode et type de contenu - POST
function handleEtape9(res, req) {
    // Method
    const method = req.method;    
    // Content-Type
    const contentType = req.headers['content-type'] || 'non spécifié';
    // User-Agent
    const userAgent = req.headers['user-agent'] || 'non spécifié';
    // Authorization
    const authorizationHeader = req.headers['api-key'] || 'non spécifié';

    //console.table(req.headers)


    // Réponse de base pour l'étape 9
    const response = {
        etape: 'Méthode et type de contenu - POST',
        message: `Vous avez utilisé la méthode ${method} avec le type de contenu ${contentType}.`,
        cours: 'La méthode POST est utilisée pour soumettre des données au serveur. L\'en-tête "Content-Type" est souvent utilisé pour spécifier le format des données envoyées.'
    };

    // *************************************

    // Vérification de la méthode utilisée
    if (method !== 'POST') {
        response.message = `La méthode ${method} n'est pas correcte pour cette étape. Veuillez utiliser la méthode POST pour réussir cette étape.`;
        response.warning = '💀💀💀 Méthode incorrecte. Assurez-vous d\'utiliser la méthode POST pour réussir cette étape. 💀💀💀';
    } // Vérification du Content-Type
    else if (contentType !== 'application/json') {        
        response.message = `Le type de contenu ${contentType} n'est pas correct pour cette étape. Veuillez utiliser "application/json" comme type de contenu pour réussir cette étape.`;
        response.warning = '💀💀💀 Type de contenu incorrect. Assurez-vous d\'utiliser "application/json" comme type de contenu pour réussir cette étape. 💀💀💀';
    } // Vérification User-Agent
    else if (userAgent !== global.USER_AGENT) {
        response.message = `Le User-Agent ${userAgent} n'est pas correct pour cette étape. Veuillez utiliser "Fenelon User Agent 1.0" comme User-Agent pour réussir cette étape.`;
        response.warning = '💀💀💀 User-Agent incorrect. Assurez-vous d\'utiliser "Fenelon User Agent 1.0" comme User-Agent pour réussir cette étape. 💀💀💀';
    } // Vérification de la présence de l'en-tête "Authorization" pour la clé API
    else if (authorizationHeader!== 'FenelonBTSSIO') {
        response.message = `Vous n'avez pas fourni de clé API!`;
        response.warning = '💀💀💀 Clé API non fournie! Founrissez une clé API pour réussir cette étape. 💀💀💀';                
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

                // Vérification de la présence du champ "name" et de sa valeur
                if (!jsonBody.name || !jsonBody.name.includes('Donald Duck')) {
                    response.message = `Le contenu du body n'est pas correct pour cette étape. Assurez-vous d'inclure un champ "name" avec la valeur contenant la valeur "Donald Duck" dans le body de votre requête pour réussir cette étape.`;
                    response.warning = '💀💀💀 Contenu du body incorrect. Assurez-vous d\'inclure un champ "role" avec la valeur contenant le mot clé "Developer" et un champ "email" dans le body de votre requête pour réussir cette étape. 💀💀💀';
                } else {
                    response.success = '✅✅✅ Vous avez utilisé la bonne méthode et le bon type de contenu. Vous avez terminé le jeu de piste! ✅✅✅';
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
    handleEtape9
};