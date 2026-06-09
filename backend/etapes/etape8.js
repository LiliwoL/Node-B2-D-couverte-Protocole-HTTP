// Étape 8: Méthode et type de contenu - POST
function handleEtape8(res, method, contentType) {
    const response = {
        etape: 'Méthode et type de contenu - POST',
        message: `Vous avez utilisé la méthode ${method} avec le type de contenu ${contentType}.`,
        cours: 'Cette étape combine la méthode POST avec la spécification du type de contenu. Cela est souvent nécessaire lors de l\'envoi de données au serveur.'
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape8
};