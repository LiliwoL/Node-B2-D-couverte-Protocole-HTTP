// Étape 7: Paramètres dans l'URL et méthode - GET
function handleEtape7(res, method, query) {
    const response = {
        etape: 'Paramètres dans l\'URL et méthode - GET',
        message: `Vous avez utilisé la méthode ${method} avec les paramètres ${JSON.stringify(query)}.`,
        cours: 'Combiner la méthode GET avec des paramètres dans l\'URL vous permet de personnaliser davantage vos requêtes. Dans cette étape, vous avez utilisé les deux ensemble.'
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
}

module.exports = {
    handleEtape7
};