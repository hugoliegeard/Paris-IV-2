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

$(function() {

    $('#contact').on('submit', function(e) {
        
        e.preventDefault();

        $('#contact .has-error').removeClass('has-error');
        $('#contact .help-block').remove();
        $('#contact .alert-danger').remove();

        let nom     = $('#nom');
        let prenom  = $('#prenom');
        let email   = $('#email');
        let tel     = $('#tel');

        if(nom.val().length === 0) {
            nom.parent().addClass('has-error');
            $('<p class="help-block">N\'oubliez pas de saisir votre nom !</p>').appendTo(nom.parent());
        } else {
            nom.parent().addClass('has-success');
        }

        if(prenom.val().length === 0) {
            prenom.parent().addClass('has-error');
            $('<p class="help-block">N\'oubliez pas de saisir votre prénom !</p>').appendTo(prenom.parent());
        } else {
            prenom.parent().addClass('has-success');
        }

        if( !validateEmail( email.val() ) ) {
            email.parent().addClass('has-error');
            $('<p class="help-block">Vérifiez votre adresse email.</p>').appendTo(email.parent());
        } else {
            email.parent().addClass('has-success');
        }

        if(!validateTel(tel.val())) {
            tel.parent().addClass('has-error');
            $('<p class="help-block">Vérifiez votre numéro de téléphone.</p>').appendTo(tel.parent());
        } else {
            tel.parent().addClass('has-success');
        }

        // -- Dans le cas d'une boucle de vérification
        // let ChampsAVerifier = $('#contact input:not([type=submit])');
        // console.log(ChampsAVerifier);

        // for(let i = 0 ; i < ChampsAVerifier.length ; i++) {
        //     if( $(ChampsAVerifier).eq(i).val().length === 0 ) {
        //         ...
        //     }
        // }

        if($(this).find('.has-error').length === 0) {

            $(this).replaceWith(`
                <div class="alert alert-success">
                    Votre contact à bien été transmis !
                    Nous vous répondrons dans les meilleurs délais.
                </div>
                `);

        } else {

            $(this).prepend(`
                <div class="alert alert-danger">
                    Nous n'avons pas été en mesure de valider votre contact. Vérifiez vos informations.
                </div>
            `);

        }

    })

});