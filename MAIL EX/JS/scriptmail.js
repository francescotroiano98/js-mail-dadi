const mailList = ["francescototti10@gmail.com", "paulodybala21@gmail.com", "lionelmessi@gamil.com"];

const email = prompt("What's your email?");

for (let i = 0; i <= 2; i++){

    if (mailList[i] === email) {
        console.log(i)
    
        alert("Puoi entrare")
    }  else if (mailList[i] !== email)  { 

        alert("DOVEVI PRENOTARE L'INGRESSO, NON PUOI ENTRARE");
        
        console.log(i)
    }
    
}