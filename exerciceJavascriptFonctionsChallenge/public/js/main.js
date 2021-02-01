// Exo 1

// let codingSchool17 = [];
// let add = (student) => {
// if (codingSchool17.includes(student) ) {
//     console.log(Student + " est déjà dans la classe");
// } else {
//     codingSchool17.push(student)
//     console.log(student + " rentre dans la classe")
// }
// };
// let remove = (student) => {
// if (codingSchool17.includes(student)) {
//     codingSchool17.splice(codingSchool17.indexOf(student));
//     console.log(student + " sort de la classe");
// } else {
//     console.log(student + " n'est pas dans la classe");
// }
// };


// add('Antoine');
// add('Saïd');
// add('Abdel');
// add('Nathan');
// add('Yasmina');
// remove('Abdel');
// add('Gauthier');
// remove('Saïd');
// remove('Yasmina');

// console.log(codingSchool17);

// Exo 2

let estPremier = (nbr) => {
    switch (nbr) {
        case 1:
            return " 1 n'est pas premier";
        default:
            for (let i = 2; i < nbr; i++) {
                if (nbr % i === 0) {
                return (nbr + " n'est pas premier")
                } 
            }
            return nbr + " est premier"
    }
}
console.log(estPremier(parseInt(prompt("Entrez une valeur"))));