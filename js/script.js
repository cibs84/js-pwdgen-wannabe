// INPUT - Nome, cognome e colore preferito dell'utente
const userName = prompt('Inserirsci il tuo nome');
const userSurname = prompt('Inserisci il tuo cognome');
const favouriteColor = prompt('Inserisci il tuo colore preferito');

// LOGICA - Concatenare le tre costanti in una variabile
let userPwd = userName + userSurname + favouriteColor + '21';

// OUTPUT - Scrivere la password generata nel tag h1#pwd
document.getElementById('pwd').innerHTML = userPwd;
