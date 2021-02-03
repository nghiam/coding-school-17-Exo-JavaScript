// Exo : Objets

// Consigne1
// 1.

// let personne1 = {
//     prenom : "Nghia",
//     nom : "Mai",
//     age : 30,
//     taille : 174,
// };

// console.log(personne1.age);


// 2.

// let personne2 = {
//     prenom : "Marc",
//     nom : "Mouton",
//     age : 45,
//     taille : 187,
// };

// let personne3 = {

// }


// 3.


// personne3.nom = personne1.nom;
// personne3.age = personne2.age;
// personne3.taille = 167;

// console.log(personne3);

// 4.

// let gauthier = {
//     saluer(){
//         console.log(`Salut ${personne2.prenom}`)
//     }
// }
// gauthier.saluer();

// 5.


// let voleur = {
//     usurpation(x){
//         this.nom = x.nom;
//         this.age = x.age;
//     }
// }

// voleur.usurpation(personne2)
// console.log(voleur);


// Consigne2

// 1.

// let personnage = {
//     nom : "Marshall",
//     prenom : "Frank",

//     sePresenter(){
//         console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`);
//     }
// }

// personnage.sePresenter();


// 2.

// let objet = {
//     nom : "Dadou",
//     age : 0,
//     changeAge(){
//         this.age = parseInt(prompt("Changez votre âge : "));
//     }
// }
// objet.changeAge();
// alert(objet.nom +" a "+ objet.age +" ans");



// Consigne3


// 1.
// 2.
// 3.

// let personnage1 = {
//     nom : "Francois",
//     panier : ["huile","sel","poivre"],

//     derober() {

//         let ingredient = personnage2.panier.shift()
//         personnage1.panier.push(ingredient)
//         ingredient = personnage2.panier.shift()
//         personnage1.panier.push(ingredient)

//     }
// }

// let personnage2 = {
//     nom : "Sergio",
//     panier : ["ciboulette","noix","muscade","biscotte"],
// }

// personnage1.derober();
// console.log(personnage2);
// console.log(personnage1);

// Consigne4


// 1.

let vieille_dame = {
    age : 79,
    prenom : "Ludvik",
    nom : "Moluz",
    moral : "mal",
    objet : "canne",

    parler(){
        if ("moral" == "mal") {
            console.log(`Vous me dérangez et je vous frappe avec ma ${objet}`);
        }
    }
}

vieille_dame.parler();





