/* ----------------------
  LES SELECTEURS jQUERY
----------------------- */

// -- Format : $('selecteur');
// -- En jQuery, tous les sélecteurs CSS sont disponibles...

$(function() {
    // -- DOM READY !

    l = e => console.log(e);

    // -- Selectionner toutes les balises SPAN !
    l(document.getElementsByTagName('span'));
    l($('span'));

    // -- Je veux selectionner mon Menu grâce à son ID
    l(document.getElementById('menu'));
    l($('#menu'));

    // -- Selectionner une classe...
    l(document.getElementsByClassName('MaClasse'));
    l($('.MaClasse'));

    // -- Selectionner un Attribut
    l($('[href="https://www.google.fr"]'));

});