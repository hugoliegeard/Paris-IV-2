// -- Déclarer un Tableau Indexé. 
var monTableau = [];
var myArray    = new Array;

monTableau[0] = "Adeline";
monTableau[1] = "Hugo";
monTableau[2] = "Arnaud";

console.log(monTableau); // -- Affiche toutes les données.
console.log(monTableau[0]); // -- Adeline
console.log(monTableau[2]); // -- Arnaud

var NosPrenoms = ["Hana", "John", "Maxime", "Adnane","Jonathan"];
console.log(NosPrenoms);

// -- Déclarer et Affecter des Valeurs à un Objet.
// ⛔️ PAS DE TABLEAU ASSOCIATIF EN JAVASCRIPT ⛔️

var Coordonnee = {
    prenom  : "Hugo",
    nom     : "LIEGEARD",
    age     : 28
};

console.clear();
console.log(Coordonnee);
console.log(Coordonnee['prenom']);
console.log(Coordonnee.nom);

// -- Je vais créer 2 tableaux numériques
var listeDePrenoms  = ["Hugo", "Rodrigue", "Kristie"];
var listeDeNoms     = ["LIEGEARD", "NOUEL", "SOUKAI"];

// -- Je vais créer un tableau à 2 dimensions à partir de mes 2 tableaux.
var Annuaire = [ listeDePrenoms, listeDeNoms ];

// -- Afficher un Nom et un Prenom sur ma Page HTML !
document.write( Annuaire[0][1] );
document.write( ' ' );
document.write( Annuaire[1][1] );

    /* -------------------------------------------------\
    |                    EXERCICE :-)                   |   
    |   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   |
    |   Créez un Tableau à 2 dimensions appelé          |
    |   "AnnuaireDesStagiaires" qui contiendra          |
    |   toutes les coordoonnées pour chaque stagiaire.  |
    |                                                   |
    |   Ex. Nom, Prénom, Tel                            |
    \------------------------------------------------- */

var AnnuaireDesStagiaires = [
    { prenom : "Hugo",      nom : "LIEGEARD",   tel: "0783 97 15 15" },
    { prenom : "Adeline",   nom : "CLERE",      tel: "XXXX XX XX XX" },
    { prenom : "John",      nom : "GARCIA",     tel: "XXXX XX XX XX" },
];

/**
 * Le fait d'avoir des objets dans un tableau indexé ; nous avons
 * mis en place le format JSON
 */

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0].prenom);
console.log(AnnuaireDesStagiaires[1].prenom);

// -- Exemple de tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email       :   "wf3@hl-media.fr",
                        tel         : {
                                      fixe  : "0596 108 328",
                                      fax   : "0596 108 632",
                                      port  : "0783 97 15 15"
                                  },
                          adresse : {
                                        ville   : "Ducos",
                                        cp      : "97224",
                                        region  : "Martinique",
                                        pays    : {
                                                    codepays : "FR",
                                                    nompays  : "France"
                                                   }
                                    }
                      }
    },

    {
        prenom      : "John",
        nom         : "GARCIA",
        coordonnees : {
                        email       :   "john.garcia@hl-media.fr",
                        tel         : {
                                      fixe  : "0596 108 328",
                                      fax   : "0596 108 632",
                                      port  : "0783 XX XX XX"
                                  },
                          adresse : {
                                        ville   : "Fort de France",
                                        cp      : "97200",
                                        region  : "Martinique",
                                        pays    : {
                                                    codepays : "FR",
                                                    nompays  : "France"
                                                   }
                                    }
                      }
    },

    {
        prenom      : "Nicolas",
        nom         : "DUROCHER",
        coordonnees : {
                        email       :   "nicolas.durocher@hl-media.fr",
                        tel         : {
                                      fixe  : "0596 108 328",
                                      fax   : "0596 108 632",
                                      port  : "0783 XX XX XX"
                                  },
                          adresse : {
                                        ville   : "Le Lamentin",
                                        cp      : "97232",
                                        region  : "Martinique",
                                        pays    : {
                                                    codepays : "FR",
                                                    nompays  : "France"
                                                   }
                                    }
                      }
    },

];

console.log(Contacts);
console.log(Contacts[2].coordonnees.adresse.pays.nompays);

/* -------------------------------
        AJOUTER UN ELEMENT
-------------------------------- */

var Couleurs = ['Rouge', 'Jaune', 'Vert'];

//  -- Si je souhaite ajouter un élément dans mon tableau
// -- Je fait appel à la fonction push() qui me renvoi le nb d'éléments.
console.clear();
console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push('Orange');
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

// -- NB : La fonction unshift() permet d'ajouter un ou plusieurs éléments en début de tableau.

/* --------------------------------------------
    RECUPERER ET SORTIR LE DERNIER ELEMENT
--------------------------------------------- */

// La fonction pop() me permet de supprimer un ou plusieurs éléments de mon tableau et d'en récupérer la valeur. Je peux accessoirement récupérer cette valeur dans une variable.

var monDernierElement = Couleurs.pop();
console.log(Couleurs);
console.log(monDernierElement);

// -- La même chose est possible avec le premier élément en utilisant la fonction shift();

// -- NB: La fonction splice() vous permet de faire sortir un ou plusieurs éléments de votre tableau.