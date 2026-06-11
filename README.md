
# Serveur
## Dépendances

npm install -g nodemon

npm install sqlite3


## Lancement

nodemon server.js

---

Requtete içdempotentes
https://developer.mozilla.org/fr/docs/Glossary/Idempotent

# Etape 1

URL: /bienvenue

# Etape 2

Paramètre dans l'URL
URL: /etape2?nom=votrenom

# Etape 3

URL: /etape3?prenom=truc&age=15
Méthode GET
Paramètre dans l'url prenom et age

# Etape 4

Methode POST
URL: /etape4

# Etape 5

URL: /etape5
Content-Type = application/json
Method POST

# Etape 6

URL: /etape6
Method PUT
Content-Type = text/html
Accept = application/json

# Etape 7

URL: /etape7?filename=monfichier.txt
Methode DELETE
Paramètre dans l'url filename

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/DELETE

# Etape 8

URL: /etape8/api/users/457521
Methode PATCH
Content-Type : application/json
Body:
// Le role doit contenir le mot Developer
{
  "role": "Developer",
  "email": "anything@truc.com"
}

# Etape 9

https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Methods/PATCH
https://blog.postman.com/http-patch-method/