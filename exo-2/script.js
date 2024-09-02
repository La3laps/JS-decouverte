const myDate = new Date();

const weekAlert = "Nous sommes en semaine.";
const weekendAlert = "Nous sommes le weekend!";

const isTesting = true;

let today;
let hour;

if (isTesting) {
  today = prompt("Quel jour sommes nous ? (chiffre)");
  hour = prompt("Quelle heure ?");
} else {
  today = myDate.getDay();
  hour = myDate.getHours();
}

if ((today == 5 && hour >= 17) || (today == 1 && hour < 9)) {
  console.log(weekendAlert);
} else if (today != 0 && today < 6) {
  console.log(weekAlert);
} else {
  console.log(weekendAlert);
}
