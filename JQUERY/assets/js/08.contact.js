// -- Initialisation de jQuery (DOM READY)
$(function() {

    // -- Tableau indexé d'objet Contact
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    function ajouterContact(Contact) {

        // -- Ajouter "Contact" dans "CollectionDeContacts"
        CollectionDeContacts.push(Contact);
        console.log(CollectionDeContacts);
        
        // -- On cache la phrase : Aucun Contact.
        $('.aucuncontact').hide();

        // -- Mise à jour du HTML
        $(`
            <tr>
                <td>` + Contact.nom + `</td>
                <td>${Contact.prenom}</td>
                <td>${Contact.email}</td>
                <td>${Contact.tel}</td>
            </tr>
        `).appendTo($('#LesContacts > tbody'));

        // -- Réinitialisation du Formulaire
        reinitialisationDuFormulaire();

        // -- Affiche une Notification
        $('.alert-contact').fadeIn().delay(4000).fadeOut();

    }

    function reinitialisationDuFormulaire() {
        //  -- En jQuery 
        $('#contact').trigger('reset');
        $('#contact').get(0).reset();
        $('#contact .form-control').val('');
        
        // -- En Javascript :
        document.getElementById('contact').reset();
    }

    function validateEmail(email){
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var valid = emailReg.test(email);
    
        if(!valid) {
            return false;
        } else {
            return true;
        }
    }
    
    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        var valid = telReg.test(tel);
    
        if(!valid) {
            return false;
        } else {
            return true;
        }
    }

    function unContactEstPresent(Contact) {

        // -- Booleen qui indique la présence d'un contact dans ma collection
        let estPresent = false;

        // -- On parcourt le tableau à la recherche d'une correspondance
        for(let i = 0 ; i < CollectionDeContacts.length ; i++) {

            if(Contact.email === CollectionDeContacts[i].email) {
                // -- Si une correspondance est trouvé "estPresent" passe à VRAI (true)
                estPresent = true;
                // -- On arrête la boucle, plus besoin de poursuivre.
                break;
            }

        }

        // -- On retourne le booleen
        return estPresent;

    }

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon formulaire
    $('#contact').on('submit', function(e) {

        // -- Stopper la redirection de la page
        e.preventDefault();

        // -- Récupération des champs à vérifier
        var prenom, nom, email, tel;
        nom     = $('#nom');
        prenom  = $('#prenom');
        email   = $('#email');
        tel     = $('#tel');

        // -- Vérification des informations
        let mesInformationsSontValides = true;

        // -- Vérification du Prénom
        if(prenom.val().length === 0) {
            // -- Le champ est incorrect, car il n'a pas été rempli...
            mesInformationsSontValides = false;
        }

        // -- Vérification du Nom
        if(nom.val().length === 0) {
            // -- Le champ est incorrect, car il n'a pas été rempli...
            mesInformationsSontValides = false;
        }

        // -- Vérification du Mail
        if(!validateEmail(email.val())) {
            mesInformationsSontValides = false;
        }

        // -- Vérification du Tel
        if(!validateTel(tel.val())) {
            mesInformationsSontValides = false;
        }

        if(mesInformationsSontValides) {

            // -- Tout est correct
            let Contact = {
                //cle       //valeur
                nom         : nom.val(),
                prenom      : prenom.val(),
                email       : email.val(),
                tel         : tel.val()
            };

            /**
             * Si le contact est présent dans la collection, on informe l'utilisateur
             * Sinon, on peut procéder à la suite du traitement.
             */
            if(unContactEstPresent(Contact)) {
                reinitialisationDuFormulaire();
                alert('ATTENTION\nCe contact est déjà présent !');
            } else {
                ajouterContact(Contact);
            }

        } else {

            // -- Tous les champs n'ont pas été remplis.
            alert('ATTENTION\nVeuillez bien remplir tous les champs.');

        }

    })

})
