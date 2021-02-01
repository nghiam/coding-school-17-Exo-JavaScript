// Exo 1

//1.
// let prenom = prompt("Entrez un prénom : ")

// alert(prenom.charAt(0));

//2.

// let prenom = prompt("Entrez un prénom : ")

// alert(prenom.substr(1));

//3. 

// let prenom = prompt("Entrez un prénom : ")
// alert(prenom.charAt(4));

// if(prenom.length <= 4) {
// alert("Votre prénom est trop court")
// } 

//4.

// let prenom = prompt("Entrez un prénom : ")

// if(prenom.length <= 4) {
// alert(prenom.charAt(prenom.length-1));
// alert("Votre prénom est trop court et il n'était qu'à " + prenom.length + " caractères")
// } else alert(prenom.charAt(4));

// 5.

// let prenom = prompt("Entrez un prénom :")

// alert(prenom.toLowerCase());
// alert(prenom.toUpperCase());
// alert(prenom.charAt(0).toUpperCase() + prenom.substr(1).toLowerCase());
// alert(prenom.charAt(0).toLowerCase() + prenom.substr(1).toUpperCase());

// ________________________________________________________________________

// Exo 2

// 1.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[2]);

// 2.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[0] , tableau[4]);

// 3.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[1].replace('e','').toUpperCase()+ tableau[1].charAt(tableau[1].length - 1).toLowerCase());

// 4.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[3].charAt(0));

// 5.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[4].replace('e',''));

// 6.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[0].substr(0,2));

// 7.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[0] +" "+ tableau[2]);

// 8.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log( tableau[1].substr(0,3) + tableau[4].substr(3));

// 9.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[2].substr(0,2).toUpperCase() + tableau[4] );

// 10.
// let tableau = ["abricot","banane","canard","doigt","element"];


// console.log(tableau[0].substr(0,2).charAt(0).toLowerCase() + tableau[0].substr(0,2).charAt(1).toUpperCase()  +" "+ tableau[1].substr(0,2).charAt(0).toLowerCase() + tableau[1].substr(0,2).charAt(1).toUpperCase() +" "+ tableau[2].substr(0,2).charAt(0).toLowerCase() + tableau[2].substr(0,2).charAt(1).toUpperCase() +" "+ tableau[3].substr(0,2).charAt(0).toLowerCase() + tableau[3].substr(0,2).charAt(1).toUpperCase() +" "+ tableau[4].substr(0,2).charAt(0).toLowerCase() + tableau[4].substr(0,2).charAt(1).toUpperCase());

// for (let i = 0; i <= 4; i++) {
//     console.log(tableau[i].substr(0,2).charAt(0).toLowerCase() + tableau[i].substr(0,2).charAt(1).toUpperCase());
    
// }
// ______________________________________________________________________________________________

// Exo 3 : Part I

// 1.
// let tableau = [
// "Mick",
// "Patrick",
// "Homer",
// "Mehdi",
// "Witch",
// "Poulard",
// "Amen",
// "Ludovic",
// "Harry",
// ]

// console.log(tableau);


// 2.

// let tableau = [
// "Mick",
// "Patrick",
// "Homer",
// "Mehdi",
// "Witch",
// "Poulard",
// "Amen",
// "Ludovic",
// "Harry",
// ]

// for (let index = 0; index <= 8; index++) {
//     console.log(tableau[index]);
    
// }

// 3.

// let tableau = [
// "Mick",
// "Patrick",
// "Homer",
// "Mehdi",
// "Witch",
// "Poulard",
// "Amen",
// "Ludovic",
// "Harry",
// ]

// for (let index = 0; index <= 8; index++) {
//     console.log(tableau[index].charAt(0));
// }

// 4.

// let tableau = [
// "Mick",
// "Patrick",
// "Homer",
// "Mehdi",
// "Witch",
// "Poulard",
// "Amen",
// "Ludovic",
// "Harry",
// ]

// for (let index = 0; index <= 8; index++) {
//     console.log(tableau[index].charAt(1));
// }

// 5.

// let tableau = [
// "Mick",
// "Patrick",
// "Homer",
// "Mehdi",
// "Witch",
// "Poulard",
// "Amen",
// "Ludovic",
// "Harry",
// ]

// for (let index = 0; index <= 8; index++) {
//     console.log(tableau[index].charAt(1) + tableau[index]);
// }

// 6.
// let tableau = [
// "Mick",
// "Patrick",
// "Homer",
// "Mehdi",
// "Witch",
// "Poulard",
// "Amen",
// "Ludovic",
// "Harry",
// ]

// for (let index = 0; index < tableau.length ; index++) {

//     if (index % 2 == 0) {
//         console.log(tableau[index]);
//     }
// }




