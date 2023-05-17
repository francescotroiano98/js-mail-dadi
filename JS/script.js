let utente = Math.floor(Math.random() * 6) + 1;
  console.log(parseInt(utente));

let com = Math.floor(Math.random() * 6) + 1;
    console.log(parseInt(com));

if (utente > com) {
    alert("Hai Vinto");
    
} else if (utente < com) {
    alert("Hai perso");
    
} else if (utente = com) {
    alert("Hai pareggiato");
}