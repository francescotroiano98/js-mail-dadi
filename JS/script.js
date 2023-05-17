
const button = document.querySelector("button.mybutton");
button.addEventListener("click", function(){

    let utente = Math.floor(Math.random() * 6) + 1;
    console.log(parseInt(utente));
    document.getElementById("utente").innerHTML = utente;

    let com = Math.floor(Math.random() * 6) + 1;
        console.log(parseInt(com));
        document.getElementById("com").innerHTML = com;
    if (utente > com) {
        alert("Hai Vinto");

    } else if (utente < com) {
        alert("Hai perso");
        
    } else if (utente = com) {
        alert("Hai pareggiato");
    }
})