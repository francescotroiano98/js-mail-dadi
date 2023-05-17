const mailList = ["francescototti10@gmail.com", "paulodybala21@gmail.com", "lionelmessi@gamil.com"];

const email = prompt("What's your email?");

for (let i = 0; i <= mailList.length - 1; i++){

    if (mailList[i] === email) {
        console.log(i)
    
        alert("Puoi entrare")
    }  else {
        alert("Non puoi entrare")
    }
}   
