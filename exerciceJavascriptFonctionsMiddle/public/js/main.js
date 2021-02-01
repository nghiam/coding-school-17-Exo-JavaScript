// Exo 1 : reverseNumber


// let reverseNumber = (nombre) =>{
//     nombre = nombre + ""
//     return nombre.split("").reverse().join("")
// }
// console.log(reverseNumber(851));

// Exo 2 : Pair

// Version IF ELSe
// function estPair(nombre){
// if ( nombre % 2 == 0 ) {
//     console.log("Ton nombre est pair");
// } else {
//     console.log("Ton nombre est impair");
// }
// }
// estPair(11);

// Version SWITCH
// function estPair(nombre){
//     switch (nombre % 2) {
//         case 0 :
//             return("Le nombre " +nombre+ " est pair, il est divisible par 2");
//         case 1 :    
//             return("Le nombre " +nombre+ " est imppair, il est divisible par 2");
//         default:
//             return("raté")
//     }
// }
// estPair(12);


// Exo 3 : LogIn

// let index;
// function logIn(mdp){
//     if (mdp == index) {
//         alert("Vous êtes bien connecté")
//     } else {
        
//     }
// }

let logIn = () => {
let mdp;
do{
    mdp = prompt("Quelle est votre mot de passe?")
} while (mdp !== "god")
alert("Tu es connecté!!")
}
logIn()