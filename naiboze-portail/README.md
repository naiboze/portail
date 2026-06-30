# NAIBOZE — Portail Rapport Confidentiel (démo)

Maquette du portail de restitution des audits d'expérience NAIBOZE.
Site statique — aucun build nécessaire.

## Structure
- `index.html` — application (page d'accès + rapport, moteur multi-client)
- `clients.js` — données des rapports, une entrée par clé d'accès

## Clés de démonstration
| Établissement | Clé |
|---|---|
| Hôtel ★★★★★ — Massif alpin (78/100) | `NBZ-7F4A-9C21-D0E5` |
| Palace ★★★★★ — Paris (91/100) | `NBZ-2B8E-5A17-C3F0` |
| Resort ★★★★ — Méditerranée (63/100) | `NBZ-9D40-6E22-A1B8` |

## Ajouter un client
Dupliquer un bloc dans `clients.js`, changer la clé et le contenu.

> Démonstration. Le contrôle d'accès est côté navigateur (non sécurisé) :
> destiné à valider le concept, pas à un usage confidentiel réel.
