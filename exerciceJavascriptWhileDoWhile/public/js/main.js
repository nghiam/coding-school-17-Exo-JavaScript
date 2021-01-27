// Boucles : While && Do...While

// Exo1

// let valeur;

// while (!valeur) {
//    valeur = prompt("Entrez à nouveau une valeur :");
// }

// do {
//     valeur = prompt("Entrez un nouveau chiffre :")
// } while ( valeur < 10);

// let valeur = 0;
// while (valeur < 100) {
//     console.log(valeur);
//     valeur++;
// }

// let valeur = 3;
// while (valeur <= 6) {
//     console.log(valeur);
//     valeur++;
// }

// let valeur = 0;
// while (valeur <= 20) {
//     console.log(valeur);
//     valeur= valeur+2; // valeur += 2 
// }

// Exo2

let panierLegumes = ["a","b","c","d"];

let caisseLegumes = [];

let Legumes = [];

while (caisseLegumes.length > 4) {
    console.log(panierLegumes.shift());
    console.log(Legumes.push(caisseLegumes));
}