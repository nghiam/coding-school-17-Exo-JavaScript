// 1. ToDo

// let jour = prompt("Entrez un jour de la semaine:")

//   switch (jour) {
//     case "lundi":
//       console.log("On est lundi. Tu dois garder les enfants ce soir");
//       break;
//     case "mardi":
//       console.log("On est mardi. Tu as football");
//       break;
//     case "mercredi":
//       console.log("On est mercredi. Tu es en congé l'après-midi");
//       break;
//     case "jeudi":
//       console.log("On est jeudi. Tu as cours sur le Discord de Molengeek");
//       break;
//     case "vendredi":
//       console.log("On est vendredi. Tu as cours sur le Discord Molengeek puis tu dois jouer à Among Us. ");
//       break;
//     case "samedi":
//       console.log("On est samedi. Tu n'as pas cours et tu es en congé ");
//       break;
//     default:
//       console.log("Pas de jour pris en compte")
//   }

// 2. Sortez couverts

// let meteo = prompt("Quel temps fait-il aujourd'hui?")

//   switch(meteo){
//     case "beau":
//       console.log("il faut beau aujourd'hui");
//       break;
//     case "mauvais":
//       console.log("le temps n'est pas top aujourd'hui");
//       break;
//     default:
//       console.log("Ce n'est pas pris en compte")
//   }

// 3. Les 2 font la pair

let nombre = parseInt(prompt("donnez un nombre:"));
switch (Math.abs(nombre % 2)) {
    case 1:
        console.log(`${nombre} est un nombre impair`);
        break;
    case 0:
        console.log(`${nombre} est un nombre pair`);
        break;
    default:
        console.log(`${nombre} n'est pas un nombre`);
}

// 4. Maths "avancée"

let nombre = parseInt(prompt("donne moi un nombre"));
   let operation = prompt("donne moi une opérateur mathématique");
   let nombre2 = parseInt(prompt("donne moi un second nombre"));

   switch (operation) {
      case "*":
        alert(nombren*ombre2)
      break;
      case"+":
        alert(nombre+nombre2)
      break;
      case"/":
        alert(nombre/nombre2)
      break;
      case"-":
        alert(nombre-nombre2)
      break;
      default:
        alert("Erreur!")
      break;
    }