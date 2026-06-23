/**
 * Étape 2: Exemple avec paramètres
 * 
 * URL: /decouverte-des-parametres?nom=VotreNom
 * 
 * Dans cette étape, les utilisateurs apprennent à utiliser les paramètres dans l'URL pour personnaliser leurs requêtes HTTP.
 * Ils doivent inclure un paramètre "nom" dans l'URL pour réussir cette étape.
 * 
 * Pour passer à l'étape suivante, ils doivent faire une requête GET à l'URL /etape3 avec le paramètre "prenom" dans l'URL et un paramètre "age".
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
        response.success = '✅✅✅ Le paramètre "nom" est présent dans l\'URL. Vous pouvez passer à l\'étape suivante. ✅✅✅';

        response.next_step = 'Pour passer à l\'étape suivante, vous devez faire une requête GET à l\'URL "/plusieurs-parametres" avec un paramètre "prenom" dans l\'URL et un paramètre "age".';
        response.next_step += 'Cela vous permettra de comprendre comment les paramètres dans l\'URL fonctionnent pour personnaliser vos requêtes HTTP. ';
        response.next_step += 'N\'oubliez pas que les paramètres dans l\'URL sont souvent utilisés pour filtrer ou personnaliser les données que vous récupérez du serveur. ';
        response.next_step += 'En utilisant ces paramètres, vous pourrez mieux comprendre comment interagir avec les API RESTful et les serveurs web. ';
        response.next_step += 'Pour plus d\'informations sur les paramètres dans l\'URL, vous pouvez consulter la documentation officielle de MDN : ';
        response.next_step += 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET';
        
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