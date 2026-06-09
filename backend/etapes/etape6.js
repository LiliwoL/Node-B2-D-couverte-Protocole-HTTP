// Étape 6: Types de contenu - POST
function handleEtape6(res, contentType) {
    const response = {
        etape: 'Types de contenu - POST',
        message: `Vous avez spécifié le type de contenu ${contentType} dans votre requête POST.`,
        cours: 'Lors de l\'envoi de données avec la méthode POST, vous devez indiquer au serveur le format des données que vous envoyez. Cela est souvent spécifié avec l\'en-tête "Content-Type".'
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape6
};