/* =====================================================================
   NAIBOZE — Données des rapports clients (DÉMONSTRATION)
   Chaque clé d'accès ouvre le rapport de l'établissement correspondant.
   Pour ajouter un client : copiez un bloc et changez la clé + le contenu.
   ===================================================================== */
const CLIENTS = {

   /* =====================================================================
   NAIBOZE — Bloc rapport « Hôtel Azur Prestige » (réf. NBZ-01A-2026)
   ---------------------------------------------------------------------
   STRUCTURE DÉFINITIVE (celle du rapport) : cadre de mission, résumé
   exécutif (score global + 5 axes), puis 8 phases chronologiques, chacune
   composée d'événements horodatés et close par le ressenti de l'agent.
   Les preuves (vidéo / photo / capture) sont rattachées à l'événement.

   OÙ LE COLLER : dans clients.js, juste APRÈS la ligne « const CLIENTS = { »
   (le bloc se termine par une virgule, rien d'autre à modifier).
   ===================================================================== */

  /* =====================================================================
   NAIBOZE — Données des rapports clients
   Chaque clé d'accès ouvre le rapport de l'établissement correspondant.
   ===================================================================== */
const CLIENTS = {

  "NBZ-01A-2026": {
    ref: "NBZ-01A-2026",
    name: "Hôtel Azur Prestige ★★★★★ — France",
    etoiles: 5,
    localisation: "France",
    type: "Premium",
    score: 78.8,
    verdict: "SOLIDE",

    mission: {
      dateMission: "entre le 01/06/2026 et le 15/06/2026",
      duree: "1 jour — séjour individuel d'une nuit",
      agent: "AP-17",
      dateEmission: "25/06/2026",
      destinataire: "Direction Générale",
      statut: "Mission clôturée",
      reservation: "Directe (site officiel)",
      profil: "Homme, 26 ans, consultant en stratégie. Voyage individuel, à vocation hybride — professionnelle et personnelle. Habitué des établissements haut de gamme. Première visite de l'établissement.",
      objectif: "Évaluer la capacité de l'établissement à identifier, transmettre et exploiter les informations communiquées par le client avant son arrivée, afin de délivrer une expérience personnalisée et conforme aux standards de l'hôtellerie de luxe.",
      perimetre: ["Réservation", "Arrivée sur site", "Réception / check-in", "Chambre", "Conciergerie", "Restaurant gastronomique", "Services annexes", "Départ / check-out"],
      elements: ["10 séquences vidéo", "9 photographies", "Notes d'observation chronologiques", "Analyse du parcours client", "Évaluation des standards de service"],
      scenario: "L'agent effectue une réservation directe sur le site officiel, pour un séjour individuel d'une nuit. Avant l'arrivée, il signale qu'il travaillera à distance et participera à plusieurs visioconférences ; il requiert un environnement calme et une connexion stable. Une demande complémentaire est adressée à la conciergerie : espaces de travail, restaurants adaptés à une activité professionnelle et possibilité d'un départ tardif.",
      mentions: "Les observations de ce rapport reposent sur les éléments recueillis au cours de la mission, selon le protocole opérationnel Naïboze et dans le respect des exigences applicables. Les constats, analyses et recommandations reposent exclusivement sur les faits observés et documentés durant la mission."
    },

    synthTitle: "Des standards tenus, une information inégalement partagée",
    synthLead: "Score global de 78,8 %. Les standards d'exécution sont tenus ; la circulation de l'information entre services constitue le principal levier de progrès.",
    resume: [
      "L'Hôtel Azur Prestige obtient un score global de 78,8 % à l'issue d'un séjour de vingt-quatre heures, évalué en conditions réelles.",
      "La mission portait sur un point précis. Elle mesurait la capacité de l'établissement à identifier, transmettre et exploiter les informations communiquées par le client avant son arrivée. Le scénario reposait sur un client en télétravail, demandeur d'un environnement calme, d'une connexion stable et d'un départ tardif.",
      "Les standards opérationnels sont tenus. L'accueil, l'hébergement et la restauration s'exécutent avec régularité et recueillent les notes les plus élevées.",
      "La faiblesse se situe ailleurs. L'information circule mal d'un service à l'autre. La conciergerie maîtrise le dossier client et anticipe les besoins ; la réception, le restaurant et le petit-déjeuner n'en font, <em>a priori</em>, pas le même usage.",
      "Un fil rouge traverse le séjour. La demande de départ tardif, formulée avant l'arrivée puis répétée à plusieurs reprises, n'obtient aucune confirmation. Elle demeure sans réponse au moment du check-out.",
      "<em>In fine</em>, l'enjeu ne relève pas de la qualité de service, déjà installée, mais de la transmission de l'information entre services. C'est, <em>de facto</em>, le principal levier d'amélioration identifié par la mission."
    ],
    axes: [
      { label: "Premier contact et qualité de l'accueil", value: 76 },
      { label: "Exécution des standards opérationnels", value: 84 },
      { label: "Personnalisation et attention portée au client", value: 67 },
      { label: "Fluidité de la communication interservices", value: 60 },
      { label: "Expérience client perçue et valeur délivrée", value: 87 }
    ],

    phases: [

      { n: 1, titre: "Réservation", jour: "Jour 0", horaire: "10h14 → 12h47",
        events: [
          { time: "Jour 0 · 10h14", blocks: [
            { t: "p", v: "Une réservation est effectuée sur le site officiel de l'établissement." },
            { t: "p", v: "Elle porte sur un séjour individuel d'une nuit, en chambre Deluxe Vue Mer." },
            { t: "p", v: "Dans le champ dédié aux demandes particulières, l'agent renseigne le message suivant :" },
            { t: "quote", v: "Je serai amené à travailler à distance durant mon séjour et participerai à plusieurs visioconférences. Je recherche un environnement calme ainsi qu'une connexion internet stable." },
            { t: "p", v: "La réservation est validée à 10h18." }
          ] },
          { time: "Jour 0 · 10h20", blocks: [
            { t: "p", v: "Un courriel automatique de confirmation est reçu à l'adresse de réservation." }
          ], media: { type: "Capture", ref: "CAPTURE ÉCRAN 01", label: "Confirmation de réservation reçue par courriel." } },
          { time: "Jour 0 · 11h32", blocks: [
            { t: "p", v: "L'agent contacte la conciergerie par courriel." },
            { t: "p", v: "La demande porte sur les espaces de travail disponibles et sur les restaurants adaptés à une activité professionnelle." }
          ], media: { type: "Capture", ref: "CAPTURE ÉCRAN 02", label: "Demande adressée à la conciergerie." } },
          { time: "Jour 0 · 12h47", blocks: [
            { t: "p", v: "Une réponse est reçue le jour même." },
            { t: "p", v: "Les informations demandées sont communiquées et plusieurs solutions sont proposées." },
            { t: "p", v: "Aucune autre interaction n'est observée avant l'arrivée." }
          ], media: { type: "Capture", ref: "CAPTURE ÉCRAN 03", label: "Réponse de la conciergerie." } }
        ],
        constatations: "Les informations recherchées avant l'arrivée ont été obtenues. L'établissement dispose, à ce stade, des éléments relatifs au contexte du séjour et aux besoins exprimés."
      },

      { n: 2, titre: "Arrivée sur site", jour: "Jour 1", horaire: "15h04 → 15h08",
        events: [
          { time: "Jour 1 · 15h04", blocks: [
            { t: "p", v: "L'agent arrive devant l'entrée principale, à bord d'un véhicule de location." },
            { t: "p", v: "La zone de dépose-minute est libre à cet instant." }
          ], media: { type: "Vidéo", ref: "VIDÉO 01", label: "Arrivée de l'agent devant l'établissement." } },
          { time: "Jour 1 · 15h04 → 15h06", blocks: [
            { t: "p", v: "Aucun membre du personnel n'intervient entre 15h04 et 15h06." },
            { t: "p", v: "À 15h06, un employé se présente et propose la prise en charge des bagages." }
          ], media: { type: "Vidéo", ref: "VIDÉO 02", label: "Prise en charge des bagages." } },
          { time: "", blocks: [
            { t: "p", v: "L'agent est accompagné jusqu'au hall principal." },
            { t: "p", v: "Aucun échange relatif aux informations communiquées avant l'arrivée n'est observé." }
          ] },
          { time: "Jour 1 · 15h08", blocks: [
            { t: "p", v: "L'agent rejoint la réception pour son enregistrement." }
          ] }
        ],
        constatations: "L'arrivée s'est déroulée sans attente. Aucune référence aux informations transmises avant le séjour n'a été observée durant cette phase."
      },

      { n: 3, titre: "Enregistrement", jour: "Jour 1", horaire: "15h08 → 15h22",
        events: [
          { time: "Jour 1 · 15h08", blocks: [
            { t: "p", v: "Deux clients sont en cours d'enregistrement à l'arrivée de l'agent." },
            { t: "p", v: "Trois postes d'accueil sont visibles ; deux sont occupés." }
          ], media: { type: "Vidéo", ref: "VIDÉO 03", label: "Vue générale de la réception à l'arrivée de l'agent." } },
          { time: "Jour 1 · 15h10", blocks: [
            { t: "p", v: "Un réceptionniste établit un contact visuel avec l'agent." },
            { t: "p", v: "Il lui adresse un signe indiquant une prise en charge imminente." },
            { t: "p", v: "Aucun échange verbal n'accompagne ce geste." }
          ] },
          { time: "Jour 1 · 15h17", blocks: [
            { t: "p", v: "L'agent est invité au comptoir." },
            { t: "p", v: "La pièce d'identité et une carte bancaire de garantie sont demandées." },
            { t: "p", v: "Le réceptionniste vérifie la réservation, remet une fiche récapitulative et présente les principaux services." },
            { t: "p", v: "Aucune référence n'est faite au contexte professionnel de l'agent ni à son besoin d'un environnement calme." }
          ] },
          { time: "Jour 1 · 15h19", blocks: [
            { t: "p", v: "L'agent interroge la réception :" },
            { t: "quote", v: "Je voulais savoir si ma demande concernant le télétravail pendant le séjour avait bien été prise en compte ?" },
            { t: "p", v: "Le réceptionniste consulte son écran, puis répond :" },
            { t: "quote", v: "Je vois effectivement une note dans votre dossier. Nous vous avons attribué une chambre dans une zone calme de l'établissement." },
            { t: "p", v: "L'information figure donc au dossier de réservation, consultable au moment de l'échange." }
          ] },
          { time: "Jour 1 · 15h21", blocks: [
            { t: "p", v: "Le réceptionniste remet les cartes d'accès." },
            { t: "p", v: "Il précise les horaires du petit-déjeuner et du restaurant gastronomique." }
          ] },
          { time: "Jour 1 · 15h22", blocks: [
            { t: "p", v: "L'enregistrement s'achève." }
          ], media: { type: "Vidéo", ref: "VIDÉO 04", label: "Échange avec le réceptionniste." } }
        ],
        constatations: "L'échange s'est déroulé sans incident. Les informations transmises avant l'arrivée n'ont été évoquées qu'à la suite d'une question directe de l'agent."
      },

      { n: 4, titre: "Accès à la chambre et inspection initiale", jour: "Jour 1", horaire: "15h24 → 15h52",
        events: [
          { time: "Jour 1 · 15h24", blocks: [
            { t: "p", v: "L'agent rejoint l'étage par l'ascenseur principal." },
            { t: "p", v: "Les espaces communs traversés sont propres et correctement entretenus." },
            { t: "p", v: "Aucun défaut n'est relevé sur le parcours." }
          ] },
          { time: "Jour 1 · 15h26", blocks: [
            { t: "p", v: "L'agent accède à la chambre." },
            { t: "p", v: "Une inspection visuelle complète est menée <em>in situ</em>, conformément au protocole Naïboze." }
          ], media: { type: "Photo", ref: "PHOTO 01", label: "Vue générale de la chambre." } },
          { time: "", blocks: [
            { t: "p", v: "L'espace de travail fait l'objet d'une vérification particulière, en lien avec le scénario." },
            { t: "p", v: "Le bureau est installé près d'une prise électrique et bénéficie d'un éclairage naturel." }
          ], media: { type: "Photo", ref: "PHOTO 02", label: "Espace bureau." } },
          { time: "Jour 1 · 15h34", blocks: [
            { t: "p", v: "Un test de connexion est réalisé." },
            { t: "p", v: "Le téléchargement d'un fichier de 2 Go mesure la stabilité de la liaison." },
            { t: "stat", v: [["Téléchargement", "94,7 Mbps"], ["Téléversement", "93,1 Mbps"], ["Ping", "12 ms"], ["Gigue", "2 ms"], ["Durée du transfert", "3 min 28 s"], ["Débit moyen", "9,83 Mo/s"]] }
          ], media: { type: "Capture", ref: "CAPTURE 04", label: "Résultat du test réseau." } },
          { time: "Jour 1 · 15h41", blocks: [
            { t: "p", v: "Une visioconférence test de dix minutes est menée." },
            { t: "p", v: "Aucune coupure n'est observée." },
            { t: "p", v: "L'inspection de la chambre se poursuit." },
            { t: "p", v: "Une légère accumulation de poussière est relevée sur une étagère décorative, près du minibar." }
          ], media: { type: "Photo", ref: "PHOTO 03", label: "Étagère décorative." } },
          { time: "", blocks: [
            { t: "p", v: "Une trace est également constatée sur une paroi de douche." }
          ], media: { type: "Photo", ref: "PHOTO 04", label: "Paroi de douche." } },
          { time: "Jour 1 · 15h52", blocks: [
            { t: "p", v: "L'agent consulte le dossier de bienvenue." },
            { t: "p", v: "Aucune documentation relative aux espaces de travail n'y figure, en dépit de la demande formulée avant le séjour." }
          ] }
        ],
        constatations: "La chambre correspond à l'usage annoncé lors de la réservation. Les équipements et la connexion internet répondent aux besoins exprimés. Aucune documentation relative aux espaces de travail n'était mise à disposition."
      },

      { n: 5, titre: "Test de la coordination entre services", jour: "Jour 1", horaire: "17h08 → 17h36",
        events: [
          { time: "Jour 1 · 17h08", blocks: [
            { t: "p", v: "L'agent contacte la réception depuis sa chambre." },
            { t: "p", v: "La démarche vise à évaluer la circulation de l'information entre services." },
            { t: "p", v: "Elle porte sur une demande de départ tardif." },
            { t: "p", v: "La réception enregistre la demande et annonce un retour, après vérification des disponibilités du lendemain." },
            { t: "synth", v: "La réception confirme avoir identifié la demande. Une vérification interne est annoncée avant toute réponse définitive." }
          ] },
          { time: "Jour 1 · 17h36", blocks: [
            { t: "p", v: "Aucun rappel n'est intervenu." },
            { t: "p", v: "L'agent se rend à la conciergerie." },
            { t: "p", v: "L'échange porte sur les espaces de travail, l'organisation du lendemain matin et la demande de départ tardif." },
            { t: "p", v: "Le concierge évoque spontanément plusieurs éléments communiqués avant l'arrivée." },
            { t: "synth", v: "La conciergerie démontre une connaissance du dossier. Les besoins liés à l'activité professionnelle sont identifiés et plusieurs solutions adaptées sont proposées. La demande de départ tardif figure au dossier et fait l'objet d'un suivi." },
            { t: "flag", v: "Cette interaction constitue le premier écart de niveau d'information observé entre services." }
          ], media: { type: "Vidéo", ref: "VIDÉO 05", label: "Échange avec la conciergerie." } }
        ],
        constatations: "La conciergerie évoque spontanément plusieurs éléments du dossier client. Les interactions précédentes n'en faisaient pas état."
      },

      { n: 6, titre: "Restauration gastronomique", jour: "Jour 1", horaire: "20h02 → 22h01",
        events: [
          { time: "Jour 1 · 20h02", blocks: [
            { t: "p", v: "L'agent se présente au restaurant gastronomique, conformément à la réservation prise au check-in." },
            { t: "p", v: "Une hôtesse l'accueille dès son arrivée." },
            { t: "p", v: "Après vérification du numéro de chambre, il est installé à une table située dans une zone calme." },
            { t: "p", v: "Le personnel présente la carte et les suggestions du chef." }
          ] },
          { time: "Jour 1 · 20h09", blocks: [
            { t: "p", v: "Le serveur prend la commande." },
            { t: "p", v: "Durant les premières minutes, aucune référence n'est faite au contexte professionnel ni aux échanges tenus avec la conciergerie." }
          ], media: { type: "Vidéo", ref: "VIDÉO 06", label: "Arrivée au restaurant et prise de commande." } },
          { time: "Jour 1 · 20h24", blocks: [
            { t: "p", v: "L'entrée est servie par le serveur référent." },
            { t: "p", v: "L'assiette est présentée avant d'être déposée." },
            { t: "p", v: "Une description des principaux produits accompagne le service." },
            { t: "p", v: "Le serveur précise l'origine de certains produits et les éléments préparés le jour même." },
            { t: "p", v: "L'échange demeure fluide ; aucun support n'est utilisé." }
          ], media: { type: "Photo", ref: "PHOTO 05", label: "Entrée servie à table." } },
          { time: "Jour 1 · 20h28", blocks: [
            { t: "p", v: "Un membre du personnel effectue un passage visuel dans la salle." },
            { t: "p", v: "Aucun échange direct n'a lieu à ce moment." }
          ] },
          { time: "Jour 1 · 20h34", blocks: [
            { t: "p", v: "Le serveur recueille les premières impressions sur l'entrée." },
            { t: "synth", v: "L'agent indique être satisfait du plat. Le personnel le remercie et confirme la préparation du plat suivant." },
            { t: "p", v: "L'assiette est débarrassée à 20h39." }
          ] },
          { time: "Jour 1 · 20h39", blocks: [
            { t: "p", v: "L'entrée est débarrassée." }
          ], media: { type: "Vidéo", ref: "VIDÉO 11", label: "Débarrassage de l'entrée." } },
          { time: "Jour 1 · 20h39 → 20h56", blocks: [
            { t: "p", v: "Plusieurs passages du personnel sont observés." },
            { t: "p", v: "Les niveaux d'eau sont vérifiés régulièrement." },
            { t: "p", v: "Les tables font l'objet d'une surveillance discrète." }
          ] },
          { time: "Jour 1 · 20h57", blocks: [
            { t: "p", v: "Le plat principal est présenté." },
            { t: "p", v: "Le serveur détaille la composition, les cuissons et les accompagnements." }
          ], media: { type: "Photo", ref: "PHOTO 07", label: "Plat principal." } },
          { time: "Jour 1 · 21h10", blocks: [
            { t: "p", v: "Le personnel effectue plusieurs passages de contrôle, sans rompre le rythme du repas." },
            { t: "p", v: "Un nouveau passage vérifie la satisfaction sur le plat principal." },
            { t: "synth", v: "L'échange porte sur la cuisson, l'équilibre des saveurs et le déroulement du repas. Aucun problème n'est signalé." },
            { t: "p", v: "Le plat principal est débarrassé à 21h22." }
          ] },
          { time: "Jour 1 · 21h22", blocks: [
            { t: "p", v: "Le plat principal est débarrassé." }
          ], media: { type: "Vidéo", ref: "VIDÉO 13", label: "Débarrassage du plat principal." } },
          { time: "Jour 1 · 21h26", blocks: [
            { t: "p", v: "Le serveur propose la carte des desserts et des boissons chaudes." },
            { t: "p", v: "L'agent décline le dessert et commande un café." },
            { t: "synth", v: "L'agent indique être satisfait du repas et choisit de le conclure par une boisson chaude." },
            { t: "p", v: "Le café est servi à 21h35." }
          ] },
          { time: "Jour 1 · 21h36", blocks: [
            { t: "p", v: "Plusieurs mignardises accompagnent le café." }
          ], media: { type: "Photo", ref: "PHOTO 09", label: "Mignardises servies avec le café." } },
          { time: "Jour 1 · 21h41", blocks: [
            { t: "p", v: "Un responsable de salle vient à la table." },
            { t: "synth", v: "L'échange porte sur le séjour, la restauration et les infrastructures. Les espaces de travail et de rendez-vous professionnels sont évoqués. Plusieurs recommandations sont formulées pour la matinée suivante." },
            { t: "p", v: "Le responsable remercie l'agent et lui souhaite une bonne fin de séjour." }
          ], media: { type: "Vidéo", ref: "VIDÉO 14", label: "Passage du responsable de salle." } },
          { time: "Jour 1 · 21h52", blocks: [
            { t: "p", v: "Le café et les mignardises sont débarrassés." },
            { t: "p", v: "L'addition est imputée à la chambre, conformément à la procédure annoncée au check-in." }
          ] },
          { time: "Jour 1 · 21h56", blocks: [
            { t: "p", v: "L'agent quitte le restaurant et rejoint les espaces communs." },
            { t: "p", v: "Le trajet s'effectue sans interaction particulière." },
            { t: "p", v: "Les espaces traversés sont propres et entretenus." },
            { t: "p", v: "La fréquentation est faible à cette heure." }
          ], media: { type: "Vidéo", ref: "VIDÉO 15", label: "Sortie du restaurant et retour vers les ascenseurs." } },
          { time: "Jour 1 · 22h01", blocks: [
            { t: "p", v: "L'agent rejoint sa chambre." },
            { t: "flag", v: "Aucune communication n'est reçue au cours de la soirée au sujet de la demande de départ tardif, formulée avant l'arrivée puis répétée durant le séjour." }
          ] }
        ],
        constatations: "Les informations relatives au séjour ont été communiquées aux différents services au cours de la journée. La demande de départ tardif demeure sans retour à ce stade."
      },

      { n: 7, titre: "Petit déjeuner", jour: "Jour 2", horaire: "07h24 → 08h07",
        events: [
          { time: "Jour 2 · 07h24", blocks: [
            { t: "p", v: "L'agent se présente à l'espace petit-déjeuner, au rez-de-chaussée." },
            { t: "p", v: "Plusieurs clients sont déjà installés." },
            { t: "p", v: "Après communication du numéro de chambre, une table lui est attribuée." }
          ], media: { type: "Vidéo", ref: "VIDÉO 16", label: "Arrivée et prise en charge à l'espace petit-déjeuner." } },
          { time: "", blocks: [
            { t: "p", v: "L'agent observe l'espace de restauration." },
            { t: "p", v: "Le buffet est correctement approvisionné et ordonné." },
            { t: "p", v: "L'offre comprend viennoiseries, pains, fruits frais, produits laitiers, céréales, charcuteries, fromages et préparations chaudes." },
            { t: "p", v: "Le personnel circule régulièrement entre la salle et les postes de service." },
            { t: "p", v: "Les tables libérées sont rapidement remises en état." },
            { t: "p", v: "Les produits sont réapprovisionnés au fil des besoins." },
            { t: "p", v: "Aucune rupture d'approvisionnement n'est observée durant la présence de l'agent." }
          ] },
          { time: "Jour 2 · 07h55", blocks: [
            { t: "p", v: "L'agent interroge un membre du personnel sur les espaces de travail disponibles pour la matinée." },
            { t: "synth", v: "Le collaborateur indique ne pas disposer de l'information et oriente l'agent vers la réception." },
            { t: "p", v: "C'est la seule demande spécifique formulée durant le petit-déjeuner." },
            { t: "p", v: "Le repas se poursuit sans autre échange notable." }
          ] },
          { time: "Jour 2 · 08h07", blocks: [
            { t: "p", v: "L'agent quitte l'espace petit-déjeuner." }
          ] }
        ],
        constatations: "Le service s'est déroulé sans rupture d'approvisionnement. Les informations obtenues sur les espaces de travail diffèrent de celles communiquées, <em>a posteriori</em>, par d'autres services."
      },

      { n: 8, titre: "Check-out et départ", jour: "Jour 2", horaire: "10h52 → 11h12",
        events: [
          { time: "Jour 2 · 10h52", blocks: [
            { t: "p", v: "L'agent se présente à la réception pour le départ." },
            { t: "p", v: "Deux collaborateurs sont présents au comptoir." },
            { t: "p", v: "La prise en charge est rapide." },
            { t: "p", v: "Le réceptionniste consulte le dossier et prépare la facture." },
            { t: "p", v: "Les consommations imputées à la chambre sont vérifiées." },
            { t: "p", v: "L'agent sollicite un dernier retour sur la demande de départ tardif, formulée avant l'arrivée et répétée durant le séjour." },
            { t: "synth", v: "Après consultation du dossier, aucune validation définitive de la demande n'apparaît. Une vérification complémentaire est menée, sans qu'une réponse précise puisse être apportée." },
            { t: "p", v: "L'échange se poursuit sur les modalités de règlement et le déroulement du séjour." },
            { t: "p", v: "Le réceptionniste remercie l'agent et l'invite à revenir." },
            { t: "p", v: "Le départ est finalisé à 11h06." }
          ], media: { type: "Vidéo", ref: "VIDÉO 17", label: "Arrivée à la réception pour le check-out." } },
          { time: "Jour 2 · 11h06", blocks: [
            { t: "p", v: "Le check-out est finalisé." }
          ], media: { type: "Vidéo", ref: "VIDÉO 18", label: "Fin du check-out." } },
          { time: "Jour 2 · 11h12", blocks: [
            { t: "p", v: "L'agent quitte définitivement l'établissement à 11h12." }
          ], media: { type: "Vidéo", ref: "VIDÉO 19", label: "Sortie de l'établissement." } }
        ],
        constatations: "Les formalités de départ ont été réalisées sans difficulté. La demande de départ tardif, formulée avant l'arrivée, n'a reçu aucune réponse définitive avant la fin du séjour."
      }

    ]
  },

  /* ---------- CLIENT 1 — Hôtel alpin 5★ — score solide ---------- */
  "NBA-7F4A-9C21-D0E5": {
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

  /* ---------- CLIENT 1 — Hôtel alpin 5★ — score solide ---------- */
  "NBA-7F4A-9C21-D0E5": {
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
