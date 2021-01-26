// Variables temporaires

// let a = 1; // 2
// let b = 2; // 3
// let c = 3; // 1

// let temp = a;
// a = b;
// b = c;
// c = temp;

// console.log(a);
// console.log(b);
// console.log(c);


// Exo 1
// Echanger les valeurs des variables de façon à ce qu'elles aient la valeur indiquée en commentaire
let a = 1; // 4
let b = 2; // 3
let c = 3; // 2
let d = 4; // 1

let varTemp;
let varTemp1;


varTemp = a;
varTemp1 = b;

a = d;
b = c;
c = varTemp1;
d = varTemp;

console.log(a, b, c, d);

// Exo 2
// Echanger les valeurs des variables de façon à ce qu'elles aient la valeur indiquée en commentaire
let e = 1; // 2
let f = 2; // 3
let g = 3; // 4
let h = 4; // 1

let varTemp2;


varTemps2 = e;


e = f;
f = g;
g = h;
h = varTemps2;

console.log(e, f, g, h);

// Exo 3
// Afficher 3, 4, 2, 1 en se servant d'une variable temporaire


// let tableau = [1, 2, 3, 4];

// let temp;

// temp = tableau[0];

// let tableau1 = [3,4,2,1];


// console.log(tableau1);

let tableau = [1, 2, 3, 4];
let temp;

// 3, 2, 1, 4
temp = tableau[0];
tableau[0] = tableau[2];
tableau[2] = temp;

// 3, 4, 1, 2
temp = tableau[1];
tableau[1] = tableau[3];
tableau[3] = temp;

// 3, 4, 2, 1
temp = tableau[2];
tableau[2] = tableau[3];
tableau[3] = temp;
console.log(tableau);