// you can write js here
let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

let celcius = kelvins - 273;

let fahrenheits = celcius * (9/5) + 32;
fahrenheits = Math.floor(fahrenheits);
// Ici on convertit les celcius en fahrenheit et on utilise la methode
// .floor() pour arrondir à l'entier inférieur

console.log("La température en celcius est de " + celcius);
console.log("La température en fahrenheit est de " + fahrenheits);




