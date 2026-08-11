# Nameless Advisory — Portail confidentiel

Portail de restitution des audits d'expérience Nameless Advisory, et d'accès
privé pour les partenaires. Site statique — aucun build nécessaire.

## Structure

- `index.html` — application (page d'accès + moteur multi-portail)
- `clients.js` — données de chaque portail, une entrée par clé d'accès

Le moteur détecte automatiquement le type de chaque entrée et affiche le
gabarit adapté :

- **Rapport chronologique** — score global + 5 axes, cadre de mission,
  phases horodatées (événements, citations, retranscriptions, constatations
  de l'agent, preuves), galerie reconstruite depuis les preuves.
- **Page invitation** — accès privé présentant Nameless, la méthode, le rôle
  d'apporteur d'affaires et les perspectives d'évolution.

## Confidentialité des accès

Chaque portail est protégé par sa propre clé d'accès. **Les clés ne figurent
pas dans ce dépôt** : elles sont transmises individuellement à chaque
destinataire. Le site ne liste jamais les clés existantes.

> Ce dépôt est une maquette. Pour un usage réellement confidentiel, le dépôt
> doit être **privé** et les médias hébergés derrière une authentification :
> tant que le dépôt est public, le contenu de `clients.js` reste lisible par
> quiconque y accède, indépendamment de la page d'accès.

## Ajouter un portail

Dupliquer un bloc existant dans `clients.js`, définir une nouvelle clé d'accès
confidentielle et renseigner le contenu.
