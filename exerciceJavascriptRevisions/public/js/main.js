//  Exo 1

// 1.
// let prenom = prompt("Entrez un prénom : ")

// alert(prenom.charAt(0));

// 2.

// let prenom = prompt("Entrez un prénom : ")

// alert(prenom.substring(1));

// 3. 

// let prenom = prompt("Entrez un prénom : ")

// if(prenom.length <= 4) {
    // alert("Votre prénom est trop court")
    // } else {
    // alert(prenom.charAt(4));
//}

// 4.

// let prenom = prompt("Entrez un prénom : ")

// if(prenom.length <= 4) {
// alert(prenom.charAt(prenom.length-1));
// alert("Votre prénom est trop court et il n'était qu'à " + prenom.length + " caractères")
// } else alert("Voici la dernière lettre de votre prénom : " + prenom.charAt(prenom.length - 1));



// 5.

// let prenom = prompt("Entrez un prénom :")


// console.log(prenom.toLowerCase());
// console.log(prenom);
// console.log(prenom.toUpperCase());
// console.log(prenom);
// console.log(prenom.charAt(0).toUpperCase() + prenom.slice(1).toLowerCase());
// console.log(prenom);
// console.log(prenom.charAt(0).toLowerCase() + prenom.slice(1).toUpperCase());


// ________________________________________________________________________

// Exo 2

// 1.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[2]);

// 2.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[0],tableau[tableau.length-1]);

// 3.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[1].replace('e','').toUpperCase()+ tableau[1].charAt(tableau[1].length - 1).toLowerCase());

// corr : console.log(tableau[1].substring(0, tableau[1].length-1).toUpperCase() + tableau[1].slice(-1).toLowerCase());

// 4.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[3].charAt(0));


// 5.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[4].replace('e',''));
// corr : console.log(tableau[4].slice(1));

// 6.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[0].substring(0,2));
// corr : console.log(tableau[0].substring(0,1).toUpperCase()+tab[0].substring(1,2).toLowerCase);

// 7.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[0] + tableau[2]);

// 8.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log( tableau[1].substring(0,Math.round(tableau[1].length / 2)) 
// + tableau[tableau.length-1].substring(Math.round(tableau[tableau.length-1]) / 2));

// 9.
// let tableau = ["abricot","banane","canard","doigt","element"];

// console.log(tableau[3].substring(0,2).toUpperCase() , tableau[4].toLowerCase() );

// 10.
// let tableau = ["abricot","banane","canard","doigt","element"];


// console.log(tableau[0].substring(0,2).charAt(0).toLowerCase() + tableau[0].substring(0,2).charAt(1).toUpperCase()  +" "+ tableau[1].substring(0,2).charAt(0).toLowerCase() + tableau[1].substring(0,2).charAt(1).toUpperCase() +" "+ tableau[2].substring(0,2).charAt(0).toLowerCase() + tableau[2].substring(0,2).charAt(1).toUpperCase() +" "+ tableau[3].substring(0,2).charAt(0).toLowerCase() + tableau[3].substring(0,2).charAt(1).toUpperCase() +" "+ tableau[4].substring(0,2).charAt(0).toLowerCase() + tableau[4].substring(0,2).charAt(1).toUpperCase());

// for (let i = 0; i <= 4; i++) {
//  console.log(tableau[i].substring(0,2).charAt(0).toLowerCase() + tableau[i].substring(0,2).charAt(1).toUpperCase());
    
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

// ________________________________________________________________________
// Exo 3 : Part II 

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

// for (let index = 0; index < tableau.length ; index++) {

//     if (index % 2 == 1) {
//         console.log(tableau[index].toUpperCase());
//     }
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

// for (let index = 0; index < tableau.length ; index++) {

//     if (index % 2 == 0) {
//         console.log(tableau[index].charAt(0).toUpperCase() + tableau[index].substr(1));
//     }
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

// for (let index = 0; index < tableau.length ; index++) {

//     if (index % 2 == 1 && tableau[index].length > 4 ) {
//         console.log(tableau[index]);
//     }
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

// for (let index = 0; index < tableau.length ; index++) {

//     if (index % 2 == 0 && tableau[index].length > 4) {
//         console.log(tableau[index].charAt(0).toUpperCase() + tableau[index].substr(1));
//     }
// }

// 6.

// let tableau = [
// "mick",
// "patrick",
// "homer",
// "mehdi",
// "witch",
// "poulard",
// "amen",
// "ludovic",
// "harry",
// ]

// // if (['a', 'e', 'm', 'f', 'y', 'n'].includes(prenom[0])) {

// for (let index = 0; index < tableau.length; index++) {
//     let prenom = 0;
//     if (tableau[index].charAt(0) == "a" || tableau[index].charAt(0) == "e" || tableau[index].charAt(0) == "m" || tableau[index].charAt(0) == "f" || tableau[index].charAt(0) == "y" || tableau[index].charAt(0) == "n")


//     console.log(tableau[index]); 
// }


// 7.

// let tableau = [
// "mick",
// "patrick",
// "homer",
// "mehdi",
// "witch",
// "poulard",
// "amen",
// "ludovic",
// "harry",
// ]

// for (let index = 0; index < tableau.length; index++) {
//     let prenom = 0;
//     if (tableau[index].length > 5 && tableau[index].charAt(0) == "a" || tableau[index].charAt(0) == "e" || tableau[index].charAt(0) == "m" || tableau[index].charAt(0) == "f" || tableau[index].charAt(0) == "y" || tableau[index].charAt(0) == "n") {
//         console.log(tableau[index]);
//     }
// }


// Exo 3 : Part III

// 1.