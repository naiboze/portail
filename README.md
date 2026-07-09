# NAIBOZE — Portail Rapport Confidentiel (démo)

Maquette du portail de restitution des audits d'expérience NAIBOZE.
Site statique — aucun build nécessaire.

## Structure

- `index.html` — application (page d'accès + rapport, moteur multi-client **bilingue**)
- `clients.js` — données des rapports, une entrée par clé d'accès

## Clés d'accès

| Établissement | Clé | Structure |
|---|---|---|
| **Hôtel Azur Prestige ★★★★★ — France (78,8/100)** | `NBZ-01A-2026` | chronologique |
| Hôtel ★★★★★ — Massif alpin (78/100) | `NBA-7F4A-9C21-D0E5` | démo |
| Palace ★★★★★ — Paris (91/100) | `NBZ-2B8E-5A17-C3F0` | démo |
| Resort ★★★★ — Méditerranée (63/100) | `NBZ-9D40-6E22-A1B8` | démo |

Astuce : ouvrir le portail avec `?demo` dans l'URL affiche le panneau des clés,
cliquables pour tester chaque rapport d'un geste.

## Deux structures de rapport

Le moteur détecte automatiquement le type de chaque rapport et affiche le gabarit adapté.

- **Structure « démo »** (héritée) — note /10 par étape, constats codés,
  matrice gravité × fréquence, recommandations priorisées.
  Reconnue à la présence d'un tableau `parcours`.

- **Structure « chronologique »** (définitive, calée sur le rapport Azur Prestige) —
  score global + 5 axes, cadre de mission complet, 8 phases horodatées
  (événements, citations, retranscriptions de synthèse, preuves, ressenti de l'agent),
  galerie reconstruite depuis les preuves des phases.
  Reconnue à la présence d'un tableau `phases`.

## Ajouter un client

Dupliquer un bloc existant dans `clients.js`, changer la clé d'accès et le contenu.

- Pour un rapport **chronologique**, reprendre le bloc `NBZ-01A-2026` comme modèle.
  Chaque phase contient des `events` (avec `blocks` de type `p`, `quote`, `synth`,
  `stat`, `flag` et un `media` optionnel) et se referme sur un `ressenti`.
- Pour un rapport **démo**, reprendre l'un des trois blocs existants.

Aucune modification de `index.html` n'est requise : le moteur s'adapte au type de données.

---

> Démonstration. Le contrôle d'accès est côté navigateur (non sécurisé) :
> destiné à valider le concept et la présentation client, pas à un usage
> confidentiel réel. L'hébergement chiffré des médias et le contrôle d'accès
> côté serveur relèvent de la mise en production.
