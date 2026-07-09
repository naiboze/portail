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

  "NBZ-01A-2026": {
    ref: "NBZ-01A-2026",
    name: "Hôtel Azur Prestige ★★★★★ — France",
    etoiles: 5,
    localisation: "France",
    type: "Premium",
    score: 78.8,
    verdict: "SOLIDE",

    /* ---- Cadre de la mission (page de garde du rapport) ---- */
    mission: {
      dateMission: "entre le 01/06/2026 et le 15/06/2026",
      duree: "1 jour — séjour individuel d'une nuit",
      agent: "AP-17",
      dateEmission: "25/06/2026",
      destinataire: "Direction Générale",
      statut: "Mission clôturée",
      reservation: "Directe (site officiel)",
      profil: "Homme, 26 ans, consultant en stratégie. Voyage individuel, déplacement hybride (professionnel / loisir). Habitué des établissements haut de gamme. Première visite de l'établissement.",
      objectif: "Évaluer la capacité de l'établissement à identifier, transmettre et exploiter les informations communiquées par un client avant son arrivée afin de délivrer une expérience personnalisée, cohérente et conforme aux standards de l'hôtellerie de luxe.",
      perimetre: ["Réservation", "Arrivée sur site", "Réception / check-in", "Chambre", "Conciergerie", "Restaurant gastronomique", "Services annexes", "Départ / check-out"],
      elements: ["10 séquences vidéo", "9 photographies", "Notes d'observation chronologiques", "Analyse émotionnelle du parcours client", "Évaluation des standards de service"],
      scenario: "L'agent a effectué une réservation directe sur le site officiel de l'établissement pour un séjour individuel d'une nuit. Avant son arrivée, l'agent a informé l'établissement qu'il travaillerait à distance pendant son séjour et qu'il participerait à plusieurs visioconférences nécessitant un environnement calme ainsi qu'une connexion internet stable. Une demande complémentaire a également été formulée auprès de la conciergerie concernant les espaces de travail disponibles, les recommandations de restaurants adaptés à une activité professionnelle ainsi que la possibilité d'un départ tardif.",
      mentions: "Les observations présentées dans ce rapport reposent sur les éléments recueillis au cours de la mission selon le protocole opérationnel Naïboze et dans le respect des exigences applicables à la mission concernée. Les constats, analyses et recommandations présentés reposent exclusivement sur les faits observés et documentés au cours de la mission."
    },

    /* ---- Résumé exécutif ---- */
    synthTitle: "Un standard maîtrisé, une personnalisation à activer",
    synthLead: "Score global de 78,8 %. L'établissement délivre une prestation opérationnelle solide ; la marge se loge dans la personnalisation et la circulation de l'information entre les services.",
    resume: [
      "Dans le cadre de cette mission, Naïboze a procédé à l'évaluation de l'expérience client complète d'un séjour de 24 heures au sein de l'Hôtel Azur Prestige *****. La mission avait pour objectif d'observer la prise en compte, la transmission et l'exploitation des informations communiquées par un client avant son arrivée ainsi que leur utilisation tout au long du parcours client.",
      "L'évaluation a porté sur l'ensemble des principales étapes du séjour, incluant la réservation, les échanges préalables à l'arrivée, l'accueil, l'hébergement, la conciergerie, la restauration, le petit-déjeuner et le départ.",
      "Les observations réalisées au cours de la mission ont permis d'établir un score global de 78,8 %. Les éléments observés montrent que les informations communiquées avant l'arrivée ont été identifiées et exploitées de manière variable selon les services sollicités au cours du séjour.",
      "Plusieurs interactions démontrent que certaines équipes disposaient des informations relatives au contexte du séjour et aux besoins exprimés avant l'arrivée. D'autres échanges observés ne font pas apparaître la même connaissance du dossier client ou ne permettent pas de constater l'exploitation des informations précédemment communiquées.",
      "Les observations réalisées mettent également en évidence des différences dans les réponses apportées concernant certains sujets évoqués à plusieurs reprises au cours du séjour, notamment les espaces adaptés au travail à distance ainsi que le suivi d'une demande de départ tardif formulée avant l'arrivée.",
      "Les infrastructures, les espaces d'hébergement, les services de restauration ainsi que les différents points de contact observés au cours de la mission ont fait l'objet d'une évaluation détaillée présentée dans les sections suivantes du rapport.",
      "Les constats, analyses et recommandations formulés dans ce document reposent exclusivement sur les éléments observés et documentés durant la mission réalisée selon le protocole opérationnel Naïboze."
    ],
    axes: [
      { label: "Premier contact et qualité de l'accueil", value: 76 },
      { label: "Exécution des standards opérationnels", value: 84 },
      { label: "Personnalisation et attention portée au client", value: 67 },
      { label: "Fluidité de la communication interservices", value: 60 },
      { label: "Expérience client perçue et valeur délivrée", value: 87 }
    ],

    /* ---- Chronologie : 8 phases ----
       event.blocks[].t : 'p' (paragraphe) · 'quote' (verbatim « »)
                          'synth' (retranscription de synthèse)
                          'stat' (mesures) · 'flag' (point d'attention)
       event.media : { type:'Vidéo'|'Photo'|'Capture', ref, label } */
    phases: [

      { n: 1, titre: "Réservation", jour: "Jour 0", horaire: "10h14 → 12h47",
        events: [
          { time: "Jour 0 · 10h14", blocks: [
            { t: "p", v: "Une réservation est effectuée sur le site officiel de l'établissement pour un séjour individuel d'une nuit en chambre Deluxe Vue Mer. Au cours du processus de réservation, l'agent renseigne dans le champ dédié aux demandes particulières le message suivant :" },
            { t: "quote", v: "Je serai amené à travailler à distance durant mon séjour et participerai à plusieurs visioconférences. Je recherche un environnement calme ainsi qu'une connexion internet stable." },
            { t: "p", v: "La réservation est validée à 10h18." }
          ] },
          { time: "Jour 0 · 10h20", blocks: [
            { t: "p", v: "Un courrier électronique automatique de confirmation est reçu à l'adresse utilisée pour la réservation." }
          ], media: { type: "Capture", ref: "CAPTURE ÉCRAN 01", label: "Confirmation de réservation reçue par courrier électronique." } },
          { time: "Jour 0 · 11h32", blocks: [
            { t: "p", v: "L'agent contacte le service conciergerie par courrier électronique afin d'obtenir des informations complémentaires concernant les espaces de travail disponibles au sein de l'établissement ainsi que les restaurants adaptés à une activité professionnelle." }
          ], media: { type: "Capture", ref: "CAPTURE ÉCRAN 02", label: "Demande adressée au service conciergerie." } },
          { time: "Jour 0 · 12h47", blocks: [
            { t: "p", v: "Une réponse est reçue le même jour. Les informations demandées sont communiquées et plusieurs solutions sont proposées." },
            { t: "p", v: "Aucune autre interaction n'est observée avant l'arrivée sur site." }
          ], media: { type: "Capture", ref: "CAPTURE ÉCRAN 03", label: "Réponse du service conciergerie." } }
        ],
        ressenti: "Les échanges réalisés avant l'arrivée permettent d'obtenir les informations recherchées. À ce stade, l'agent considère que l'établissement dispose des éléments nécessaires pour identifier le contexte de son séjour et les besoins exprimés avant son arrivée."
      },

      { n: 2, titre: "Arrivée sur site", jour: "Jour 1", horaire: "15h04 → 15h08",
        events: [
          { time: "Jour 1 · 15h04", blocks: [
            { t: "p", v: "L'agent arrive devant l'entrée principale de l'établissement à bord d'un véhicule de location. La zone de dépose minute est libre au moment de son arrivée." }
          ], media: { type: "Vidéo", ref: "VIDÉO 01", label: "Arrivée de l'agent devant l'établissement." } },
          { time: "Jour 1 · 15h04 → 15h06", blocks: [
            { t: "p", v: "Aucun membre du personnel n'interagit avec l'agent. À 15h06, un employé se présente et propose la prise en charge des bagages." }
          ], media: { type: "Vidéo", ref: "VIDÉO 02", label: "Prise en charge des bagages." } },
          { time: "", blocks: [
            { t: "p", v: "L'agent est ensuite accompagné jusqu'au hall principal. Aucun échange relatif aux informations communiquées avant l'arrivée n'est observé durant cette phase." }
          ] },
          { time: "Jour 1 · 15h08", blocks: [
            { t: "p", v: "L'agent rejoint la réception afin de procéder à son enregistrement." }
          ] }
        ],
        ressenti: "L'arrivée est perçue comme fluide. Aucun élément ne permet toutefois d'identifier à ce stade une prise en compte particulière des informations communiquées avant le séjour."
      },

      { n: 3, titre: "Enregistrement", jour: "Jour 1", horaire: "15h08 → 15h22",
        events: [
          { time: "Jour 1 · 15h08", blocks: [
            { t: "p", v: "À son arrivée à la réception, l'agent constate la présence de deux clients en cours d'enregistrement auprès des réceptionnistes. Trois postes d'accueil sont visibles, dont deux occupés." }
          ], media: { type: "Vidéo", ref: "VIDÉO 03", label: "Vue générale de la réception lors de l'arrivée de l'agent." } },
          { time: "Jour 1 · 15h10", blocks: [
            { t: "p", v: "Un réceptionniste établit un contact visuel avec l'agent et lui adresse un signe de la tête indiquant qu'il sera pris en charge dans quelques instants. Aucun échange verbal complémentaire n'est observé." }
          ] },
          { time: "Jour 1 · 15h17", blocks: [
            { t: "p", v: "L'agent est invité à se présenter au comptoir. La pièce d'identité est demandée ainsi qu'une carte bancaire de garantie. Le réceptionniste vérifie les informations de réservation, remet une fiche récapitulative du séjour et présente brièvement les principaux services de l'établissement." },
            { t: "p", v: "Au cours de l'échange, aucune référence n'est faite aux informations communiquées avant l'arrivée concernant l'activité professionnelle de l'agent ou son besoin d'un environnement calme." }
          ] },
          { time: "Jour 1 · 15h19", blocks: [
            { t: "p", v: "L'agent demande :" },
            { t: "quote", v: "Je voulais savoir si ma demande concernant le télétravail pendant le séjour avait bien été prise en compte ?" },
            { t: "p", v: "Le réceptionniste consulte son écran pendant quelques secondes avant de répondre :" },
            { t: "quote", v: "Je vois effectivement une note dans votre dossier. Nous vous avons attribué une chambre dans une zone calme de l'établissement." },
            { t: "p", v: "L'information apparaît donc dans le système de réservation au moment de la consultation du dossier client." }
          ] },
          { time: "Jour 1 · 15h21", blocks: [
            { t: "p", v: "Le réceptionniste remet les cartes d'accès à la chambre et précise les horaires du petit-déjeuner ainsi que ceux du restaurant gastronomique." }
          ] },
          { time: "Jour 1 · 15h22", blocks: [
            { t: "p", v: "La procédure d'enregistrement prend fin." }
          ], media: { type: "Vidéo", ref: "VIDÉO 04", label: "Échange avec le réceptionniste." } }
        ],
        ressenti: "L'interaction est perçue comme professionnelle et courtoise. L'agent note cependant que les informations transmises avant son arrivée n'ont été évoquées qu'après une question directe de sa part."
      },

      { n: 4, titre: "Accès à la chambre et inspection initiale", jour: "Jour 1", horaire: "15h24 → 15h52",
        events: [
          { time: "Jour 1 · 15h24", blocks: [
            { t: "p", v: "L'agent rejoint l'étage attribué à l'aide de l'ascenseur principal. Les espaces communs observés entre la réception et la chambre apparaissent propres et correctement entretenus. Aucun défaut particulier n'est constaté durant le parcours." }
          ] },
          { time: "Jour 1 · 15h26", blocks: [
            { t: "p", v: "L'agent accède à la chambre. Une inspection visuelle complète est immédiatement réalisée conformément au protocole Naïboze." }
          ], media: { type: "Photo", ref: "PHOTO 01", label: "Vue générale de la chambre." } },
          { time: "", blocks: [
            { t: "p", v: "L'agent vérifie plus particulièrement l'espace de travail en raison du scénario de mission. Le bureau est correctement installé à proximité d'une prise électrique et bénéficie d'un éclairage naturel." }
          ], media: { type: "Photo", ref: "PHOTO 02", label: "Espace bureau." } },
          { time: "Jour 1 · 15h34", blocks: [
            { t: "p", v: "Un test de connexion internet est réalisé. Le téléchargement d'un fichier de 2 Go est effectué afin de mesurer la stabilité de la connexion." },
            { t: "stat", v: [["Téléchargement", "94,7 Mbps"], ["Téléversement", "93,1 Mbps"], ["Ping", "12 ms"], ["Gigue", "2 ms"], ["Durée du transfert", "3 min 28 s"], ["Débit moyen", "9,83 Mo/s"]] }
          ], media: { type: "Capture", ref: "CAPTURE 04", label: "Résultat du test réseau." } },
          { time: "Jour 1 · 15h41", blocks: [
            { t: "p", v: "Une visioconférence test de dix minutes est effectuée. Aucune coupure n'est observée durant l'appel." },
            { t: "p", v: "L'agent poursuit ensuite l'inspection détaillée de la chambre. Une légère accumulation de poussière est observée sur une étagère décorative située à proximité du minibar." }
          ], media: { type: "Photo", ref: "PHOTO 03", label: "Étagère décorative." } },
          { time: "", blocks: [
            { t: "p", v: "Une trace est également constatée sur une paroi de douche." }
          ], media: { type: "Photo", ref: "PHOTO 04", label: "Paroi de douche." } },
          { time: "Jour 1 · 15h52", blocks: [
            { t: "p", v: "L'agent consulte le dossier de bienvenue présent dans la chambre. Aucune documentation spécifique relative aux espaces de travail de l'établissement n'est présente malgré la demande formulée avant le séjour." }
          ] }
        ],
        ressenti: "L'agent considère que la chambre est adaptée à l'usage annoncé lors de la réservation. Les équipements et la connexion internet répondent aux besoins exprimés avant l'arrivée."
      },

      { n: 5, titre: "Test de la coordination entre services", jour: "Jour 1", horaire: "17h08 → 17h36",
        events: [
          { time: "Jour 1 · 17h08", blocks: [
            { t: "p", v: "Afin d'évaluer la circulation de l'information entre les différents services, l'agent contacte la réception depuis sa chambre concernant une demande de départ tardif. La demande est prise en compte et un retour ultérieur est annoncé après vérification des disponibilités du lendemain." },
            { t: "synth", v: "La réception confirme avoir identifié la demande et indique qu'une vérification interne sera effectuée avant de communiquer une réponse définitive." }
          ] },
          { time: "Jour 1 · 17h36", blocks: [
            { t: "p", v: "Aucun rappel n'a été reçu. L'agent se rend alors directement à la conciergerie. L'échange porte sur les espaces de travail disponibles au sein de l'établissement, l'organisation du lendemain matin ainsi que la demande de départ tardif. Au cours de la discussion, plusieurs éléments communiqués avant l'arrivée sont spontanément évoqués par le concierge." },
            { t: "synth", v: "Le service conciergerie démontre une connaissance du contexte du séjour. Les besoins liés à l'activité professionnelle de l'agent sont identifiés et plusieurs solutions adaptées sont proposées. La demande de départ tardif est également retrouvée dans le dossier client et fait l'objet d'un suivi." },
            { t: "flag", v: "Cette interaction constitue le premier élément démontrant une différence de niveau d'information entre plusieurs services de l'établissement." }
          ], media: { type: "Vidéo", ref: "VIDÉO 05", label: "Échange avec la conciergerie." } }
        ],
        ressenti: "L'agent perçoit une meilleure maîtrise du dossier client au sein du service conciergerie que lors des interactions précédentes observées durant le séjour."
      },

      { n: 6, titre: "Restauration gastronomique", jour: "Jour 1", horaire: "20h02 → 22h01",
        events: [
          { time: "Jour 1 · 20h02", blocks: [
            { t: "p", v: "L'agent se présente à l'entrée du restaurant gastronomique de l'établissement à 20h02, conformément à la réservation effectuée lors du check-in. Une hôtesse accueille l'agent dès son arrivée. Après vérification du numéro de chambre, celui-ci est accompagné jusqu'à une table située dans une zone calme de la salle. Le personnel présente la carte ainsi que les suggestions du chef." }
          ] },
          { time: "Jour 1 · 20h09", blocks: [
            { t: "p", v: "Le serveur prend la commande. Durant les premières minutes de l'échange, aucune référence n'est faite au contexte professionnel communiqué avant l'arrivée ou aux échanges précédemment réalisés avec la conciergerie." }
          ], media: { type: "Vidéo", ref: "VIDÉO 06", label: "Arrivée de l'agent au restaurant et prise de commande." } },
          { time: "Jour 1 · 20h24", blocks: [
            { t: "p", v: "L'entrée est servie à la table de l'agent par le serveur référent. L'assiette est présentée avant d'être déposée. Une description succincte des principaux produits composant le plat est réalisée au moment du service. Le serveur précise notamment l'origine de certains produits ainsi que les éléments préparés par le chef le jour même. L'échange demeure fluide et naturel. Aucun document ou support complémentaire n'est utilisé." }
          ], media: { type: "Photo", ref: "PHOTO 05", label: "Entrée servie à table." } },
          { time: "Jour 1 · 20h28", blocks: [
            { t: "p", v: "Un membre du personnel effectue un premier passage visuel dans la salle afin de s'assurer du bon déroulement du service. Aucun échange direct n'est engagé à ce moment-là." }
          ] },
          { time: "Jour 1 · 20h34", blocks: [
            { t: "p", v: "Le serveur revient à table afin de recueillir les premières impressions concernant l'entrée." },
            { t: "synth", v: "L'agent indique être satisfait du plat servi. Le personnel remercie l'agent pour son retour et confirme la préparation du plat suivant." },
            { t: "p", v: "L'assiette est débarrassée à 20h39." }
          ] },
          { time: "Jour 1 · 20h39", blocks: [
            { t: "p", v: "Débarrassage de l'entrée." }
          ], media: { type: "Vidéo", ref: "VIDÉO 11", label: "Débarrassage de l'entrée." } },
          { time: "Jour 1 · 20h39 → 20h56", blocks: [
            { t: "p", v: "Plusieurs passages du personnel sont observés dans la salle. Les niveaux d'eau sont vérifiés régulièrement et les tables font l'objet d'une surveillance discrète." }
          ] },
          { time: "Jour 1 · 20h57", blocks: [
            { t: "p", v: "Le plat principal est présenté à l'agent. Le serveur prend quelques instants pour détailler la composition du plat, les techniques de cuisson utilisées ainsi que les accompagnements proposés." }
          ], media: { type: "Photo", ref: "PHOTO 07", label: "Plat principal." } },
          { time: "Jour 1 · 21h10", blocks: [
            { t: "p", v: "Durant le repas, le personnel effectue plusieurs passages de contrôle sans interruption excessive de l'expérience. Les interactions observées demeurent discrètes et adaptées au rythme du client. Un nouveau passage est effectué afin de vérifier la satisfaction de l'agent concernant le plat principal." },
            { t: "synth", v: "L'échange porte principalement sur la cuisson, l'équilibre des saveurs et le déroulement général du repas. Aucun problème n'est signalé." },
            { t: "p", v: "Le plat principal est débarrassé à 21h22." }
          ] },
          { time: "Jour 1 · 21h22", blocks: [
            { t: "p", v: "Débarrassage du plat principal." }
          ], media: { type: "Vidéo", ref: "VIDÉO 13", label: "Débarrassage du plat principal." } },
          { time: "Jour 1 · 21h26", blocks: [
            { t: "p", v: "Le serveur revient à table afin de proposer la carte des desserts ainsi que la carte des boissons chaudes. Après consultation, l'agent indique ne pas souhaiter de dessert et commande un café." },
            { t: "synth", v: "L'agent indique être satisfait du repas et préfère conclure celui-ci par une boisson chaude." },
            { t: "p", v: "Le café est servi à 21h35." }
          ] },
          { time: "Jour 1 · 21h36", blocks: [
            { t: "p", v: "Plusieurs mignardises accompagnant le café sont apportées à table." }
          ], media: { type: "Photo", ref: "PHOTO 09", label: "Mignardises servies avec le café." } },
          { time: "Jour 1 · 21h41", blocks: [
            { t: "p", v: "Un responsable de salle effectue un passage auprès de l'agent." },
            { t: "synth", v: "L'échange porte sur le déroulement général du séjour, la qualité de la restauration et les infrastructures de l'établissement. Les espaces pouvant être utilisés pour travailler ou organiser des rendez-vous professionnels sont évoqués. Plusieurs recommandations sont formulées pour la matinée suivante." },
            { t: "p", v: "Le responsable remercie ensuite l'agent pour sa visite et lui souhaite une excellente fin de séjour." }
          ], media: { type: "Vidéo", ref: "VIDÉO 14", label: "Passage du responsable de salle." } },
          { time: "Jour 1 · 21h52", blocks: [
            { t: "p", v: "Le café et les mignardises sont débarrassés. L'addition est imputée directement sur la chambre conformément à la procédure annoncée lors du check-in." }
          ] },
          { time: "Jour 1 · 21h56", blocks: [
            { t: "p", v: "À l'issue du dîner, l'agent quitte le restaurant gastronomique et rejoint les espaces communs de l'établissement. Le trajet s'effectue sans interaction particulière avec le personnel. Les espaces communs observés sont propres et correctement entretenus. La fréquentation de l'établissement est faible à cette heure de la soirée." }
          ], media: { type: "Vidéo", ref: "VIDÉO 15", label: "Sortie du restaurant et retour vers les ascenseurs." } },
          { time: "Jour 1 · 22h01", blocks: [
            { t: "p", v: "L'agent rejoint sa chambre." },
            { t: "flag", v: "Aucune communication complémentaire de l'établissement n'est reçue au cours de la soirée concernant la demande de départ tardif formulée avant l'arrivée puis évoquée à plusieurs reprises au cours du séjour." }
          ] }
        ],
        ressenti: "L'agent considère que les informations nécessaires ont été communiquées aux différents services de l'établissement au cours de la journée et attend un retour concernant sa demande."
      },

      { n: 7, titre: "Petit déjeuner", jour: "Jour 2", horaire: "07h24 → 08h07",
        events: [
          { time: "Jour 2 · 07h24", blocks: [
            { t: "p", v: "L'agent se présente à l'espace petit-déjeuner situé au rez-de-chaussée de l'établissement. Plusieurs clients sont déjà installés dans la salle au moment de son arrivée. Après communication du numéro de chambre, une table lui est attribuée par un membre du personnel d'accueil." }
          ], media: { type: "Vidéo", ref: "VIDÉO 16", label: "Arrivée et prise en charge à l'espace petit-déjeuner." } },
          { time: "", blocks: [
            { t: "p", v: "Une fois installé, l'agent procède à une observation complète de l'espace de restauration. L'ensemble du buffet apparaît correctement approvisionné. Les différents espaces sont clairement identifiables et les produits présentés de manière ordonnée." },
            { t: "p", v: "L'offre proposée comprend notamment une sélection de viennoiseries, pains, fruits frais, produits laitiers, céréales, charcuteries, fromages ainsi que plusieurs préparations chaudes." },
            { t: "p", v: "Au cours de la période d'observation, plusieurs membres du personnel circulent régulièrement entre la salle et les différents postes de service. Les tables libérées sont rapidement remises en état et les produits consommés sont réapprovisionnés au fur et à mesure des besoins observés." },
            { t: "p", v: "À plusieurs reprises, des collaborateurs effectuent des contrôles visuels du buffet afin de vérifier les niveaux de stock et la présentation des produits. Aucun espace vide ou rupture d'approvisionnement n'est observé durant la présence de l'agent." }
          ] },
          { time: "Jour 2 · 07h55", blocks: [
            { t: "p", v: "L'agent sollicite un membre du personnel concernant les espaces disponibles pour travailler au sein de l'établissement durant la matinée." },
            { t: "synth", v: "Le collaborateur indique ne pas disposer de cette information et oriente l'agent vers la réception pour obtenir davantage de renseignements. Cette interaction constitue la seule demande spécifique formulée par l'agent durant le petit-déjeuner." },
            { t: "p", v: "Le repas se poursuit sans autre échange notable avec le personnel." }
          ] },
          { time: "Jour 2 · 08h07", blocks: [
            { t: "p", v: "L'agent quitte l'espace petit-déjeuner." }
          ] }
        ],
        ressenti: "L'organisation générale du service apparaît fluide et maîtrisée. L'espace est correctement entretenu et les opérations de réapprovisionnement sont réalisées de manière discrète. Les informations obtenues concernant les espaces de travail diffèrent toutefois de celles précédemment communiquées par d'autres services de l'établissement."
      },

      { n: 8, titre: "Check-out et départ", jour: "Jour 2", horaire: "10h52 → 11h12",
        events: [
          { time: "Jour 2 · 10h52", blocks: [
            { t: "p", v: "L'agent se présente à la réception afin de procéder aux formalités de départ. Deux collaborateurs sont présents derrière le comptoir au moment de l'arrivée de l'agent. La prise en charge intervient rapidement après son arrivée." },
            { t: "p", v: "Le réceptionniste procède à la consultation du dossier client et prépare la facture du séjour. Les consommations enregistrées sur la chambre sont vérifiées avant validation." },
            { t: "p", v: "Au cours de l'échange, l'agent sollicite un dernier retour concernant la demande de départ tardif formulée avant son arrivée puis évoquée à plusieurs reprises durant le séjour." },
            { t: "synth", v: "Après consultation du dossier client, aucune validation définitive de la demande n'apparaît dans les informations disponibles à la réception. Une vérification complémentaire est réalisée sans qu'une réponse précise puisse être apportée au client." },
            { t: "p", v: "L'échange se poursuit ensuite sur les modalités de règlement et sur le déroulement général du séjour. Le réceptionniste remercie l'agent pour sa visite et l'invite à revenir séjourner dans l'établissement." },
            { t: "p", v: "La procédure de départ est finalisée à 11h06." }
          ], media: { type: "Vidéo", ref: "VIDÉO 17", label: "Arrivée à la réception pour le check-out." } },
          { time: "Jour 2 · 11h06", blocks: [
            { t: "p", v: "Fin du check-out." }
          ], media: { type: "Vidéo", ref: "VIDÉO 18", label: "Fin du check-out." } },
          { time: "Jour 2 · 11h12", blocks: [
            { t: "p", v: "L'agent quitte définitivement l'établissement à 11h12." }
          ], media: { type: "Vidéo", ref: "VIDÉO 19", label: "Sortie de l'établissement." } }
        ],
        ressenti: "Les formalités de départ sont réalisées rapidement et sans difficulté particulière. La demande formulée avant l'arrivée n'a toutefois pas reçu de réponse définitive avant la fin du séjour."
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
