/**
 * Étape 2: Exemple avec paramètres
 * 
 * URL: /etape2?nom=VotreNom
 * 
 * Dans cette étape, les utilisateurs apprennent à utiliser les paramètres dans l'URL pour personnaliser leurs requêtes HTTP.
 * Ils doivent inclure un paramètre "nom" dans l'URL pour réussir cette étape.
 * 
 * Pour passer à l'étape suivante, ils doivent faire une requête GET à l'URL /etape3.
 */
function handleEtape2(res, query) {
    const response = {
        etape: 'Etape 2: Paramètres dans l\'URL',
        message: 'Bravo ! Vous avez réussi la première étape. Maintenant, explorons l\'utilisation des paramètres dans l\'URL.',
        cours: 'Les paramètres dans l\'URL permettent de transmettre des informations à travers les requêtes HTTP. Vous pouvez les utiliser pour personnaliser vos requêtes.'
    };

    // Vérification de la présence du paramètre "nom" dans l'URL
    if (query && query.nom) {
        response.message = `Bravo ${query.nom}! Vous avez réussi la première étape. Maintenant, explorons l\'utilisation des paramètres dans l\'URL.`;
        response.success = '✅✅✅ Le paramètre nom est présent dans l\'URL. Vous pouvez passer à l\'étape suivante. ✅✅✅';

        response.next_step = 'Pour passer à l\'étape suivante, vous devez faire une requête GET à l\'URL /etape3.';
    }else{
        response.message += ' Cependant, le paramètre nom est manquant dans votre requête. Veuillez l\'inclure pour réussir cette étape.';
        response.warning = '💀💀💀 Le paramètre nom est manquant dans l\'URL. Assurez-vous de l\'inclure pour réussir cette étape. 💀💀💀'
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape2
};