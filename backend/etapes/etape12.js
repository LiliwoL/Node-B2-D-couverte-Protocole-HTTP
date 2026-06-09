// Étape 12: Requête SELECT dans la base de données
function handleEtape12(res) {
    db.all("SELECT * FROM parametres", [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        const response = {
            etape: 'Requête SELECT dans la base de données',
            message: 'Vous avez effectué une requête SELECT dans la base de données.',
            cours: 'La requête SELECT est utilisée pour récupérer des données de la base de données. Vous avez obtenu la liste des paramètres stockés.'
        };

        response.parametres = rows;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    });
}

module.exports = {
    handleEtape12
};