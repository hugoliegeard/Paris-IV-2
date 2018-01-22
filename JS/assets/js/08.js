/* ---------------------------------
           LES CONDITIONS 🙏
-----------------------------------*/

// var MajoriteLegaleFR = 18;

// if(14 >= MajoriteLegaleFR) {
//     alert('Bienvenue !');
// } 
// // -- Le else n'est pas OBLIGATOIRE...
// else {
//     alert('Google');
// }

/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */

// -- 1. Déclarer la Majorité Légale
var MajoriteLegaleFR = 18;

// -- 2. Créer une fonction pour demande son age.

function verifierAge(age) {
    if(age >= MajoriteLegaleFR) {
        return true;
    } else {
        return false;
    }
}

// -- 3. Je demande a l'utilisateur son age
var age = parseInt( prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>") );

// -- 4. Vérification de l'age de l'utilisateur...
if(verifierAge(age)) {
    // -- 4a. J'affiche un message de bienvenue
    alert("Bienvenue sur mon site internet réservé pour les majeurs...");
    document.write('0_0 !!!');
}
else {
    // -- 4b. J'effectue une redirectionù
    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";
}

    /* -------------------------------------------------------------\
    |                  LES OPERATEURS DE COMPARAISON                |
    |                                                               |
    |   L'opérateur de comparaison " == " signifie : Egal à         |
    |   Il permet de vérifier que 2 variables sont identiques.      |
    |                                                               |
    |   L'opérateur de comparaison " === " signifique  :            |
    |   Strictement Egal à. Il va comparer la valeur et le type.    |
    |                                                               |
    |   L'opérateur de comparaison " != " : Différent de            |
    |   L'opérateur de comparaison " !== " : Strictement différent  |
    |   de.                                                         /
    | -------------------------------------------------------------*/ 

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// // -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

// // -- 1. Demander à l'utilisateur son adresse email
// var emailUser = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");

// // -- 2. Je vérifie si l'email saisie (emailUser) correspond avec la BDD (email)
// if(emailUser === email) {
//     // -- 2a. Tous est ok, je continue la vérification avec le mot de passe...

//     // -- 2a1. On demande a l'utilisateur son mot de passe
//     var mdpUser = prompt("votre mot de passe ?","<Saisissez votre mot de passe>");

//     // -- 2a2. Vérification du mot de passe
//     if(mdpUser === mdp) {
//         alert('Bienvenue !');
//     } else {
//         alert("ATTENTION, nous n'avons pas reconnu votre mot de passe.");
//     }

// } else {
//     // -- 2b. Les emails ne correspondent pas...
//     alert("ATTENTION, nous n'avons pas reconnu votre adresse email.");
// }

// -- Exemple avec les Fonctions

function monUtilisateurEstCorrect(emailUser, mdpUser) {
    if(emailUser === email && mdpUser === mdp) {
        return true;
    } else {
        return false;
    }
}

var emailUser = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");
var mdpUser = prompt("votre mot de passe ?","<Saisissez votre mot de passe>");

if(monUtilisateurEstCorrect(emailUser,mdpUser)) {
    alert('Bienvenue ' + emailUser);
} else {
   alert('ATTENTION, email/mot de passe incorrect.');
}

    /* -------------------------------------------------------- *\
   /                 ~ LES OPERATEURS LOGIQUES ~                  \
  /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \
    |                                                           |
    |           ##### L'opérateur ET : && ou AND #####          |
    |                                                           |
    |   Si la combinaison email user et email correspond, ET    |
    |   la combinaise mdpuser et mdp correspond.                |
    |                                                           |
    |   --> Dans cette condition, les 2 doivent OBLIGATOIREMENT |
    |   correspondre pour être validée.                        |
    |   Ex. if(emailUser == email && mdpUser == mdp) {...}      |
    |                                                           |
    |           ##### L'opérateur OU : || ou OR #####           |
    |                                                           |
    |   Si la combinaison emailUser et email correspond ET/OU   |
    |   la combinaison mdpUser et mdp correspond.
    |                                                           |
    |   --> Dans cette condition, au moins l'une des deux       |
    |   doit correspondre pour être validée.                    |
    |   Ex. if(emailUser == email || mdpUser == mdp) {...}      |
    |                                                           |
    |        ##### L'opérateur " ! " ou encore NOT #####        |
    |                                                           |
    |   L'Opérateur "!" signifique le CONTRAIRE DE... ou NOT    |
    |                                                           |
    |   var monUtilisateurEstApprouve = true;                   |
    |   if(!monUtilisateurEstAppprouve) {...}                   |
    |   Mon Utilisateur n'est pas approuvé.                     |
    |                                                           |
    |   Reviens à écrire :                                      |
    |   if(monUtilisateurEstApprouve == false) {...}            |
    |                                                           |
    \*---------------------------------------------------------*/