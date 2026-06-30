
// Étape 10: Méthode et type de contenu - DELETE
function handleEtape10(res, method, contentType) {
    const response = {
        etape: 'Méthode et type de contenu - DELETE',
        message: `Vous avez utilisé la méthode ${method} avec le type de contenu ${contentType}.`,
        cours: 'La méthode DELETE est utilisée pour supprimer des données sur le serveur. Vous pouvez également spécifier le type de contenu pour indiquer le format des données que vous envoyez.'
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape10
};