/* =====================================================================
   NAIBOZE — Données des rapports clients (DÉMONSTRATION)
   Chaque clé d'accès ouvre le rapport de l'établissement correspondant.
   Pour ajouter un client : copiez un bloc et changez la clé + le contenu.
   ===================================================================== */
const CLIENTS = {

  /* ---------- CLIENT 1 — Hôtel alpin 5★ — score solide ---------- */
  "NBZ-7F4A-9C21-D0E5": {
    ref: "FND-001",
    name: "Établissement ★★★★★ — Massif alpin",
    score: 78, verdict: "SOLIDE", verdictTitle: "Excellence en devenir",
    synthTitle: "Un standard maîtrisé, une émotion à réveiller",
    synthLead: "L'établissement délivre une prestation techniquement irréprochable. La marge de progression se loge dans la personnalisation et les micro-attentions qui transforment un séjour réussi en souvenir marquant.",
    verdictLong: "« Une maison qui exécute son métier avec rigueur, mais qui laisse encore sur la table l'attention sur-mesure attendue d'un cinq étoiles — le passage de l'irréprochable au mémorable se joue sur une poignée de gestes. »",
    kpis: [
      {k:'7<small>/9</small>', lbl:"Étapes du parcours au-dessus du standard"},
      {k:'14', lbl:"Constats formalisés, dont 2 critiques"},
      {k:'2<small>min</small>', lbl:"Attente moyenne au check-in (cible < 4 min)"},
      {k:'9<small>/10</small>', lbl:"Qualité perçue de la chambre et du spa"}
    ],
    mission: {
      dates:"du 14 au 16 mars 2026", scenarioName:"couple — séjour bien-être",
      perimetre:"Parcours complet, de la réservation au check-out. Restaurant, spa et conciergerie inclus.",
      duree:"2 nuits — du 14 au 16 mars 2026. 22 points de contact évalués.",
      scenario:"Couple en séjour bien-être, exigeant et discret. Une demande spéciale glissée à dessein.",
      methodo:"Grille propriétaire à 9 dimensions, notation pondérée, preuve audiovisuelle systématique."
    },
    parcours: [
      {n:'Réservation', score:8, c:'C-04', txt:"Réservation en ligne fluide, confirmation rapide et soignée. Une demande spéciale d'oreillers a été formulée par e-mail — sa non-transmission est à l'origine du constat C-04."},
      {n:'Pré-arrivée', score:6, c:null, txt:"Aucun contact proactif avant le séjour (heure d'arrivée, préférences). Occasion manquée de préparer un accueil sur-mesure."},
      {n:'Check-in', score:7, c:'C-02', txt:"Accueil souriant et efficace (2 min d'attente) mais standardisé. Le nom du client n'est utilisé qu'une fois, mécaniquement (C-02)."},
      {n:'Chambre', score:6, c:'C-04', txt:"Chambre superbe et impeccable, mais demande spéciale absente à l'arrivée — chambre à refaire (C-04). L'effet « waouh » est gâché par ce détail."},
      {n:'Restaurant', score:9, c:null, txt:"Temps fort du séjour : cuisine maîtrisée, service attentif, conseil sommelier remarqué."},
      {n:'Spa', score:10, c:'C-07', txt:"Sommet émotionnel de l'expérience. Personnalisation, attentions post-soin (tisane, mot manuscrit). Modèle pour toute la maison (C-07)."},
      {n:'Room-service', score:4, c:'C-09', txt:"Point bas du séjour : 38 min d'attente sans information, plat tiède à l'arrivée (C-09). Friction la plus grave relevée."},
      {n:'Petit-déj.', score:8, c:null, txt:"Buffet généreux, réassort impeccable. Signalétique des allergènes à renforcer."},
      {n:'Check-out', score:6, c:null, txt:"Départ fluide, mais purement transactionnel : aucune question sur le séjour vécu, dernière occasion de marquer manquée."}
    ],
    constats: [
      {id:'C-04', crit:'high', critLabel:'Critique', stage:'Réservation → Arrivée', title:'Demande spéciale non transmise',
        observed:"La demande d'oreillers hypoallergéniques, formulée par e-mail à la réservation, n'avait pas été relayée à l'étage. Chambre à refaire après l'arrivée.",
        impact:"Premier contact avec la chambre dégradé ; sentiment de ne pas être attendu.",
        criticite:"Élevée — touche la promesse de personnalisation, cœur du positionnement.",
        ecart:"Une demande client doit suivre la réservation jusqu'à l'étage. Rupture de chaîne.",
        media:"Extrait vidéo · arrivée en chambre (00:42)"},
      {id:'C-09', crit:'high', critLabel:'Critique', stage:'Séjour', title:'Rupture de rythme au room-service du soir',
        observed:"38 minutes d'attente pour une commande simple, sans information ni rappel. Plat tiède à l'arrivée.",
        impact:"Frustration en fin de journée, moment clé de détente du scénario bien-être.",
        criticite:"Élevée — délai > 2× la cible interne annoncée (15 min).",
        ecart:"Aucune communication proactive sur le retard ; geste commercial absent.",
        media:"Horodatage commande · 21:14 → 21:52"},
      {id:'C-02', crit:'med', critLabel:'Modérée', stage:'Check-in', title:'Accueil chaleureux mais standardisé',
        observed:"Accueil souriant et efficace, mais formulé à l'identique pour chaque client. Le nom n'est utilisé qu'une fois.",
        impact:"L'émotion d'arrivée reste tiède là où elle pourrait marquer durablement.",
        criticite:"Modérée — n'entame pas la satisfaction, plafonne l'enchantement.",
        ecart:"Un cinq étoiles personnalise l'accueil (préférences connues, mot sur-mesure).",
        media:"Extrait audio · accueil réception (01:10)"},
      {id:'C-07', crit:'low', critLabel:'Point fort', stage:'Séjour', title:'Spa — excellence sensorielle',
        observed:"Protocole de soin remarquable : transition douce, praticienne attentive, attentions post-soin (tisane, mot manuscrit).",
        impact:"Pic émotionnel du séjour ; ancrage mémoriel le plus fort relevé.",
        criticite:"— À ériger en référence interne et à diffuser aux autres services.",
        ecart:"Au-dessus du standard. Modèle de la personnalisation attendue ailleurs.",
        media:"Photo · attention post-soin (anonymisée)"}
    ],
    gallery: [
      {title:'Arrivée en chambre', type:'Vidéo', dur:'00:42', constat:'constat C-04', desc:"Vidéo 00:42 — la chambre est refaite après constat de l'absence des oreillers demandés."},
      {title:'Room-service du soir', type:'Vidéo', dur:'01:05', constat:'constat C-09', desc:"Captation horodatée 21:14 → 21:52 — 38 minutes d'attente sans communication."},
      {title:'Accueil réception', type:'Audio', dur:'01:10', constat:'constat C-02', desc:"Extrait audio 01:10 — accueil chaleureux mais formulé à l'identique."},
      {title:'Attention post-soin', type:'Photo', dur:'', constat:'constat C-07', desc:"Photo anonymisée — mot manuscrit et tisane laissés après le soin."},
      {title:'Petit-déjeuner', type:'Vidéo', dur:'00:55', constat:'constat C-11', desc:"Vidéo 00:55 — réassort impeccable, signalétique des allergènes à renforcer."},
      {title:'Check-out', type:'Vidéo', dur:'00:38', constat:'constat C-13', desc:"Vidéo 00:38 — départ fluide, absence de question sur le séjour vécu."}
    ],
    forts: [
      "<b>Rituel spa d'exception.</b> Personnalisation et attentions post-soin au niveau des meilleures maisons.",
      "<b>Propreté & tenue des espaces</b> irréprochables sur l'ensemble du séjour.",
      "<b>Efficacité du check-in</b> — 2 min d'attente, processus fluide.",
      "<b>Qualité gastronomique</b> du restaurant, dressage et conseil sommelier remarqués."
    ],
    frictions: [
      "<b>Chaîne de la demande client rompue</b> entre réservation et étage <i>(C-04)</i>.",
      "<b>Room-service lent et silencieux</b> — 38 min sans information <i>(C-09)</i>.",
      "<b>Accueil scénarisé à l'identique</b>, personnalisation de surface <i>(C-02)</i>.",
      "<b>Check-out transactionnel</b> — aucun recueil du ressenti de séjour."
    ],
    matrix: [
      {label:'C-09 · Room-service', grav:3, freq:2},
      {label:'C-04 · Demande', grav:3, freq:1},
      {label:'C-02 · Accueil', grav:2, freq:3},
      {label:'C-13 · Départ', grav:2, freq:3},
      {label:'C-11 · Buffet', grav:1, freq:2}
    ],
    recos: {
      qw:[
        {title:"Brancher les demandes client sur l'étage", desc:"Un point de contrôle « demandes spéciales » ajouté au briefing du matin et à la fiche d'arrivée.", links:['C-04'], effort:1, impact:'fort'},
        {title:"Protocole « retard room-service »", desc:"Rappel client au-delà de 15 min + geste systématique. Script remis aux équipes du soir.", links:['C-09'], effort:1, impact:'fort'},
        {title:"Question de clôture au check-out", desc:"« Qu'est-ce qui vous a le plus marqué ? » — recueil du ressenti et dernière occasion de réparer.", links:['C-07'], effort:1, impact:'moyen'}
      ],
      st:[
        {title:"Programme de personnalisation client", desc:"Fiche préférences enrichie à la réservation, partagée à tous les services. Diffuser le modèle du spa à la maison entière.", links:['C-02','C-07'], effort:3, impact:'fort'},
        {title:"Refonte de l'expérience d'arrivée", desc:"Scénario d'accueil sur-mesure (nom, occasion, attention pré-positionnée en chambre).", links:['C-02','C-04'], effort:2, impact:'fort'},
        {title:"Pilotage des délais en restauration", desc:"Indicateurs de temps de service, revue hebdomadaire avec les chefs de rang.", links:['C-09'], effort:2, impact:'moyen'}
      ]
    }
  },

  /* ---------- CLIENT 2 — Palace parisien — score excellence ---------- */
  "NBZ-2B8E-5A17-C3F0": {
    ref: "DEMO-002",
    name: "Palace ★★★★★ — Paris Rive Droite",
    score: 91, verdict: "EXCELLENCE", verdictTitle: "Référence du segment",
    synthTitle: "Une maison qui transforme chaque détail en signature",
    synthLead: "L'établissement atteint un niveau de maîtrise rare : technique irréprochable ET émotion constamment travaillée. Les rares points d'attention relèvent du raffinement ultime, non de la correction.",
    verdictLong: "« Un palace qui ne se contente pas d'exécuter : il anticipe, personnalise et surprend. À ce niveau, le travail ne consiste plus à corriger mais à protéger un standard d'exception déjà installé. »",
    kpis: [
      {k:'9<small>/9</small>', lbl:"Étapes du parcours au niveau attendu ou au-dessus"},
      {k:'9', lbl:"Constats formalisés, aucun critique"},
      {k:'0<small>min</small>', lbl:"Attente au check-in — accueil en suite"},
      {k:'10<small>/10</small>', lbl:"Personnalisation et conciergerie"}
    ],
    mission: {
      dates:"du 3 au 5 février 2026", scenarioName:"voyageur d'affaires VIP",
      perimetre:"Parcours complet incluant arrivée chauffeur, conciergerie, restaurant étoilé et service en chambre.",
      duree:"2 nuits — du 3 au 5 février 2026. 26 points de contact évalués.",
      scenario:"Dirigeant en déplacement, agenda serré, exigences de discrétion et d'efficacité élevées.",
      methodo:"Grille propriétaire à 9 dimensions, notation pondérée, preuve audiovisuelle systématique."
    },
    parcours: [
      {n:'Réservation', score:10, c:null, txt:"Prise de contact immédiate, appel de pré-arrivée pour préparer le séjour. Excellence dès le premier point de contact."},
      {n:'Pré-arrivée', score:9, c:'C-01', txt:"Préférences recueillies et anticipées. Léger délai sur la confirmation du transfert chauffeur (C-01), seul accroc."},
      {n:'Arrivée', score:10, c:null, txt:"Accueil nominatif dès la voiture, check-in réalisé en suite. Aucune attente. Standard palace parfaitement tenu."},
      {n:'Chambre', score:9, c:null, txt:"Suite irréprochable, attentions personnalisées (presse, boissons préférées). Climatisation légèrement bruyante la nuit."},
      {n:'Restaurant', score:10, c:null, txt:"Expérience gastronomique mémorable, service synchronisé, sommellerie remarquable."},
      {n:'Conciergerie', score:10, c:'C-05', txt:"Réservations obtenues en un temps record, suivi proactif. Modèle de conciergerie (C-05)."},
      {n:'Room-service', score:8, c:'C-06', txt:"Service rapide et soigné. Carte du soir un peu limitée après 23h (C-06)."},
      {n:'Spa', score:9, c:null, txt:"Soin de haute tenue, cabine et praticien excellents. Plage horaire d'ouverture à élargir."},
      {n:'Check-out', score:9, c:null, txt:"Départ fluide, facture anticipée, raccompagnement soigné. Suivi post-séjour à instaurer."}
    ],
    constats: [
      {id:'C-05', crit:'low', critLabel:'Point fort', stage:'Séjour', title:'Conciergerie d\'exception',
        observed:"Demande de dernière minute (table dans un restaurant complet) honorée en moins de 20 minutes, avec suivi proactif jusqu'à confirmation.",
        impact:"Sentiment de toute-puissance du client ; ancrage mémoriel majeur.",
        criticite:"— À documenter comme standard interne et à valoriser en communication.",
        ecart:"Au-dessus du standard palace. Réactivité de référence.",
        media:"Extrait audio · échange conciergerie (00:48)"},
      {id:'C-06', crit:'med', critLabel:'Modérée', stage:'Séjour', title:'Carte room-service réduite en nuit profonde',
        observed:"Après 23h, l'offre se limite à quelques plats froids. Le client VIP n'a pas trouvé d'option chaude à minuit.",
        impact:"Légère dissonance avec le standard 24/7 attendu d'un palace.",
        criticite:"Modérée — n'affecte pas la note globale mais visible pour la clientèle nocturne.",
        ecart:"Un palace propose une offre chaude restreinte mais permanente.",
        media:"Capture menu · service de nuit"},
      {id:'C-01', crit:'med', critLabel:'Modérée', stage:'Pré-arrivée', title:'Confirmation du transfert tardive',
        observed:"La confirmation du chauffeur est arrivée 30 min avant l'heure prévue, créant une incertitude pour un client à l'agenda serré.",
        impact:"Micro-stress en amont d'un séjour par ailleurs sans faute.",
        criticite:"Modérée — sur un profil VIP, l'anticipation logistique est attendue.",
        ecart:"Confirmation idéalement transmise la veille.",
        media:"Échange e-mail · transfert (anonymisé)"}
    ],
    gallery: [
      {title:'Accueil en suite', type:'Vidéo', dur:'00:51', constat:'parcours Arrivée', desc:"Vidéo 00:51 — check-in réalisé directement en suite, accueil nominatif."},
      {title:'Échange conciergerie', type:'Audio', dur:'00:48', constat:'constat C-05', desc:"Extrait audio 00:48 — demande honorée en moins de 20 minutes."},
      {title:'Dressage restaurant', type:'Photo', dur:'', constat:'parcours Restaurant', desc:"Photo anonymisée — dressage signature du restaurant gastronomique."},
      {title:'Menu service de nuit', type:'Photo', dur:'', constat:'constat C-06', desc:"Capture du menu de nuit — offre chaude limitée après 23h."},
      {title:'Attentions chambre', type:'Vidéo', dur:'00:36', constat:'parcours Chambre', desc:"Vidéo 00:36 — presse et boissons préférées disposées avant l'arrivée."},
      {title:'Raccompagnement', type:'Vidéo', dur:'00:29', constat:'parcours Check-out', desc:"Vidéo 00:29 — départ fluide, facture anticipée, raccompagnement soigné."}
    ],
    forts: [
      "<b>Conciergerie de référence</b> — réactivité et suivi proactif exceptionnels <i>(C-05)</i>.",
      "<b>Accueil VIP sans faille</b> — nominatif dès la voiture, check-in en suite, zéro attente.",
      "<b>Personnalisation anticipée</b> — préférences recueillies et déployées en chambre.",
      "<b>Excellence gastronomique</b> — service synchronisé et sommellerie remarquable."
    ],
    frictions: [
      "<b>Offre room-service nocturne restreinte</b> après 23h <i>(C-06)</i>.",
      "<b>Confirmation logistique tardive</b> du transfert chauffeur <i>(C-01)</i>.",
      "<b>Climatisation de chambre</b> légèrement audible la nuit.",
      "<b>Suivi post-séjour</b> à instaurer pour fidéliser la clientèle VIP."
    ],
    matrix: [
      {label:'C-06 · Nuit', grav:2, freq:2},
      {label:'C-01 · Transfert', grav:2, freq:1},
      {label:'Clim chambre', grav:1, freq:2},
      {label:'Suivi post-séjour', grav:1, freq:3}
    ],
    recos: {
      qw:[
        {title:"Confirmer le transfert la veille", desc:"Automatiser l'envoi de la confirmation chauffeur à J-1 pour les profils à agenda contraint.", links:['C-01'], effort:1, impact:'moyen'},
        {title:"Mini-carte chaude de nuit", desc:"Ajouter 3 plats chauds réalisables 24/7 par l'équipe de nuit.", links:['C-06'], effort:1, impact:'moyen'},
        {title:"Message de remerciement post-séjour", desc:"E-mail personnalisé sous 48h, signé par le directeur, avec invitation au retour.", links:['C-05'], effort:1, impact:'fort'}
      ],
      st:[
        {title:"Programme de fidélité VIP", desc:"Reconnaissance automatique des préférences d'un séjour à l'autre, attentions évolutives.", links:['C-05'], effort:3, impact:'fort'},
        {title:"Mise à niveau acoustique des suites", desc:"Audit acoustique et traitement des unités de climatisation les plus audibles.", links:[], effort:2, impact:'moyen'}
      ]
    }
  },

  /* ---------- CLIENT 3 — Resort balnéaire — score fragile ---------- */
  "NBZ-9D40-6E22-A1B8": {
    ref: "DEMO-003",
    name: "Resort ★★★★ — Côte méditerranéenne",
    score: 63, verdict: "À REDRESSER", verdictTitle: "Potentiel sous-exploité",
    synthTitle: "Un cadre superbe desservi par une exécution irrégulière",
    synthLead: "Le site et les installations sont remarquables, mais l'expérience souffre de ruptures répétées dans le service. L'écart entre la promesse et la réalité vécue est le principal chantier.",
    verdictLong: "« Le potentiel est manifeste — emplacement, équipements, cadre. Mais l'irrégularité du service et plusieurs ruptures dans le parcours empêchent l'établissement d'atteindre le niveau que son cadre laisse espérer. Le redressement passe par la constance. »",
    kpis: [
      {k:'4<small>/9</small>', lbl:"Étapes du parcours au niveau attendu"},
      {k:'17', lbl:"Constats formalisés, dont 4 critiques"},
      {k:'11<small>min</small>', lbl:"Attente au check-in (cible < 4 min)"},
      {k:'8<small>/10</small>', lbl:"Qualité du cadre et des installations"}
    ],
    mission: {
      dates:"du 22 au 25 mai 2026", scenarioName:"famille — séjour balnéaire",
      perimetre:"Parcours complet incluant piscine, plage privée, restauration et animation famille.",
      duree:"3 nuits — du 22 au 25 mai 2026. 24 points de contact évalués.",
      scenario:"Famille avec deux enfants, attentes de fluidité, de propreté et d'attention aux plus jeunes.",
      methodo:"Grille propriétaire à 9 dimensions, notation pondérée, preuve audiovisuelle systématique."
    },
    parcours: [
      {n:'Réservation', score:7, c:null, txt:"Site de réservation correct mais lent à confirmer. Pas de prise en compte de la présence d'enfants."},
      {n:'Pré-arrivée', score:4, c:'C-03', txt:"Aucune information pratique avant l'arrivée (accès, horaires, services enfants). Sentiment d'abandon (C-03)."},
      {n:'Check-in', score:5, c:'C-01', txt:"11 minutes d'attente, une seule personne en réception en pleine affluence (C-01). Accueil pressé."},
      {n:'Chambre', score:7, c:null, txt:"Chambre familiale spacieuse et propre, mais lit enfant non installé malgré la demande."},
      {n:'Piscine / Plage', score:8, c:null, txt:"Cadre superbe, transats propres, eau impeccable. Point fort incontestable du séjour."},
      {n:'Restaurant', score:5, c:'C-08', txt:"Cuisine correcte mais service débordé au dîner : 25 min avant la prise de commande (C-08)."},
      {n:'Animation famille', score:4, c:'C-12', txt:"Club enfants annoncé mais fermé deux après-midis sans information (C-12). Promesse non tenue."},
      {n:'Propreté', score:8, c:null, txt:"Entretien des chambres et parties communes de bon niveau, régulier."},
      {n:'Check-out', score:6, c:null, txt:"Départ correct mais facture à rectifier (consommations erronées). Vérification nécessaire."}
    ],
    constats: [
      {id:'C-12', crit:'high', critLabel:'Critique', stage:'Animation', title:'Club enfants fermé sans information',
        observed:"Le club enfants, mis en avant à la réservation, était fermé deux après-midis sans aucune communication aux familles présentes.",
        impact:"Promesse centrale du séjour famille non tenue ; réorganisation forcée des parents.",
        criticite:"Élevée — touche le motif principal de réservation de la clientèle cible.",
        ecart:"Un service annoncé doit être assuré ou son indisponibilité communiquée à l'avance.",
        media:"Photo · panneau club fermé (anonymisée)"},
      {id:'C-08', crit:'high', critLabel:'Critique', stage:'Restauration', title:'Service du dîner débordé',
        observed:"25 minutes avant la prise de commande, personnel visiblement en sous-effectif, enfants impatients sans solution proposée.",
        impact:"Moment familial dégradé, tension en fin de journée.",
        criticite:"Élevée — récurrent sur les trois soirs observés.",
        ecart:"Dimensionnement des équipes inadapté à l'affluence.",
        media:"Vidéo · salle du restaurant 20:30 (anonymisée)"},
      {id:'C-01', crit:'high', critLabel:'Critique', stage:'Check-in', title:'Sous-effectif à la réception',
        observed:"11 minutes d'attente au check-in, une seule personne en poste en pleine arrivée du week-end.",
        impact:"Première impression dégradée après un long trajet en famille.",
        criticite:"Élevée — point de contact d'ouverture du séjour.",
        ecart:"L'effectif de réception doit s'adapter aux pics d'arrivée.",
        media:"Vidéo · file d'attente réception (00:44)"},
      {id:'C-03', crit:'med', critLabel:'Modérée', stage:'Pré-arrivée', title:'Absence d\'information pratique',
        observed:"Aucun e-mail de préparation au séjour (accès, horaires, services enfants) entre la réservation et l'arrivée.",
        impact:"Sentiment d'abandon avant même d'arriver ; questions reportées sur la réception.",
        criticite:"Modérée — alourdit la charge des équipes à l'arrivée.",
        ecart:"Un e-mail de pré-séjour est attendu dès 4★.",
        media:"Boîte de réception · aucun message (capture)"},
      {id:'C-10', crit:'low', critLabel:'Point fort', stage:'Séjour', title:'Plage et piscine remarquables',
        observed:"Espaces aquatiques superbement entretenus, transats propres, eau impeccable, personnel plage attentif.",
        impact:"Principal motif de satisfaction relevé ; sauve l'évaluation globale.",
        criticite:"— Atout différenciant à mettre davantage en avant.",
        ecart:"Au-dessus du standard de la catégorie.",
        media:"Photo · plage privée (anonymisée)"}
    ],
    gallery: [
      {title:'File d\'attente réception', type:'Vidéo', dur:'00:44', constat:'constat C-01', desc:"Vidéo 00:44 — 11 minutes d'attente, une seule personne en poste."},
      {title:'Salle du restaurant 20:30', type:'Vidéo', dur:'01:12', constat:'constat C-08', desc:"Vidéo 01:12 — service débordé, 25 min avant la prise de commande."},
      {title:'Panneau club fermé', type:'Photo', dur:'', constat:'constat C-12', desc:"Photo anonymisée — club enfants fermé sans information préalable."},
      {title:'Boîte de réception vide', type:'Photo', dur:'', constat:'constat C-03', desc:"Capture — aucun e-mail de préparation entre réservation et arrivée."},
      {title:'Plage privée', type:'Photo', dur:'', constat:'constat C-10', desc:"Photo anonymisée — espaces aquatiques remarquablement entretenus."},
      {title:'Check-out facture', type:'Vidéo', dur:'00:51', constat:'parcours Check-out', desc:"Vidéo 00:51 — facture à rectifier, consommations erronées."}
    ],
    forts: [
      "<b>Cadre et espaces aquatiques remarquables</b> — plage et piscine au-dessus du standard <i>(C-10)</i>.",
      "<b>Propreté constante</b> des chambres et parties communes.",
      "<b>Chambres familiales spacieuses</b> et confortables.",
      "<b>Personnel de plage attentif</b> et disponible."
    ],
    frictions: [
      "<b>Club enfants fermé sans information</b> — promesse non tenue <i>(C-12)</i>.",
      "<b>Service du dîner débordé</b>, récurrent sur les trois soirs <i>(C-08)</i>.",
      "<b>Sous-effectif à la réception</b> en pic d'arrivée <i>(C-01)</i>.",
      "<b>Aucune information de pré-séjour</b> aux familles <i>(C-03)</i>.",
      "<b>Erreurs de facturation</b> au check-out."
    ],
    matrix: [
      {label:'C-08 · Dîner', grav:3, freq:3},
      {label:'C-12 · Club', grav:3, freq:2},
      {label:'C-01 · Réception', grav:3, freq:2},
      {label:'C-03 · Pré-séjour', grav:2, freq:3},
      {label:'Facturation', grav:2, freq:1}
    ],
    recos: {
      qw:[
        {title:"E-mail de pré-séjour automatique", desc:"Message J-3 avec accès, horaires, services enfants et état d'ouverture du club.", links:['C-03','C-12'], effort:1, impact:'fort'},
        {title:"Renfort réception aux pics d'arrivée", desc:"Doubler le poste réception le vendredi/samedi après-midi.", links:['C-01'], effort:1, impact:'fort'},
        {title:"Affichage en temps réel du club enfants", desc:"Panneau et information systématique en cas de fermeture, avec activité de remplacement.", links:['C-12'], effort:1, impact:'fort'}
      ],
      st:[
        {title:"Redimensionnement des équipes de service", desc:"Planning de restauration calé sur l'affluence réelle, renfort sur le service du soir.", links:['C-08'], effort:3, impact:'fort'},
        {title:"Fiabilisation de la facturation", desc:"Contrôle systématique des consommations avant édition de la facture de départ.", links:[], effort:2, impact:'moyen'},
        {title:"Refonte du parcours famille", desc:"Engagement de service sur les animations enfants, du booking au check-out.", links:['C-12','C-03'], effort:3, impact:'fort'}
      ]
    }
  }

};
