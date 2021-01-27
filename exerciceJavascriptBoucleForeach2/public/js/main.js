// Exo1

// let multiplicateur = parseInt(prompt("Veuillez ajouter une valeur:"));

// for (let index = 0; index <= 10; index++) {
  
//   console.log(multiplicateur+"x"+index+"="+(multiplicateur x index));
    
// }

// Exo2

// let multiplicateur = parseInt(prompt("Veuillez ajouter une valeur:"));

// for (let index = 0; index <= 10; index=index+2) {
  
//   console.log(multiplicateur+"x"+index+"="+(multiplicateur x index));
    
// }

// Exo3


// for (let index = 20; index >= 0; index=index-2) {
  
//   console.log(index);
// }

// Exo4

// let array = ['Bilal','Cem','Gauthier','Laurie','Nghia','Yahya','Yassin','Abdel','Mahad','Mohamed','Redwane','Camille','Amine','Antoine','Ayoub','Salim','Said','Yasmina'];

// let longPrenoms = [];

// for (let index = 0; index < array.length; index++) {

//   let prenom = array[index];
//   if ( prenom.length > 5) {
//     longPrenoms.push(prenom);
//   }
// }
// console.log(longPrenoms)


// Exo4Bis

// let longPrenoms = ["Salim","Lui","Moi"]

// classe.forEach(element => {
//   if (element.length>5){
//     longPrenoms.push(element)
//   }

// });
// console.log(longPrenoms);

// Exo5

// let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];

// let grossesSommes = [];

// for (let index = 0; index < sommes.length; index++) {
//   let chiffre = sommes[index];

//   if ( chiffre >= 60 ){
//     grossesSommes.push(chiffre);
//   }
  
// }
// console.log(grossesSommes);

// Exo5Bis

// let somme = [
//     14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61
//    ]
 
//  let grossesSommes = []
 
//  somme.forEach(element => {
//    if (element>60) {
//      grossesSommes.push(element)
 
//    }
 
//  }); 
//  console.log(grossesSommes)


// Exo6

let donnees = [17, 7, 97, {}, "247", 67, 101, true, 34, 78 , [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];

console.log("tableau de départ :",donnees);

let typeString =[];
let typeNumber =[];
let typeObject =[];
let typeAutre =[];

let type =[];

for (let index = donnees.length; index > 0; index--) {
  switch (typeof type) {
    case 'string':
      typeString.push(donnees[0]);
      donnees.shift();
      break;
    case 'number':
      typeNumber.push(donnees[0]);
      donnees.shift();
      break;
    case 'object':
      typeObject.push(donnees[0]);
      donnees.shift();
      break;
    default:
      typeAutre.push(donnees[0]);
      donnees.shift();
      break;
  }
}

console.log("Nombres : ", typeNumber);
console.log("Strings : ", typeString);
console.log("Object : ", typeOther);
console.log("Autre : ", typeAutre);
console.log("Donnees(arrivée)", donnees);
