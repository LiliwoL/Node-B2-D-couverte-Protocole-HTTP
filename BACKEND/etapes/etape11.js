// Étape 11: Stockage des paramètres dans la base de données
function handleEtape11(res, query) {
    const nom = query.nom;
    const valeur = query.valeur;

    db.run("INSERT INTO parametres (nom, valeur) VALUES (?, ?)", [nom, valeur], function (err) {
        if (err) {
            console.error(err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        const response = {
            etape: 'Stockage des paramètres dans la base de données',
            message: 'Les paramètres ont été enregistrés dans la base de données avec succès.',
            cours: 'Dans cette étape, vous avez appris à stocker des paramètres de requête dans une base de données. Ceci est utile pour sauvegarder des informations persistantes.'
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    });
}

module.exports = {
    handleEtape11
};