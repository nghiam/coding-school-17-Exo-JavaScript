// EX1
console.log(1==1);
// EX2
console.log(1===1);
// EX3

// let prenom = prompt("Quel est votre prénom ?");
// alert(prenom);

// prenom.length = 5;


// if (prenom.length < 5 ) {
//     alert("Ton prénom est trop court");
// } else {
//     alert("c'est carré");
// }

// EX4

// let addition = prompt("Résouds cette adition : 2+2=?");

// alert(addition);


// if (addition == 4) {
//     alert("Félicitations!");
// } else { 
//     alert("C'est incorrect");
// }

// EX5

// let multiplication = prompt ("Résouds cette multiplication : 2x2 = ?");

// alert(multiplication);

// if (multiplication == 4){
//     alert("la réponse était bien 4");
// } else {
//     let x = multiplication - 4;
//     x = Math.abs(x);
    
//     alert("tu n'étais qu'à " + x + " unités de la bonne réponse")
// }

// EX6

// let tab = []
// let elem = prompt ("Entrez quelque chose");
// tab.push(elem)
// if (tab.length == 3){
//     alert(tab)
// } else {
//     alert(3 - tab.length);
// }
// let elem = prompt ("Entrez quelque chose");
// tab.push(elem)
// if (tab.length == 3){
//     alert(tab)
// } else {
//     alert(3 - tab.length);
// }
// let elem = prompt ("Entrez quelque chose");
// tab.push(elem)
// if (tab.length == 3){
//     alert(tab)
// } else {
//     alert(3 - tab.length);
// }
// EX7


let grandNombres = [];
let petitNombres = [];

let reponse = prompt("Insérez un nombre")
if (reponse >=12){
    grandNombres.push(reponse);
} else {
    petitNombres.push(reponse);
}
reponse = prompt("Insérez un nombre")
if (reponse >=12){
    grandNombres.push(reponse);
} else {
    petitNombres.push(reponse);
}
reponse = prompt("Insérez un nombre")
if (reponse >=12){
    grandNombres.push(reponse);
} else {
    petitNombres.push(reponse);
}
alert(
  "Grands nombres : " + grandsNombres + " / Petits nombre : " + petitsNombres
)


