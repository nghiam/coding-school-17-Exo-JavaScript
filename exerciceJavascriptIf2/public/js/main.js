// EX1  Les réponses booléenes (part 1)

// let nombre = parseInt(prompt ("Quel est votre premier nombre?"));

// let nombre1 = parseInt(prompt ("Quel est votre deuxieme nombre?"));

// if (nombre === nombre1){
//     alert('Le nombre'+nombre + 'est égal à' +nombre1 )
// } else {
//     alert('le nombre'+nombre + 'n est pas égal à' +nombre1)
// }

// EX2 Les réponses booléennes (part 2)

// let nombre = prompt ("Quel est votre premier nombre?");
// alert(nombre);

// let nombre1 = prompt ("Quel est votre deuxieme nombre?");
// alert(nombre1);

// if ( nombre < nombre1 ){
//     alert('Le nombre'+ nombre + 'est plus petit que le second nombre' + nombre1)
// } else {
//     alert('le nombre' + nombre + 'n est pas plus petit que le second nombre' + nombre1);
// }


// EX3 Les réponses booléenes (part 3)

// let nombre =  prompt ("Quel est votre premier nombre?");
// alert(nombre);

// let nombre1 = prompt ("Quel est votre deuxieme nombre?");
// alert(nombre1);

// let nombre2 = prompt ("Quel est votre troisieme nombre?");
// alert(nombre2);


// let resultat = (parseInt(nombre) + parseInt(nombre1))


// if ( nombre2 < resultat ){
//     alert( 'Les deux premieres valeurs valent :' + resultat );
// } else {

// } alert('la somme de' + nombre + '+' + nombre1 + 'est-elle plus grande que le ' +nombre2 + '? :' + (nombre2 < resultat));


// EX4 Strings et calculs


// let phrase = prompt ("Ecrivez une phrase");

// let caractere = prompt("Combien de caracteres sont présents dans la phrase?")

// caractere = parseInt(caractere); // changement de string vers number

// alert(caractere);

// console.log(typeof caractere); //string 
// console.log(typeof phrase.length); //number

// let nbr = phrase.length
// let chf = caractere - phrase.length
    
//     chf = Math.abs(chf)

// if ( caractere == phrase.length){
    
//     alert("affiche moi le nombre de caractere: " + caractere);
//     alert("affiche moi le nombre de caractère:" + phrase + ' mesure' +nbr);
// } else {
//     alert("Faux, vous êtes à" + chf + "caractere de la bonne réponse")
// } 

// EX5 Des maths sans Maths

// let nbr = parseInt(prompt ("donnez moi un nombre"));
// let nbr1 = parseInt(prompt ("donnez moi un deuxieme nombre"));


// if(nbr >= nbr1){
//     alert(nbr-nbr1)
// } else {
//     alert(nbr-nbr1)
// }

// EX6 

//  let nb1 = parseInt(prompt ("donnez moi un nombre"));
//  let nb2 = parseInt(prompt ("donnez moi un deuxieme nombre"));
//  let nb3 = parseInt(prompt ("donnez moi un troisieme nombre"));


//  if( isNaN(nb1) || isNaN(nb2) || isNaN(nb3)){
//   alert("au moins une des deux entrées n'est pas un nombre")
// } else if(nb1 > nb2 && nb1 > nb3) {
//   alert("nombre 1")
// } else if(nb2 > nb3 && nb2 > nb1) {
//   alert("nombre 2")
// } else if(nb3 > nb2 && nb3 > nb1) {
//   alert("nombre 3")
// } else {
//   alert("les trois sont égaux")
//   }
// alert("entre" + vari + ", " + vari1 + "et " + vari2 + reponse + " est le plus grand. ");

// EX 7

// let prenom = prompt ("Veuillez indiquer votre prénom");

// if (!prenom){ //prenom.lenght == 0
//   prompt("Problème.. Veuillez indiquer votre prénom");
// }
// if (prenom == 0){
//   alert("Pas de prénom");
// }
// else {
//   alert("Bonjour " + prenom);
// }

// EX8

// let reponse = confirm("Souhaitez-vous vous abonner ?");


// if ( reponse == true){
//   let reponse2 = prompt("Quelle formule désirez-vous? Luxe ou Normal? ")
//   if (reponse2.toLowerCase() == "luxe"){
//     alert("Félicitations pour votre abonnement à la formule luxe");
//   } else if ( reponse2.toLowerCase() == "normal"  ){
//     alert("Merci pour votre abonnement")
//   }
  
// } else {
//   let reponse3 = confirm("Êtes vous sur de n'avoir rien choisi?");
//   if ( reponse3 == true){
//     alert("si c'est oui, je suis triste de l'apprendre");
//   } else {
//     reponse = prompt("Désirez-vous Luxe ou Normal?")
//   }
//   if (reponse == "luxe") {
//     alert("Félicitations pour votre abonnement à la formule luxe")
//   } else if ( reponse == "normal") {
//     alert("Merci pour votre abonnement.");
//   } else {
//     alert("Au revoir.")
//   }
// } 

// EX9

// let question1 = prompt("Comment allez-vous?").toLowerCase();

// let question2 = prompt("Quel temps fait-il aujourd'hui?").toLowerCase();

// let reponse1 = "je vais bien";

// let reponse2 = "il fait ensoleillé";

// if (question1 != reponse1 && question2 != reponse2){
//   alert("Vous avez échoué!");
// }
// else if ( question1 === reponse1 && question2 === reponse2){
//   alert("Félicitations!!");
// } else {
//   alert("Vous y êtes presque!");
//   if (question1 == reponse1){
//     alert("Vous vous êtes trompé à la question numero 2");
//   } else {
//     alert("Vous vous êtes trompé à la question numero 1");
//   }
// }

// EX10

// let age = parseInt(prompt("Quel âge avez-vous? "));

// if (age > 18){
//   alert("Vous êtes majeur, vous pouvez réserver");
// } else if ( age < 0) {
//   alert("Revenez quand vous serez né !");
// } else if ( age == 18 ) {
//   alert("Réservez mais attention, c'est tout juste et ce film peut être choquant !");
// } else if ( isNaN(age)) {
//   alert("Vu que vous ne savez pas lire une instruction, je présume que vous n'avez pas l'âge.");
// }
// else {
//   alert("Vous êtes mineur, revenez plus tard.")
// } 

// Bonus 1

// let annee = prompt("quelle est votre annee de naissance?");
// let date = new Date();
// let age = date.getFullYear() - annee;


// EX11

let vacances = confirm("Voulez-vous partir en vacances ?");
let riche = confirm("Est-ce que vous êtes riche ?");
let chat = confirm("Est-ce que vous avez un chat ?");

if ( vacances == false) {
  alert("Pas de problème, ne partez pas en vacances")
}

if ( riche == false || chat == true) {
  alert("Même si vous le vouliez, vous ne pouriez pas partir...")
}
 
if ( riche == true && chat == false ) {
  alert("Vous pourriez partir en vacance si vous le vouliez.")
}

// if ( riche == true && chat == false && vacances == true ) {
//   alert("Tout est parfait, partez en vacance !")
// }

if (!(!riche == true || !chat == false || !vacances == true)) {
  alert("Tout est parfait, partez en vacance !")
}







