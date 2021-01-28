// Boucles : While && Do...While

// Exo1

// let valeur;
// do {
//     valeur = prompt("Entrez une valeur");
// }while (!valeur.trim()); 

// let chiffre
// do {
//     chiffre = prompt("Entrez un chiffre plus grand que 10")
// } while ( chiffre < 10 || isNaN(chiffre));

// let i = 1
// while (i) {
//     console.log(i);
//     i++;
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

// let panierLegumes = ["a","b","c","d"];

// let caisseLegumes = [];


// while (panierLegumes.length > 0) {
    
    
//     caisseLegumes.push(panierLegumes.shift());

// }
// console.log(caisseLegumes);
// console.log(panierLegumes);

// Exo3

// let question = prompt("Qui est le plus bg de la C17?");
// let reponse = "Mahad"
// while (question !== reponse) {
//     question = prompt("Recommencez svp! Qui est le plus bg de la C17");
// }
// alert("Félicitations!");


// Exo4

// let enigme 
// do {
//     enigme = prompt("De quelle couleur est le cheval de Napoleon?");

// } while (enigme !==);
// alert("Bonne réponse");

// Exo5

let annee = 2021;
let randomYear = Math.floor(Math.random() * (annee - 1970)) + 1970;

let question 

let i = 1

let reponse = annee - randomYear;

do {
    question = prompt("Si je suis né(e) en "+randomYear+",quel âge ai-je aujourd’hui ?");
    i++;
} while (question != reponse && i <= 3);

if (question == reponse) {
    alert("Bonne réponse")
}else {
    
} alert("C'est pas bon!!")


// Ex6

