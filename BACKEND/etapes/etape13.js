// Étape 13: Requête DELETE dans la base de données
function handleEtape13(res) {
    db.run("DELETE FROM parametres", function (err) {
        if (err) {
            console.error(err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        const response = {
            etape: 'Requête DELETE dans la base de données',
            message: 'Vous avez effectué une requête DELETE dans la base de données.',
            cours: 'La requête DELETE est utilisée pour supprimer des données de la base de données. Vous avez supprimé tous les paramètres stockés.'
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    });
}

module.exports = {
    handleEtape13
};