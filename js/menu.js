
  // ————————————————————————————————————————
  // Données extraites de la carte PDF (nettoyées)
  // Catégories principales & sous‑catégories harmonisées
  // ————————————————————————————————————————
  const MENU = [
    // ——— Entrées
    {name:"Rouleaux de printemps (3p)", price:6.50, category:"Entrées", sub:"Frits & croustillants", tags:["frais"]},
    {name:"Nems au porc (4p)", price:6.90, category:"Entrées", sub:"Frits & croustillants", tags:["porc","classique"]},
    {name:"Nems poulet crevette (4p)", price:7.90, category:"Entrées", sub:"Frits & croustillants", tags:["poulet","crevette"]},
    {name:"Raviolis frits porc, crevettes (5p)", price:7.50, category:"Entrées", sub:"Frits & croustillants", tags:["porc","crevette"]},
    {name:"Samoussas porc (5p)", price:7.90, category:"Entrées", sub:"Frits & croustillants", tags:["porc"]},
    {name:"Beignets de crevettes (5p)", price:11.90, category:"Entrées", sub:"Frits & croustillants", tags:["crevette"]},
    {name:"Assiette dégustation", price:12.90, category:"Entrées", sub:"Assortiments", desc:"2 nems, 1 samoussa, 2 beignets de crevettes, 2 raviolis frits, 1 rouleau de printemps"},
    {name:"Salade poulet / Salade Thaï au poulet", price:7.90, category:"Entrées", sub:"Salades", tags:["poulet"]},
    {name:"Salade vermicelle poulet", price:10.50, category:"Entrées", sub:"Salades", tags:["poulet","vermicelle"]},
    {name:"Salade nems", price:8.90, category:"Entrées", sub:"Salades", tags:["nems"]},
    {name:"Salade porc nems", price:9.90, category:"Entrées", sub:"Salades", tags:["porc","nems"]},
    {name:"Salade boeuf nems", price:10.90, category:"Entrées", sub:"Salades", tags:["boeuf","nems"]},
    {name:"Salade Thaï au boeuf", price:12.90, category:"Entrées", sub:"Salades", tags:["boeuf"]},
    {name:"Salade fraîcheur seiche, crabe, crevette", price:11.90, category:"Entrées", sub:"Salades", tags:["fruits de mer"]},
    {name:"Salade de Mangue & crevette", price:13.90, category:"Entrées", sub:"Salades", tags:["mangue","crevette"]},
    {name:"Mee Seam – pâtes croustillantes, porc haché mariné", price:11.90, category:"Entrées", sub:"Spécialités", tags:["porc","pâtes"]},
    {name:"Lab au boeuf – tartare assaisonné aux herbes", price:16.90, category:"Entrées", sub:"Spécialités", tags:["boeuf","épicé"]},

    // ——— Vapeurs
    {name:"Bouchées vapeur (6p)", price:7.90, category:"Vapeurs", sub:"Raviolis & bouchées"},
    {name:"Raviolis vapeur (6p)", price:8.90, category:"Vapeurs", sub:"Raviolis & bouchées"},
    {name:"Mélange vapeur (3 bouchées, 3 raviolis)", price:8.50, category:"Vapeurs", sub:"Raviolis & bouchées"},

    // ——— Potages & soupes
    {name:"Potage au poulet", price:6.50, category:"Potages & soupes", sub:"Potages", tags:["poulet"]},
    {name:"Soupe vermicelle au poulet", price:6.50, category:"Potages & soupes", sub:"Potages", tags:["poulet","vermicelle"]},
    {name:"Potage au crabe crevette", price:8.90, category:"Potages & soupes", sub:"Potages", tags:["crabe","crevette"]},
    {name:"Soupe vermicelle crabe crevette", price:8.50, category:"Potages & soupes", sub:"Potages", tags:["crabe","crevette","vermicelle"]},
    {name:"Soupe raviolis crevette", price:9.90, category:"Potages & soupes", sub:"Potages", tags:["raviolis","crevette"]},
    {name:"Tom Yam – soupe aux crevettes, citronnelle, galanga & combawa", price:15.50, category:"Potages & soupes", sub:"Spécialités", tags:["épicé","crevette"]},

    // ——— Poulet
    {name:"Poulet au curry", price:10.90, category:"Poulet", sub:"Currys", tags:["curry"]},
    {name:"Poulet sauce piquante", price:10.90, category:"Poulet", sub:"Sautés", tags:["épicé"]},
    {name:"Marmite de poulet sauce Thaï", price:11.90, category:"Poulet", sub:"Marmites"},

    // ——— Porc
    {name:"Porc au caramel", price:10.90, category:"Porc", sub:"Sautés"},
    {name:"Marmite de porc sauce Thaï", price:11.90, category:"Porc", sub:"Marmites"},
    {name:"Porc saté sur plaque chauffante", price:12.90, category:"Porc", sub:"Grillades & plaques", tags:["sésame"]},
    {name:"Machou Khtis – travers de porc au curry maison", price:15.90, category:"Porc", sub:"Spécialités", tags:["curry"]},

    // ——— Boeuf
    {name:"Boeuf sauce piquante", price:12.90, category:"Boeuf", sub:"Sautés", tags:["épicé"]},
    {name:"Boeuf oignons", price:12.90, category:"Boeuf", sub:"Sautés"},
    {name:"Boeuf Lock‑Lack", price:12.90, category:"Boeuf", sub:"Sautés", tags:["classique"]},
    {name:"Boeuf gingembre", price:12.90, category:"Boeuf", sub:"Sautés", tags:["gingembre"]},
    {name:"Brochettes de boeuf", price:13.90, category:"Boeuf", sub:"Grillades & plaques"},
    {name:"Marmite de boeuf sauce Thaï", price:13.90, category:"Boeuf", sub:"Marmites"},
    {name:"Boeuf saté sur plaque chauffante", price:13.90, category:"Boeuf", sub:"Grillades & plaques", tags:["sésame"]},
    {name:"Saraman – boeuf au curry façon cambodgienne", price:17.90, category:"Boeuf", sub:"Currys", tags:["curry"]},

    // ——— Canard
    {name:"Canard grillé à la citronnelle sur plaque", price:14.90, category:"Canard", sub:"Grillades & plaques", tags:["citronnelle"]},
    {name:"Marmite de canard sauce Thaï", price:14.90, category:"Canard", sub:"Marmites"},
    {name:"Magret de canard laqué", price:15.90, category:"Canard", sub:"Magrets"},
    {name:"Magret de canard Samouraï", price:15.90, category:"Canard", sub:"Magrets"},

    // ——— Grenouille
    {name:"Marmite de grenouille sauce Thaï", price:16.90, category:"Grenouille", sub:"Marmites"},
    {name:"Grenouille à la citronnelle sur plaque", price:16.90, category:"Grenouille", sub:"Grillades & plaques"},

    // ——— Fruits de mer & poissons
    {name:"Crevettes sauce piquante", price:14.90, category:"Fruits de mer & poissons", sub:"Crevettes", tags:["épicé"]},
    {name:"Crevettes au curry", price:14.90, category:"Fruits de mer & poissons", sub:"Crevettes", tags:["curry"]},
    {name:"Crevettes grillées sel poivre sur plaque", price:15.90, category:"Fruits de mer & poissons", sub:"Crevettes"},
    {name:"Brochettes de crevettes", price:15.90, category:"Fruits de mer & poissons", sub:"Crevettes"},
    {name:"Noix de Saint‑Jacques au curry", price:18.90, category:"Fruits de mer & poissons", sub:"Saint‑Jacques", tags:["curry"]},
    {name:"Marmite de noix de Saint‑Jacques sauce Thaï", price:21.90, category:"Fruits de mer & poissons", sub:"Saint‑Jacques"},
    {name:"Noix de Saint‑Jacques grillées sel poivre sur plaque", price:21.90, category:"Fruits de mer & poissons", sub:"Saint‑Jacques"},
    {name:"Poisson au curry", price:12.90, category:"Fruits de mer & poissons", sub:"Poissons", tags:["curry"]},
    {name:"Poisson sauce aigre‑douce", price:12.90, category:"Fruits de mer & poissons", sub:"Poissons"},
    {name:"Marmite de poisson sauce Thaï", price:13.90, category:"Fruits de mer & poissons", sub:"Poissons"},
    {name:"Seiches sauce piquante", price:12.90, category:"Fruits de mer & poissons", sub:"Seiches", tags:["épicé"]},
    {name:"Seiches grillées sel poivre sur plaque", price:13.90, category:"Fruits de mer & poissons", sub:"Seiches"},
    {name:"Marmite de seiches sauce Thaï", price:13.90, category:"Fruits de mer & poissons", sub:"Seiches"},
    {name:"Marmite de fruits de mer sauce Thaï", price:16.90, category:"Fruits de mer & poissons", sub:"Assortiments"},
    {name:"Fruits de mer grillés sel poivre sur plaque", price:16.90, category:"Fruits de mer & poissons", sub:"Assortiments"},
    {name:"Daurade entière façon Thaï", price:18.50, category:"Fruits de mer & poissons", sub:"Poissons"},
    {name:"Amok – poisson vapeur citronnelle & curry maison", price:14.50, category:"Fruits de mer & poissons", sub:"Poissons", tags:["curry","vapeur"]},
    {name:"Gambas grillées sel poivre sur plaque", price:28.50, category:"Fruits de mer & poissons", sub:"Gambas"},

    // ——— Nouilles
    {name:"Nouilles nature", price:5.90, category:"Nouilles", sub:"Nature & légumes"},
    {name:"Nouilles sautées aux légumes", price:8.90, category:"Nouilles", sub:"Nature & légumes"},
    {name:"Nouilles sautées au poulet", price:12.90, category:"Nouilles", sub:"Sautées", tags:["poulet"]},
    {name:"Nouilles sautées au porc", price:13.90, category:"Nouilles", sub:"Sautées", tags:["porc"]},
    {name:"Nouilles sautées au boeuf", price:14.90, category:"Nouilles", sub:"Sautées", tags:["boeuf"]},
    {name:"Nouilles sautées aux seiches", price:14.90, category:"Nouilles", sub:"Sautées", tags:["seiches"]},
    {name:"Nouilles sautées aux crevettes", price:15.90, category:"Nouilles", sub:"Sautées", tags:["crevettes"]},
    {name:"Mixao – nouilles croustillantes aux fruits de mer", price:17.90, category:"Nouilles", sub:"Spécialités", tags:["fruits de mer","croustillant"]},
    {name:"Pad Thaï au poulet", price:14.90, category:"Nouilles", sub:"Pad Thaï", tags:["poulet"]},
    {name:"Pad Thaï au boeuf", price:15.90, category:"Nouilles", sub:"Pad Thaï", tags:["boeuf"]},
    {name:"Pad Thaï aux crevettes", price:16.90, category:"Nouilles", sub:"Pad Thaï", tags:["crevettes"]},

    // ——— Accompagnements
    {name:"Riz parfumé nature", price:2.50, category:"Accompagnements", sub:"Riz"},
    {name:"Riz gluant", price:4.00, category:"Accompagnements", sub:"Riz"},
    {name:"Riz cantonnais au porc & poulet", price:5.50, category:"Accompagnements", sub:"Riz"},
    {name:"Riz sauté façon Thaï", price:5.50, category:"Accompagnements", sub:"Riz"},
    {name:"Légumes sautés", price:5.90, category:"Accompagnements", sub:"Légumes"},
    {name:"Riz cantonnais aux crevettes", price:8.50, category:"Accompagnements", sub:"Riz"},

    // ——— Desserts
    {name:"Ananas frais", price:6.90, category:"Desserts", sub:"Fruits"},
    {name:"Banane grillée flambée (saké ou rhum)", price:7.90, category:"Desserts", sub:"Fruits", tags:["flambé"]},
    {name:"Banane caramélisée", price:5.90, category:"Desserts", sub:"Fruits"},
    {name:"Raviolis de banane (banane, glace vanille, chantilly)", price:7.90, category:"Desserts", sub:"Spécialités"},
    {name:"Beignets de fruits (pomme, banane, ananas)", price:7.90, category:"Desserts", sub:"Beignets"},
    {name:"Beignets de fruits flambés (saké ou rhum)", price:9.90, category:"Desserts", sub:"Beignets", tags:["flambé"]},
    {name:"Lychees au sirop", price:6.50, category:"Desserts", sub:"Fruits"},
    {name:"Perles de coco (3p)", price:7.50, category:"Desserts", sub:"Spécialités"},
    {name:"Salade de fruits frais", price:6.90, category:"Desserts", sub:"Fruits"},
    {name:"Assiette de Sucreries aux graines de sésame", price:6.90, category:"Desserts", sub:"Spécialités", tags:["sésame"]},
    {name:"Gingembre confit", price:6.90, category:"Desserts", sub:"Spécialités"},
    {name:"Colonel – sorbet citron vert au saké", price:7.50, category:"Desserts", sub:"Glaces"},
    {name:"Coupe Sommet Himalaya (lychee, saké, glace vanille, chantilly)", price:9.50, category:"Desserts", sub:"Glaces"},
    {name:"Rêve Gourmand (beignet de banane, glace vanille coco, chantilly)", price:9.50, category:"Desserts", sub:"Glaces"},
    {name:"Coupe de glace (1 boule)", price:3.00, category:"Desserts", sub:"Glaces"},
    {name:"Coupe de glace (2 boules)", price:5.50, category:"Desserts", sub:"Glaces"},
    {name:"Coupe de glace (3 boules)", price:7.50, category:"Desserts", sub:"Glaces"},
    {name:"Citron givré", price:6.50, category:"Desserts", sub:"Glaces"},
    {name:"Nougat glacé", price:6.50, category:"Desserts", sub:"Glaces"},
    {name:"Mochis glacés (2p)", price:7.50, category:"Desserts", sub:"Glaces"},
    {name:"Café gourmand", price:8.50, category:"Desserts", sub:"Gourmands"},
    {name:"Thé gourmand", price:7.50, category:"Desserts", sub:"Gourmands"},
    {name:"Supplément chantilly", price:1.00, category:"Desserts", sub:"Suppléments"},

    // ——— Boissons (sélection essentielle)
    {name:"Singha (bière thaï) 33cl", price:5.50, category:"Boissons", sub:"Bières"},
    {name:"Tsingtao (bière chinoise) 33cl", price:5.00, category:"Boissons", sub:"Bières"},
    {name:"Angkor (bière cambodgienne) 33cl", price:5.00, category:"Boissons", sub:"Bières"},
    {name:"Monaco / Panaché (pression 25cl)", price:5.50, category:"Boissons", sub:"Bières"},
    {name:"Supp sirops", price:0.50, category:"Boissons", sub:"Suppléments"},
    {name:"Orangina", price:3.50, category:"Boissons", sub:"Boissons fraîches"},
    {name:"Ice Tea", price:3.50, category:"Boissons", sub:"Boissons fraîches"},
    {name:"Jus de fruits 20cl (pomme, ananas, abricot)", price:3.50, category:"Boissons", sub:"Boissons fraîches"},
    {name:"Sirops (menthe, grenadine, fraise, citron, pêche)", price:2.50, category:"Boissons", sub:"Boissons fraîches"},
    {name:"Jus de Lychee", price:3.50, category:"Boissons", sub:"Boissons fraîches"},
    {name:"Diabolo", price:3.50, category:"Boissons", sub:"Boissons fraîches"},
    {name:"Coca Cola 33cl", price:1.80, category:"Boissons", sub:"Boissons fraîches"},
    {name:"Perrier 100cl", price:3.00, category:"Boissons", sub:"Eaux"},
    {name:"Vittel / San Pellegrino 100cl", price:4.00, category:"Boissons", sub:"Eaux"},
    {name:"Café", price:1.80, category:"Boissons", sub:"Boissons chaudes"},
    {name:"Thé jasmin / menthe", price:3.00, category:"Boissons", sub:"Boissons chaudes"},
    {name:"Cocktail sans alcool", price:4.50, category:"Boissons", sub:"Cocktails"},
    {name:"Cocktail maison", price:5.50, category:"Boissons", sub:"Cocktails"},
    {name:"Kir (cassis, mûre, pêche)", price:4.50, category:"Boissons", sub:"Apéritifs"},
    {name:"Martini blanc & rouge 4cl", price:5.50, category:"Boissons", sub:"Apéritifs"},
    {name:"Porto / Muscat 4cl", price:4.50, category:"Boissons", sub:"Apéritifs"},
    {name:"Ricard / Pastis 51 2cl", price:4.50, category:"Boissons", sub:"Apéritifs"},
    {name:"Saké", price:4.80, category:"Boissons", sub:"Digestifs"},
    {name:"Whisky Jack Daniel’s 4cl", price:8.50, category:"Boissons", sub:"Digestifs"},
    {name:"Whisky Ballantine’s 4cl", price:6.50, category:"Boissons", sub:"Digestifs"},
    {name:"Cognac 4cl", price:8.00, category:"Boissons", sub:"Digestifs"},
    {name:"Armagnac 4cl", price:8.00, category:"Boissons", sub:"Digestifs"},
    {name:"Bailey / Jet 27 4cl", price:6.50, category:"Boissons", sub:"Digestifs"},

    // ——— Vins (bouteilles + pichets essentiels)
    {name:"Gaillac AOP – Esprit de Labastide (rouge) 75cl", price:15.00, category:"Vins", sub:"Rouges"},
    {name:"Gaillac AOP – Domaine de Labarthe Cuvée Guillaume (rouge) 75cl", price:20.50, category:"Vins", sub:"Rouges"},
    {name:"Corbières AOP – Château de Caraguilhes Cochon Volant (rouge) 75cl", price:19.50, category:"Vins", sub:"Rouges"},
    {name:"St‑Nicolas de Bourgueil AOP – Domaine Olivier (rouge) 75cl", price:19.50, category:"Vins", sub:"Rouges"},
    {name:"Pic St‑Loup AOP – Cuvée B (rouge) 75cl", price:24.50, category:"Vins", sub:"Rouges"},
    {name:"St‑Émilion AOP – Château Haut Boutisse (rouge) 75cl", price:29.50, category:"Vins", sub:"Rouges"},

    {name:"Gaillac AOP – Esprit de Labastide (rosé) 75cl", price:15.00, category:"Vins", sub:"Rosés"},
    {name:"IGP Île de Beauté Corse – San Piéru (rosé) 75cl", price:17.90, category:"Vins", sub:"Rosés"},
    {name:"Côtes de Provence AOP – Murmure de Gaia (rosé) 75cl", price:19.50, category:"Vins", sub:"Rosés"},
    {name:"IGP Méditerranée – Mirati (rosé) 75cl", price:17.90, category:"Vins", sub:"Rosés"},

    {name:"IGP Pays d’Oc – Domaine Maurel Chardonnay (blanc) 75cl", price:18.50, category:"Vins", sub:"Blancs"},
    {name:"La Clape AOP – Château Mire l’étang Cuvée Coigny (blanc) 75cl", price:19.50, category:"Vins", sub:"Blancs"},
    {name:"Picpoul de Pinet AOP – Beauvignac Tradition (blanc) 75cl", price:18.50, category:"Vins", sub:"Blancs"},
    {name:"IGP Côtes de Gascogne – Domaine de Joy Enjoy Moelleux (blanc) 75cl", price:18.50, category:"Vins", sub:"Blancs"},

    {name:"Champagne AOP – Paul Romain (bulles) 75cl", price:40.00, category:"Vins", sub:"Bulles"},

    {name:"Cave de Labastide – Comté Tolosan Les 3 bastides (pichet 50cl)", price:5.50, category:"Vins", sub:"Pichet"},
    {name:"Cave de Labastide – Comté Tolosan Les 3 bastides (pichet 25cl)", price:3.50, category:"Vins", sub:"Pichet"},
    {name:"Cave de Labastide – Comté Tolosan Les 3 bastides (verre 15cl)", price:8.50, category:"Vins", sub:"Pichet"},

    // ——— Menus (affichage informatif)
    // ——— Nos Menus (structure alignée au PDF/visuel)

// 1) Menu du Midi (formules)
{
  name: "Menu du Midi",
  price: null, // deux formules tarifaires ci-dessous
  category: "Menus",
  sub: "Midi",
  desc: {
    "Formules": [
      "Entrée/Plat ou Plat/Dessert — 15,90€",
      "Entrée/Plat/Dessert — 17,90€",
      "(les midis sauf week-end & jours fériés)"
    ],
    "Entrées": [
      "Nems",
      "Salade de Nems",
      "Salade Thaï au poulet",
      "Bouchées vapeur (porc crevette)"
    ],
    "Plats": [
      "Porc au caramel",
      "Poulet au curry",
      "Boeuf Lock-Lack (supp 2€)",
      "Poisson sauce aigre douce",
      "Accompagné de riz nature (supp 1,5€ riz cantonnais)"
    ],
    "Desserts": [
      "Salade de fruits frais",
      "Glaces (2 parfums au choix)",
      "Nougatines",
      "Banane Caramélisée"
    ]
  }
},

// 2) Spécialité sur commande — Fondue Thaï
{
  name: "Spécialité sur commande – Fondue Thaï",
  price: 35.00, // prix par personne
  category: "Menus",
  sub: "Spécialités",
  desc: {
    "Notes": [
      "24h avant",
      "à partir de 2 personnes",
      "Prix par personne"
    ],
    "Contenu": [
      "Assortiment de viandes",
      "Fruits de mer",
      "Légumes",
      "Vermicelles"
    ]
  }
},

// 3) Menu Dégustation
{
  name: "Menu Dégustation",
  price: 29.00,
  category: "Menus",
  sub: "Dégustation",
  desc: {
    "Entrées": [
      "Assiette Dégustation",
      "Salade Thaï fruits de mer (🌶️)",
      "Potage crabe crevette",
      "Salade boeuf nems"
    ],
    "Plats": [
      "Pad Thaï au poulet",
      "Brochettes boeuf canard",
      "Amok (🌶️)",
      "Crevettes et seiches sauce piquante (🌶️)",
      "Accompagné de riz nature (supp 1,5€ riz cantonnais)"
    ],
    "Desserts": [
      "Raviolis de banane",
      "Salade de fruits frais",
      "Coupe de glace (2 parfums au choix)",
      "Colonel"
    ]
  }
},

// 4) Menu Thaï Square
{
  name: "Menu Thaï Square",
  price: 24.00,
  category: "Menus",
  sub: "Thaï Square",
  desc: {
    "Entrées": [
      "Assiette composée",
      "Salade porc nems",
      "Salade Thaï au poulet (🌶️)",
      "Bouchées vapeur"
    ],
    "Plats": [
      "Boeuf Lock-Lack",
      "Porc saté (🌶️) — sur plaque chauffante",
      "Poisson sauce Thaï (🌶️)",
      "Seiches sauce piquante (🌶️)",
      "Accompagné de riz nature (supp 1,5€ riz cantonnais)"
    ],
    "Desserts": [
      "Salade de fruits frais",
      "Glaces (2 parfums au choix)",
      "Banane grillée flambée (rhum ou saké — supp 1,5€)",
      "Banane Caramélisée"
    ]
  }
},

// 5) Menu Kid (–10 ans)
{
  name: "Menu Kid (–10 ans)",
  price: 10.00,
  category: "Menus",
  sub: "Enfants",
  desc: {
    "Entrée": [
      "2 nems",
      "3 beignets de poulet"
    ],
    "Plat": [
      "Riz nature ou riz cantonnais"
    ],
    "Dessert": [
      "Coupe de glace (1 parfum au choix)"
    ],
    "Notes": [
      "Enfant de –10 ans"
    ]
  }
},

  ];

  const CURRENCY = "€";

  // ————————————————————————————————————————
  // Utilitaires
  // ————————————————————————————————————————
  const formatCurrency = v => new Intl.NumberFormat('fr-FR', {style:'currency', currency:'EUR'}).format(v);
  const uniq = arr => [...new Set(arr)].sort((a,b)=>a.localeCompare(b,'fr'));

  // ————————————————————————————————————————
  // Construction des filtres
  // ————————————————————————————————————————
  const q = document.getElementById('q');
  const catSel = document.getElementById('category');
  const subSel = document.getElementById('subcategory');
  const grid = document.getElementById('grid');
  const quick = document.getElementById('quickChips');
  const count = document.getElementById('count');

  const CATS = uniq(MENU.map(i => i.category));
  const SUBS_BY_CAT = Object.fromEntries(CATS.map(c => [c, uniq(MENU.filter(i => i.category===c).map(i => i.sub))]));

  function fillSelect(sel, options, withAll=true){
    sel.innerHTML = "";
    if(withAll) sel.append(new Option("Toutes", ""));
    options.forEach(o => sel.append(new Option(o, o)));
  }
  fillSelect(catSel, CATS);
  fillSelect(subSel, uniq(MENU.map(i => i.sub)));

  catSel.addEventListener('change', () => {
    const c = catSel.value;
    const subs = c ? SUBS_BY_CAT[c] || [] : uniq(MENU.map(i => i.sub));
    fillSelect(subSel, subs);
    render();
  });

  // Filtres rapides : viande / boeuf / canard / épicé / sans alcool etc.
  const QUICK = [
    {key:"menus", label:"Menus", test: it => it.category === "Menus"},
    {key:"boeuf", label:"Bœuf", test: it => /boeuf|bœuf/i.test(it.name) || it.tags?.includes("boeuf")},
    {key:"canard", label:"Canard", test: it => /canard/i.test(it.name) || it.tags?.includes("canard")},
    {key:"poulet", label:"Poulet", test: it => /poulet/i.test(it.name) || it.tags?.includes("poulet")},
    {key:"crevette", label:"Crevettes", test: it => /crevette/i.test(it.name) || it.tags?.includes("crevette") || it.tags?.includes("crevettes")},
    {key:"curry", label:"Curry", test: it => /curry/i.test(it.name) || it.tags?.includes("curry")},
    {key:"épicé", label:"Épicé", test: it => /piquant|piquante|épicé/i.test(it.name) || it.tags?.includes("épicé")},
    {key:"sans alcool", label:"Sans alcool", test: it => it.category==="Boissons" && it.sub!=="Digestifs" && it.sub!=="Apéritifs" && it.sub!=="Bières"}
  ];
  const activeQuick = new Set();
  QUICK.forEach(({key,label}) => {
    const b = document.createElement('button');
    b.className = "chip";
    b.type = "button";
    b.textContent = label;
    b.setAttribute('aria-pressed','false');
    b.addEventListener('click', () => {
      if(activeQuick.has(key)){ activeQuick.delete(key); b.setAttribute('aria-pressed','false'); }
      else { activeQuick.add(key); b.setAttribute('aria-pressed','true'); }
      render();
    });
    quick.appendChild(b);
  });

  q.addEventListener('input', render);
  subSel.addEventListener('change', render);

  // ————————————————————————————————————————
  // Rendu
  // ————————————————————————————————————————
  function cardHTML(it){
    const price = it.price!=null ? `<span class="price">${formatCurrency(it.price)}</span>` : "";
    let desc = "";

    if (it.desc) {
        if (typeof it.desc === 'object' && !Array.isArray(it.desc)) {
            // Handles Menu Dégustation and Menu du Midi
            let objectDesc = '<div class="menu-details">';
            for (const key in it.desc) {
                objectDesc += `<h4>${key}</h4>`;
                const items = it.desc[key];
                if (Array.isArray(items)) {
                    objectDesc += `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
                }
            }
            objectDesc += '</div>';
            desc = objectDesc;
        } else if (Array.isArray(it.desc)) {
            // Fallback for any other array-based desc
            desc = `<ul class="desc-list">${it.desc.map(d => `<li>${d}</li>`).join('')}</ul>`;
        } else {
            desc = `<p class="desc">${it.desc}</p>`;
        }
    }

    const tags = (it.tags||[]).map(t => `<span class="badge">${t}</span>`).join("");
    const sub = it.sub ? `<span class="sub">${it.sub}</span>` : "";

    return `
    <article class="card ${it.category === 'Menus' ? 'card-menu' : ''}">
      <div class="row">
        <h3>${it.name}</h3>
        ${price}
      </div>
      <div class="meta">
        ${sub}
        <div class="badges">${tags}</div>
      </div>
      ${desc}
    </article>`;
  }

  function render(){
    const needle = q.value.trim().toLowerCase();
    const cat = catSel.value;
    const sub = subSel.value;

    let list = MENU.slice();
    if(cat) list = list.filter(i => i.category === cat);
    if(sub) list = list.filter(i => i.sub === sub);
    if(needle) list = list.filter(i => (i.name+" "+(i.desc||"")+" "+(i.tags||[]).join(" ")).toLowerCase().includes(needle));

    if(activeQuick.size){
      list = list.filter(it => [...activeQuick].every(key => (QUICK.find(q=>q.key===key).test(it)) ));
    }

    let html = "";
    const filtersActive = needle || cat || sub || activeQuick.size > 0;

    if (filtersActive) {
      html = list.map(cardHTML).join("");
    } else {
      const grouped = {};
      list.forEach(item => {
        if (!grouped[item.category]) grouped[item.category] = {};
        if (!grouped[item.category][item.sub]) grouped[item.category][item.sub] = [];
        grouped[item.category][item.sub].push(item);
      });

      const orderedCategories = [...new Set(MENU.map(i => i.category))];

      orderedCategories.forEach(category => {
        if (grouped[category]) {
          html += `<h2 class="category-title">${category}</h2>`;
          const subcategories = grouped[category];
          const orderedSubcategories = [...new Set(MENU.filter(i => i.category === category).map(i => i.sub))];

          orderedSubcategories.forEach(subcategory => {
            if (subcategories[subcategory]) {
              html += `<h3 class="subcategory-title">${subcategory}</h3>`;
              html += subcategories[subcategory].map(cardHTML).join("");
            }
          });
        }
      });
    }

    if (grid) {
      grid.innerHTML = html;
    }
    if (count) {
      count.textContent = list.length + " élément" + (list.length>1?"s":"");
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    render();
  });
