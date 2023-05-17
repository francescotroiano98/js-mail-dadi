const mailList = ["francescototti10@gmail.com", "paulodybala21@gmail.com", "lionelmessi@gamil.com"];

const email = prompt("What's your email?");

if (mailList[0 || 1 || 2] === email) {
    console.log(mailList)
    console.log(email)
    alert("Puoi entrare")
}  else {
    alert("DOVEVI PRENOTARE L'INGRESSO, NON PUOI ENTRARE");
    console.log(mailList)
    console.log(email)
}