/* =====================================================================
   NAMELESS ADVISORY — Données des portails clients
   Chaque clé d'accès (confidentielle) ouvre le portail correspondant.
   ===================================================================== */
const CLIENTS = {

  "AZP-EQQ7-3J83-PDJN": {
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

  "CGD-H7J2-H8S4-RK97": {
    ref: "INV-CG-2026",
    kind: "invite",
    name: "Nameless Advisory — Accès privé (Cédric Guimard)",
    invite: {
      to: "Cédric Guimard",
      eyebrow: "Accès privé · Invitation confidentielle",
      hero: "Bienvenue, Cédric.",
      heroSub: "Cette page vous est ouverte à titre personnel, en amont de notre échange. Elle réunit l'essentiel de Nameless — qui nous sommes, comment nous travaillons, et le rôle que vous pourriez y tenir.",
      figures: [
        { k: "8 – 12 %", lbl: "de commission d'apporteur d'affaires, selon le contrat" },
        { k: "3", lbl: "niveaux de mission à présenter — Standard, Premium, Exclusive" },
        { k: "Agent référent", lbl: "le rôle vers lequel évoluer, en France et à l'international" }
      ],
      bref: {
        lead: "Nameless conduit des audits d'expérience pour l'hôtellerie haut de gamme et de luxe.",
        paras: [
          "Là où les enquêtes de satisfaction arrivent après le départ du client, et où les audits internes connaissent l'heure de leur venue, nous observons l'expérience telle qu'elle se vit réellement — sans prévenir, sans fausser le geste.",
          "De l'écart entre le standard affiché et l'instant vécu naît toute la valeur de nos rapports. Chaque mission se conclut par un livrable confidentiel remis à la seule direction : des faits, des preuves horodatées, des recommandations. Rien qui juge — de la matière pour décider."
        ],
        valeurs: [
          { t: "Discrétion", d: "Nos missions se déroulent en toute confidentialité, sans jamais altérer l'expérience observée." },
          { t: "Expertise", d: "Une méthode rigoureuse, des observations vérifiables, des recommandations directement exploitables." },
          { t: "Confidentialité", d: "Informations, preuves et livrables restent strictement protégés et réservés au client." }
        ]
      },
      methode: {
        lead: "Pour présenter Nameless avec justesse, encore faut-il en connaître la méthode. La voici, de la préparation à la restitution.",
        steps: [
          { t: "Cadrage", d: "Nous comprenons l'établissement, ses standards et ses angles morts, puis écrivons un scénario d'observation sur mesure." },
          { t: "Observation en conditions réelles", d: "Un agent séjourne comme un client. Il vit le parcours de la réservation au départ et le documente avec précision." },
          { t: "Preuve", d: "Selon le cadre légal et l'accord de l'établissement, certains moments sont captés en photo ou en vidéo, systématiquement anonymisés." },
          { t: "Analyse factuelle", d: "Chaque observation est confrontée au standard attendu. Nous ne rapportons que ce qui a été constaté, jamais une opinion." },
          { t: "Restitution", d: "La direction reçoit un rapport structuré — constats, preuves, recommandations priorisées — pensé pour l'action." }
        ],
        bande: "Notre principe est simple : <b>nous ne rapportons que des faits</b>. Pas de jugement, pas d'interprétation — l'observation la plus fidèle possible de l'expérience réellement vécue."
      },
      role: {
        lead: "Nous vous voyons d'abord comme un apporteur d'affaires — celui qui ouvre les portes que nous ne pourrions pas pousser seuls.",
        paras: [
          "Votre mission tient en une ligne : identifier les établissements susceptibles de devenir clients, présenter Nameless à leurs décideurs, provoquer la rencontre et accompagner l'échange jusqu'à la signature.",
          "Vous n'exécutez pas les audits vous-même. Vous faites ce que vous savez faire mieux que personne : créer le lien, inspirer la confiance, réunir les bonnes personnes autour de la table."
        ],
        atouts: [
          { t: "Le carnet d'adresses", d: "Vous évoluez au cœur de l'hôtellerie de luxe, au contact direct des maisons et de ceux qui les dirigent." },
          { t: "La crédibilité", d: "Reconnu dans le milieu, votre mot ouvre des portes qu'une approche à froid n'atteindra jamais." },
          { t: "L'image & l'audience", d: "Votre visibilité et votre maîtrise des codes du luxe donnent du poids et de l'élégance à chaque introduction." }
        ]
      },
      evolution: {
        lead: "Ce premier rôle n'est qu'une porte d'entrée. Si la collaboration nous convainc l'un et l'autre, une place plus large vous attend.",
        paras: [
          "Un agent référent n'apporte pas seulement des contrats : il devient un partenaire de confiance qui représente Nameless sur le terrain. Il prend en charge les missions les plus exigeantes, accompagne la montée en puissance des nouveaux agents et contribue à ouvrir de nouveaux marchés — en France comme à l'international.",
          "C'est un rôle de référence, réservé à ceux qui ont fait leurs preuves et avec qui la confiance est pleinement installée."
        ],
        avantages: [
          { t: "Des revenus plus réguliers", d: "Au-delà de la commission ponctuelle, un rôle installé dans la durée et une relation qui se construit dans le temps." },
          { t: "Une place centrale", d: "Vous devenez un interlocuteur clé, reconnu, sur qui Nameless s'appuie pour ses missions les plus sensibles." },
          { t: "L'international", d: "Nous ouvrons l'Europe puis d'autres marchés : un agent référent y prend naturellement part, là où les opportunités sont les plus fortes." },
          { t: "La transmission", d: "Former et encadrer de nouveaux agents, imprimer votre exigence à la méthode, faire grandir le réseau avec nous." }
        ],
        bande: "En clair : commencer en ouvrant des portes, puis — si l'envie et la confiance sont au rendez-vous — grandir avec nous jusqu'à devenir l'un de nos visages sur le terrain, ici et ailleurs."
      },
      remun: {
        lead: "Vous intervenez comme apporteur d'affaires : votre rémunération est une commission sur les contrats que vous nous permettez de signer.",
        paras: [
          "Nos missions se déclinent en trois niveaux, dont la valeur donne la mesure de chaque contrat : Standard à 6 500 € HT, Premium à 14 800 € HT et Exclusive à 24 000 € HT."
        ],
        commission: "Pour chaque contrat signé grâce à votre intervention, vous percevez une commission comprise <b>entre 8 et 12 % de sa valeur</b>, selon le contrat conclu.",
        notes: [
          "La commission devient exigible une fois le contrat signé et réglé à Nameless.",
          "Vous intervenez en toute indépendance : pas d'exclusivité, pas d'objectif imposé. Vous ouvrez les portes que vous jugez pertinentes, à votre rythme."
        ]
      },
      etape: {
        titre: "La suite se passe de vive voix.",
        paras: [
          "Nous serions ravis de vous présenter des missions concrètes et de répondre à toutes vos questions — le rôle, la commission, la manière dont nous pourrions démarrer ensemble.",
          "Prenez le temps de parcourir cette page. Elle n'est que la porte d'entrée d'une conversation que nous avons hâte d'avoir."
        ],
        contact: "contact@namelessadvisory.com"
      }
    }
  },

  "LHP-EZZP-867D-UC22": {
    ref: "INV-LH-2026",
    kind: "invite",
    name: "Nameless Advisory — Accès privé (Luxury Hospitality)",
    invite: {
      to: "Luxury Hospitality",
      tagline: "Renseignement opérationnel — Hôtellerie de luxe",
      nav: [
        ["01","bienvenue","Bienvenue"],
        ["02","pourquoi","Pourquoi vous"],
        ["03","nameless","Nameless"],
        ["04","methode","Notre méthode"],
        ["05","rencontre","Le point de rencontre"],
        ["06","collaboration","La collaboration"],
        ["07","etape","Prochaine étape"]
      ],
      sections: [

        { id: "bienvenue", hero: true,
          eyebrow: "Accès privé · Invitation confidentielle",
          h1: "Bienvenue, Luxury Hospitality.",
          body: [
            { t: "prose", v: [
              "Cet espace a été ouvert spécifiquement à votre attention.",
              "Il présente Nameless, notre approche et surtout la raison pour laquelle Luxury Hospitality a retenu notre attention.",
              "Nous ne cherchons pas à multiplier les partenariats.",
              "Nous cherchons à identifier les personnes et structures suffisamment proches de la décision pour reconnaître les situations dans lesquelles notre méthode peut avoir une réelle valeur.",
              "Votre position dans l'écosystème de l'hospitality en fait partie."
            ] },
            { t: "cards", v: [
              { t: "Hospitality", d: "Une connaissance directe des environnements dans lesquels nous intervenons." },
              { t: "Investissement & projets", d: "Une proximité avec des situations où la qualité de l'information peut précéder une décision importante." },
              { t: "Décideurs", d: "Un environnement composé de propriétaires, investisseurs, dirigeants et porteurs de projets." }
            ] }
          ]
        },

        { id: "pourquoi",
          eyebrow: "02 — Pourquoi Luxury Hospitality",
          titre: "Ce n'est pas seulement votre réseau qui nous intéresse.",
          lead: "Luxury Hospitality évolue à la croisée de plusieurs environnements particulièrement pertinents pour Nameless : hospitality, immobilier, investissement, développement de projets et univers du luxe.",
          body: [
            { t: "prose", v: [
              "Cette position vous expose à des situations dans lesquelles une information indépendante issue du terrain peut prendre une valeur particulière.",
              "Un établissement peut être observé sous de nombreux angles : sa performance, son positionnement, son exploitation, ses actifs ou encore son potentiel.",
              "Nameless ajoute une lecture différente : celle de ce qui se passe réellement lorsque l'expérience est vécue dans des conditions ordinaires, sans modifier l'environnement observé.",
              "Ce n'est donc pas simplement votre capacité à nous présenter des établissements qui motive notre approche.",
              "C'est votre capacité à reconnaître quand cette information peut devenir pertinente — et pour qui."
            ] },
            { t: "cards", v: [
              { t: "Une position transversale", d: "Hospitality, immobilier, investissement et projets spécifiques créent une lecture qui dépasse le seul fonctionnement d'un établissement." },
              { t: "Une proximité avec la décision", d: "Certaines informations prennent toute leur valeur lorsqu'elles arrivent directement auprès de ceux qui peuvent agir." },
              { t: "Les bonnes situations", d: "Notre méthode n'est pas nécessaire partout. Sa valeur repose aussi sur la capacité à reconnaître les contextes où elle peut réellement faire la différence." }
            ] },
            { t: "band", v: "Vous connaissez certaines portes. Nous savons ce que nous cherchons derrière." }
          ]
        },

        { id: "nameless",
          eyebrow: "03 — Nameless",
          titre: "Voir ce que l'établissement ne peut pas toujours voir.",
          lead: "Nameless est une structure française indépendante de renseignement opérationnel appliqué à l'hôtellerie de luxe.",
          body: [
            { t: "prose", v: [
              "Nous intervenons en conditions réelles afin de donner aux décideurs accès à une lecture de leur établissement que les dispositifs traditionnels produisent difficilement.",
              "Audits, standards internes, questionnaires, données opérationnelles et avis clients produisent déjà une quantité considérable d'informations.",
              "Nous ne cherchons pas à les remplacer.",
              "Nous intervenons sur une autre couche : l'expérience telle qu'elle se déroule réellement lorsque personne ne sait qu'elle est observée.",
              "Notre travail consiste ensuite à transformer cette observation en éléments structurés, factuels et exploitables par le décideur."
            ] },
            { t: "cards", v: [
              { t: "Indépendance", d: "Une observation extérieure, réalisée sans lien avec les équipes opérationnelles observées." },
              { t: "Réalité terrain", d: "L'expérience est vécue dans son déroulement naturel, sans créer artificiellement les conditions de l'évaluation." },
              { t: "Confidentialité", d: "La mission, les informations recueillies et leur restitution restent strictement encadrées." }
            ] },
            { t: "band", v: "Nous ne cherchons pas à savoir uniquement ce qui devrait se passer. Nous observons ce qui se passe réellement." }
          ]
        },

        { id: "methode",
          eyebrow: "04 — La méthode",
          titre: "Du signal visible à ce qu'il révèle.",
          lead: "Une observation isolée a peu de valeur si elle est sortie de son contexte.",
          body: [
            { t: "prose", v: [ "Notre travail consiste à comprendre ce qui mérite réellement l'attention." ] },
            { t: "steps", v: [
              { t: "Cadrage", d: "Nous étudions l'établissement, son positionnement, ses standards et le contexte de la mission afin de construire un scénario d'observation adapté." },
              { t: "Immersion", d: "Un agent vit le parcours comme un client ordinaire, de la réservation au départ, sans modifier le fonctionnement naturel de l'établissement." },
              { t: "Observation", d: "Les éléments significatifs du parcours sont relevés et, lorsque le cadre de la mission le permet, documentés." },
              { t: "Analyse", d: "Les observations sont replacées dans leur contexte afin de distinguer l'incident isolé du signal réellement pertinent." },
              { t: "Restitution", d: "Le décideur reçoit une lecture structurée des éléments observés, accompagnée des preuves et informations nécessaires à leur compréhension." }
            ] },
            { t: "schema", v: [ "Signal", "Récurrence", "Origine", "Impact" ] },
            { t: "band", v: "Ce n'est pas seulement ce qui s'est passé qui nous intéresse. C'est ce que cela permet de comprendre." }
          ]
        },

        { id: "rencontre",
          eyebrow: "05 — Luxury Hospitality × Nameless",
          titre: "L'information avant la décision.",
          lead: "Certaines situations rendent une lecture indépendante du terrain particulièrement pertinente.",
          body: [
            { t: "list", v: [
              "Acquisition ou investissement.",
              "Repositionnement d'un établissement.",
              "Évolution d'une expérience.",
              "Développement d'un projet.",
              "Interrogation sur la capacité réelle d'un actif à tenir son positionnement.",
              "Problématique opérationnelle difficile à objectiver depuis l'intérieur."
            ] },
            { t: "prose", v: [
              "Les contextes peuvent être très différents. La question reste souvent la même : dispose-t-on d'une lecture suffisamment fidèle de ce qui se passe réellement sur le terrain ?",
              "C'est ici que nos deux environnements peuvent se rencontrer."
            ] },
            { t: "cards", v: [
              { t: "Avant une décision", d: "Apporter une lecture supplémentaire lorsqu'un dirigeant, propriétaire ou investisseur doit comprendre une situation avant d'arbitrer." },
              { t: "Pendant une transformation", d: "Observer ce que produit réellement une évolution de positionnement, de service ou d'expérience." },
              { t: "Face à un doute", d: "Objectiver une situation lorsque les informations disponibles ne permettent plus d'obtenir une lecture suffisamment claire du terrain." }
            ] },
            { t: "band", v: "Avant de décider, il faut parfois regarder autrement." }
          ]
        },

        { id: "collaboration",
          eyebrow: "06 — Le principe",
          titre: "Chacun reste là où sa valeur est la plus forte.",
          lead: "Nous ne cherchons pas à faire de Luxury Hospitality une force commerciale Nameless.",
          body: [
            { t: "prose", v: [ "La relation que nous envisageons est volontairement plus simple." ] },
            { t: "steps", v: [
              { t: "Vous identifiez", d: "Une situation, un établissement ou un décideur pour lequel une lecture Nameless pourrait avoir une valeur particulière." },
              { t: "Vous ouvrez la conversation", d: "Lorsque vous estimez le contexte pertinent, vous créez la mise en relation." },
              { t: "Nous prenons le relais", d: "Nameless assume ensuite la qualification, la présentation de son approche, la contractualisation et l'intégralité de l'exécution opérationnelle." }
            ] },
            { t: "prose", v: [
              "Vous n'avez ni méthodologie à exécuter, ni mission à superviser.",
              "Votre rôle est celui qui justifie précisément notre prise de contact : reconnaître la bonne situation et permettre la bonne rencontre."
            ] },
            { t: "band", v: "Vous créez l'opportunité. Nous apportons la méthode et l'exécution." }
          ]
        },

        { id: "etape",
          eyebrow: "07 — Prochaine étape",
          titre: "Commençons par une situation réelle.",
          body: [
            { t: "cta", v: {
              title: "Une première porte suffit.",
              paras: [
                "Nous ne pensons pas qu'une collaboration de cette nature nécessite d'être sur-construite avant même d'avoir commencé.",
                "Une première situation pertinente nous permettra d'en mesurer naturellement l'intérêt.",
                "Un établissement. Un propriétaire. Un investisseur. Un dirigeant confronté à une situation pour laquelle une lecture indépendante du terrain pourrait apporter quelque chose que les informations disponibles ne montrent pas encore.",
                "Vous créez la rencontre. Nameless prend le relais.",
                "La qualité de cette première opération déterminera naturellement ce qu'il conviendra de construire ensuite."
              ],
              ctaLabel: "Échanger avec Nameless",
              ctaNote: "Échange confidentiel — environ 20 minutes.",
              email: "contact@namelessadvisory.com"
            } }
          ]
        }

      ]
    }
  },

  "HDC-5UX5-DNWZ-YW8X": {
    ref: "INV-HDC-2026",
    kind: "invite",
    name: "Nameless Advisory — Accès privé (HDC Hospitality)",
    invite: {
      to: "David Esseryk — HDC Hospitality",
      sidebarClient: "HDC Hospitality",
      sidebarDark: true,
      tagline: "Renseignement opérationnel — Hôtellerie de luxe",
      theme: "editorial",
      footRef: "Document strictement confidentiel · Destiné à David Esseryk et HDC Hospitality · Ne pas diffuser",
      nav: [
        ["01","invitation","Invitation"],
        ["02","nameless","Nameless"],
        ["03","methode","La méthode"],
        ["04","application","Application"],
        ["05","collaboration","Collaboration"]
      ],
      sections: [

        { id: "invitation", hero: true,
          eyebrow: "01 — Invitation",
          h1: "David Esseryk",
          heroSub: "Cet espace a été ouvert à HDC Hospitality parce que votre proximité avec les décideurs hôteliers vous place exactement là où notre intervention peut prendre de la valeur.",
          heroImage: "data:image/jpeg;base64,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",
          heroLogo: "",
          body: [
            { t: "iconcards", v: [
              { icon: "bank", t: "Investissement", d: "Avant une décision sur un actif." },
              { icon: "refresh", t: "Transformation", d: "Lorsque le positionnement doit devenir une réalité opérationnelle." },
              { icon: "dome", t: "Exploitation", d: "Lorsque le dirigeant doit savoir ce que vit réellement son client." }
            ] },
            { t: "quoteband", v: { mark: "quote", lines: [
              "Vous connaissez les décisions qui se préparent.",
              "Nous révélons ce qui se passe réellement sur le terrain."
            ] } }
          ]
        },

        { id: "nameless",
          eyebrow: "02 — Nameless",
          titre: "Voir son établissement depuis la place de son propre client.",
          body: [
            { t: "prose", v: [
              "Nameless est une structure française indépendante de renseignement opérationnel appliqué à l'hôtellerie de luxe.",
              "Nos agents sont formés et sensibilisés aux techniques d'observation par une équipe issue du renseignement privé, cumulant <b>plus de 20 ans d'expérience</b>."
            ] },
            { t: "photocards", v: [
              { img: "data:image/jpeg;base64,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", icon: "people", t: "Agents formés", d: "Observation, discrétion, collecte et restitution de l'information selon un protocole structuré." },
              { img: "data:image/jpeg;base64,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", icon: "eye", t: "Immersion réelle", d: "L'établissement fonctionne normalement. Les équipes ne modifient pas leur comportement." },
              { img: "data:image/jpeg;base64,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", icon: "video", t: "Captation vidéo", d: "Lorsque le cadre de la mission le permet, un équipement dédié documente les moments significatifs du parcours." }
            ] },
            { t: "quoteband", v: { mark: "play", big: true, lines: [
              "Le dirigeant ne reçoit pas seulement un rapport.",
              "Il <b>voit</b> ce que son client a vu."
            ] } }
          ]
        },

        { id: "methode",
          eyebrow: "03 — La méthode",
          titre: "Une méthode construite pour révéler ce qui échappe aux dispositifs classiques.",
          body: [
            { t: "flownum", v: [
              { n: "01", label: "Cadrage" },
              { n: "02", label: "Immersion" },
              { n: "03", label: "Observation" },
              { n: "04", label: "Analyse" },
              { n: "05", label: "Restitution" }
            ] },
            { t: "prose", v: [
              "Chaque mission est préparée selon l'établissement, son positionnement et les informations recherchées.",
              "Les observations sont contextualisées pour distinguer un incident isolé d'un signal réellement pertinent."
            ] },
            { t: "blackbox", v: {
              icon: "docplay",
              eyebrow: "Rapport + restitution vidéo",
              text: "Les séquences significatives permettent au dirigeant de confronter directement les process définis à leur exécution réelle sur le terrain."
            } }
          ]
        },

        { id: "application",
          eyebrow: "04 — Application",
          titre: "Une information qui peut changer la lecture d'un actif.",
          body: [
            { t: "linerows", v: [
              { icon: "bank", t: "Acquisition / investissement", d: "Une lecture terrain complémentaire avant une décision." },
              { icon: "refresh", t: "Repositionnement", d: "Observer si le positionnement défini existe réellement dans l'expérience délivrée." },
              { icon: "people", t: "Prise en gestion", d: "Disposer d'une photographie indépendante de l'expérience avant ou après une transition." },
              { icon: "alert", t: "Situation sensible", d: "Objectiver ce que les données disponibles ne permettent plus de départager." }
            ] },
            { t: "statementbox", v: "HDC peut ainsi apporter à certains de ses clients une information qu'ils n'ont habituellement pas accès à voir." }
          ]
        },

        { id: "collaboration",
          eyebrow: "05 — Collaboration",
          titre: "Votre rôle s'arrête à la mise en relation.",
          body: [
            { t: "hsteps", v: [
              { icon: "person", n: "01", t: "Vous identifiez", d: "Une situation pertinente." },
              { icon: "handshake", n: "02", t: "Vous introduisez", d: "Nameless auprès du décideur." },
              { icon: "seal", n: "03", t: "Nous prenons le relais", d: "Qualification, cadrage, contractualisation et mission." }
            ] },
            { t: "centernote", v: "Aucune méthodologie à intégrer. Aucune mission à superviser." },
            { t: "bigcta", v: {
              label: "Échanger avec Nameless",
              email: "contact@namelessadvisory.com"
            } },
            { t: "confid", v: "Cet espace, la méthodologie présentée et les informations relatives aux dispositifs opérationnels de Nameless sont exclusivement destinés à David Esseryk et HDC Hospitality. Toute reproduction, transmission ou diffusion à un tiers est interdite." }
          ]
        }

      ]
    }
  },

};
