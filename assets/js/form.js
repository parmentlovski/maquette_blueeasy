// Variables 

inputFullName = document.querySelector('#full_name');
inputEmail = document.querySelector('#email');
inputMessage = document.querySelector('#textarea');


// Regex 

lettres = /^[A-Za-z é-]{2,25}$/;
mail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


// Evenements 

inputFullName.addEventListener('blur', erreurFullName);
inputEmail.addEventListener('blur', erreurEmail);
inputMessage.addEventListener('blur', erreurMessage);

// Fonctions 


function erreurFullName() { // Fonctions Nom 


    mauvaiseSaisieFullName = document.querySelector('#mauvaiseSaisieFullName');

    if (document.querySelector('#full_name').value.match(lettres)) {
        mauvaiseSaisieFullName.innerHTML ="";
        return true;
    }

    else {
        mauvaiseSaisieFullName.innerHTML = 'Veuillez utiliser des caractères valides';
        return false;
    }

}


function erreurEmail() { // Fontions mail 

    mauvaiseSaisieMail = document.querySelector('#mauvaiseSaisieMail');

    if (document.querySelector('#email').value.match(email)) {
        mauvaiseSaisieMail.innerHTML ="";
        return true;
    }

    else {
        mauvaiseSaisieMail.innerHTML = 'Veuillez utiliser des caractères valides';
        return false;
    }
}

function erreurMessage() { // fonctions message

    mauvaiseSaisieMessage = document.querySelector('#mauvaiseSaisieMessage');

    if (document.querySelector('#textarea').value != ("")) {
        mauvaiseSaisieMessage.innerHTML ="";
        return true;
    }

    else {
        mauvaiseSaisieMessage.innerHTML = 'Veuillez indiquer votre message';
        return false;
    }

}