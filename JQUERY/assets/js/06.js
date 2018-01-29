/* --------------------------------
  LES SELECTEURS D'ENFANTS jQUERY
-------------------------------- */

$(function() {

    l = e => console.log(e);

    // -- Je souhaite selectionner toutes les divs de ma page
    l($('div'));

    // -- Je souhaite selectionner la balise nav de ma page
    l($('nav'));

    // -- Je souhaite tous les éléments descendants directs (enfants) qui sont dans nav
    l($('nav').children());

    // -- Parmi ces descendants, uniquement les éléments "ul"
    l($('nav').children('ul'));

    // -- Je souhaite récupérer tous les éléments "li" de mon "ul"
    l($('nav').children('ul').find('li'));

    // -- Je souhaite récuperer uniquement le 2 ème élément de mes "li"
    l($('nav').find('li').eq(1));

    // -- Je souhaite connaitre le voisin immediat de ma "nav" ?
    l($('nav').next());
    l($('nav').next().next()); // Le voisin du voisin...
    l($('nav').prev()); // -- Le voisin d'avant
    
    // -- LES PARENTS
    l($('nav').parent());
    
});