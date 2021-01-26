// Exercice.1
// Ex.1

let tableau = ['coding15','coding16','coding17'];

// Ex.2

console.log(tableau);

// Ex.3

console.log(tableau.length);

// Ex.4

console.log(tableau[0],tableau[1],tableau[2]);

console.log(...tableau);


// Ex.5

tableau.push('Nghia',42);

console.log(tableau);

// Ex.6

tableau.unshift(false,3.14)

console.log(tableau);

// Ex.7

tableau.pop();

console.log(tableau);

// Ex.8

tableau.shift();

console.log(tableau);

// Ex.9

tableau.splice(1,1,'dako');

console.log(tableau);

// Ex.10

console.log(tableau.indexOf('coding16'));

// Ex.11

tableau.splice(2,1);

console.log(tableau);

// Ex.12

tableau.reverse();

console.log(tableau);

// Ex.13


tableau.splice(2,1,"ananas");

console.log(tableau);

// Exercice 2
// Ex.2

let tableau1 = [4,5,2,1,3];

console.log(tableau1);

// Ex.2

tableau1.sort();

console.log(tableau1);

// Ex.3

let string = tableau1.toString();
console.log(string);
string = tableau1.join('/');
console.log(string);


// Ex.4

tableau1 = string.split('/').map(Number);
console.log(tableau1,tableau1.length);

