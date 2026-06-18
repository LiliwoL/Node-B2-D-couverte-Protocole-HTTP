
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

URL: /etape9
Method: POST
Headers:
  Content-Type : application/json
  Authorization:
  User-Agent:
Body:
// Le name doit contenir "Donald Duck"
{
  "name": "Donald Duck"
}


Etape 9: Méthode et type de contenu - POST avec contenu - Content-Type JSON - Authorization - Clé API et User-Agent


# Etape 10


| Step | Title | URL | Method | Headers | Body | Purpose |
| --- | --- | --- | --- | --- | --- | --- |
| 14 | Basic Auth | /etape14 | GET | Authorization: Basic <base64> | - | Validate Basic Authentication headers. Return 401 if invalid. |
| 15 | File Upload | /etape15 | POST | Content-Type: multipart/form-data | File binary | Accept file uploads and save to uploads/ directory. |
| 16 | Custom Headers | /etape16 | GET | X-Custom-Header: BTS-SIO | - | Check for custom headers. Return 400 if missing. |
| 17 | Redirect | /etape17 | GET | - | - | Issue a 302 Found redirect to /bienvenue. |
| 18 | Rate Limiting | /etape18 | GET | - | - | Return 429 Too Many Requests if called >3 times in 10 seconds. |
| 19 | Webhook | /etape19 | POST | Content-Type: application/json | {"event": "test"} | Simulate a webhook receiver. Validate JSON body. |
| 20 | CORS | /etape20 | GET | Origin: http://example.com | - | Set Access-Control-Allow-Origin header. Teach CORS basics. |