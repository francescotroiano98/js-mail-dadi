const mailListCalciatori = ["francescototti10@gmail.com", "paulodybala21@gmail.com", "lionelmessi@gamil.com"];

const email = prompt("What's your email?");
let mailcorretta = false;
for (let i = 0; i <= mailListCalciatori.length - 1; i++){

    if (mailListCalciatori[i] === email) {
        console.log(i)
        mailcorretta = true;
    }
    
}   
if (mailcorretta){
   
    console.log(mailcorretta);
    document.getElementById("enter").innerHTML = "Puoi entrare, sei nella mailListCalciatori"

} else {
   
    document.getElementById("notenter").innerHTML = "Non puoi entrare, non sei nella mailListCalciatori"
}    