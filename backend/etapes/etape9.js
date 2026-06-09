// Étape 9: Méthode et type de contenu - PUT
function handleEtape9(res, method, contentType) {
    const response = {
        etape: 'Méthode et type de contenu - PUT',
        message: `Vous avez utilisé la méthode ${method} avec le type de contenu ${contentType}.`,
        cours: 'La méthode PUT est utilisée pour mettre à jour des données sur le serveur. L\'en-tête "Content-Type" est souvent utilisé pour spécifier le format des données envoyées.'
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape9
};