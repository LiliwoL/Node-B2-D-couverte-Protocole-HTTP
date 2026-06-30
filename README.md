#   _             _                  _              _     _             _                         _                  _        _   _ _____ _____ ____  
#  | |    ___    (_) ___ _   _    __| | ___   _ __ (_)___| |_ ___    __| |_   _   _ __  _ __ ___ | |_ ___   ___ ___ | | ___  | | | |_   _|_   _|  _ \ 
#  | |   / _ \   | |/ _ \ | | |  / _` |/ _ \ | '_ \| / __| __/ _ \  / _` | | | | | '_ \| '__/ _ \| __/ _ \ / __/ _ \| |/ _ \ | |_| | | |   | | | |_) |
#  | |__|  __/   | |  __/ |_| | | (_| |  __/ | |_) | \__ \ ||  __/ | (_| | |_| | | |_) | | | (_) | || (_) | (_| (_) | |  __/ |  _  | | |   | | |  __/ 
#  |_____\___|  _/ |\___|\__,_|  \__,_|\___| | .__/|_|___/\__\___|  \__,_|\__,_| | .__/|_|  \___/ \__\___/ \___\___/|_|\___| |_| |_| |_|   |_| |_|    
#              |__/                          |_|                                 |_|                                                                  

Un jeu de piste pour découvir le protocole HTTP.
Chaque étape indique comment accéder à la suivante en créant LA bonne requête HTTP (Header, Méthode...)
Un jeu en 10 étapes (pour le moment) à faire avec Postman, Bruno ou Insomnia.

--

# Règles du jeu de piste HTTP

Le départ se situe à l'adresse: `/bienvenue`

Vous allez devoir utiliser un outil permettant de gérer vos requêtes HTTP.
- Postman
- Bruno
- Insomnia
- ThunderClient (extension Visual Studio Code)

---

# Validation

La validation des étapes:
1. URL
2. Méthode
3. Paramètres
4. Headers
5. Body

---

# Serveur Node JS

Dans le dossier BACKEND/

```bash
## Dépendances
npm install

## Lancement
node --watch server.js
```

---

# Correction


Requete idempotentes
https://developer.mozilla.org/fr/docs/Glossary/Idempotent

Etape | URL | Methode | Headers | Body | Explication
-- | -- | -- | -- | -- | --
Etape 1 | /bienvenue | GET | - | - | Simple
Etape 2 | /decouverte-des-parametres?nom=votrenom | GET | - | - | Paramètre nom dans l'URL
Etape 3 | /plusieurs-parametres?prenom=truc&age=15 | GET | - | - | Paramètre prenom et age dans l'URL
Etape 4 | /un-peu-de-post | POST | - | - | -
Etape 5 | /5-content-type | POST | Content-Type = application/json | - | Découverte des Content Types
Etape 6 | /put-method-6 | PUT | Content-Type = text/html Accept = application/json | - | -
Etape 7 | /et-oui-delete?filename=monfichier.txt | DELETE | - | - | Paramètre dans l'url filename https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/DELETE
Etape 8 | /etape8/api/users/457521 | PATCH | Content-Type : application/json | Body: // Le role doit contenir le mot Developer {   "role": "Developer",   "email": "anything@truc.com" } | -
Etape 9 | /etape9 | POST | Content-Type : application/json Authorization: api-key: FenelonBTSSIO User-Agent: FenelonBTSSIO-UserAgent-LaRochelle-v1.0 | Body: // Le name doit contenir "Donald Duck"   "name": "Donald Duck" } | Etape 9: Méthode et type de contenu - POST avec contenu - Content-Type JSON - Authorization - Clé API et User-Agent