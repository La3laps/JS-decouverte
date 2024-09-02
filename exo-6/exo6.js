var joeInfo = {
  name: "Joe's house",
  rooms: 5,
  garage: false,
  bathrooms: 1 + 2,
  cars: ["Clio", "Van"],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log("Nombre de voitures de Joe : " + joeInfo.cars.length);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log("Nombre de salles de bains de Joe : " + joeInfo.bathrooms);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.
joeInfo.garage = true;
if (joeInfo.garage) {
  console.log("Joe a un garage pour ses " + joeInfo.cars.length + " voitures!");
} else
  console.log(
    "Joe n'a pas de garage pour ses " + joeInfo.cars.length + " voitures!"
  );

console.log(
  "\n////////////////////////////////////////////////////////////////////\n"
);
////////////////////////////////////////////////////////////////////

const team = {};

team.players = [];
team.games = [];

// console.log(team);

function addPlayer(firstName, lastName, age) {
  let singular = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  team.players.push({
    singular,
  });
}

function addGame(opponent, teamPoints, opponentPoints) {
  let singular = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints,
  };

  team.games.push({
    singular,
  });
}

addPlayer("Pablo", "Sanchez", 21);
addPlayer("Victor", "Mauvavic", 19);
addPlayer("Kyler", "Irving", 18);
addPlayer("Jamy", "LeBron", 22);
addPlayer("Antony", "Parker", 20);

addGame("Broncos", 42, 27);
addGame("Raptors", 80, 70);
addGame("Celtics", 70, 68);
addGame("Lakers", 102, 50);
addGame("Timberwolves", 201, 20);

function calculatePoints() {
  let temp = 0;
  let resultAverage;
  let resultTotal;

  for (let i = 0; i < team.games.length; i++) {
    temp += team.games[i].singular.teamPoints;
  }

  resultAverage = temp / team.games.length;
  resultTotal = temp;

  return console.log(
    "Average points : " +
      resultAverage +
      "\nTotal number of points : " +
      resultTotal
  );
}

function findOldest() {
  let temp = 0;
  let name;
  for (let i = 0; i < team.players.length; i++) {
    let age = team.players[i].singular.age;

    if (temp < age) {
      temp = team.players[i].singular.age;
      name =
        team.players[i].singular.firstName +
        " " +
        team.players[i].singular.lastName;
    }
  }
  return console.log("Le joueur le plus agé " + name + " a " + temp + "ans.");
}

calculatePoints();
findOldest();
