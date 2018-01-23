/* ---------------------------------
           LES BOUCLES 💀 ☠️
-----------------------------------*/

// -- La Boucle FOR

for(let i = 0 ; i <= 10 ; i++) {
    document.write('<p>Instruction executée : <strong>' + i + '</strong></p>');
}

document.write('<hr>');

var j = 1;
while(j <= 10) {
    document.write('<p>Instruction executée : <strong>' + j + '</strong></p>');

    // -- ATTENTION A NE PAS OUBLIER L'INCREMENTATION!
    j++;
}

/* -----------------------------
            EXERCICE
------------------------------ */

// -- Supposons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];

/**
 * CONSIGNE : Grâce à une boucle FOR, affichez la liste des prénoms
 * du tableau ci-dessus dans la console, ou sur votre page.
 */

 console.log(Prenoms);
for(let i = 0 ; i < Prenoms.length ; i++) {
    console.log(Prenoms[i]);
}
console.log('-----');
var j = 0;
while(j < Prenoms.length) {
    console.log(Prenoms[j]);
    j++;
}

console.log('-----');
// -- La Boucle ForEach
// -- ATTENTION A LA PERFORMANCE !!!

Prenoms.forEach(affichePrenom);

function affichePrenom(valeur, i) {
    console.log(i + ' ' + valeur);
}