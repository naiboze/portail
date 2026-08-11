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
      mentions: "Les observations de ce rapport reposent sur les éléments recueillis au cours de la mission, selon le protocole opérationnel Nameless et dans le respect des exigences applicables. Les constats, analyses et recommandations reposent exclusivement sur les faits observés et documentés durant la mission."
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
            { t: "p", v: "Une inspection visuelle complète est menée <em>in situ</em>, conformément au protocole Nameless." }
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

};
