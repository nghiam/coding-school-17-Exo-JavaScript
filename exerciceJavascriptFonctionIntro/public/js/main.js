
let direBonjour = (prenom, nom) => {
    console.log(`Bonjour ${prenom} ${nom}!`);
};
direBonjour("Nghia","Mai");

// Exo1

// fonction fructueuse
function addition(nombre, nombre1) {
    return nombre + nombre1;
};
console.log(addition(2,7));

// Fonction infructueuse
let maFonction = (param1,param2) => {
    console.log(param1 + param2);
}
maFonction(12,54);

// Exo2

function soustraction(nombre, nombre1) {
    return nombre - nombre1;
};
console.log(soustraction(20,7));

// Exo3

function multiplication(nombre, nombre1) {
    return nombre * nombre1;
};
console.log(multiplication(5,9));

// Exo4

function division(nombre, nombre1) {
    return nombre / nombre1;
};
console.log(division(36,3));

// Exo5

function modulo(nombre, nombre1) {
    return nombre % nombre1;
};
console.log(modulo(12,5));

// Exo6

function carre(nombre) {
    return nombre * nombre;
};
console.log(carre(5));

// Exo7

function exposant(nombre, nombre1) {
    return  nombre ** nombre1;
};
console.log(exposant(2,3));

// Exo8

function capitalize(a){
    
    return a.charAt(0).toUpperCase()+a.substr(1);
}
console.log(capitalize("test"));

// Exo9

let calcul = (par_1, par_2, opé) => {
        switch (opé) {
            case "+":
            return (`Votre calcul est ${par_1} + ${par_2} = ${par_1+par_2}`);
            case "-":
            return (`Votre calcul est ${par_1} - ${par_2} = ${par_1-par_2}`);
            case "":
            return (`Votre calcul est ${par_1} x ${par_2} = ${par_1par_2}`);
            case "/":
            return(`Votre calcul est ${par_1} / ${par_2} = ${par_1/par_2}`);
            case "%":
            return(`Votre calcul est ${par_1} % ${par_2} = ${par_1%par_2}`);

            default:
                alert("Drôle de chiffres..")
}
}

console.log(calcul(10, 2, "-"));
console.log(calcul(3, 8, "+"));
console.log(calcul(4, 5, "*"));
console.log(calcul(8, 2, "/"));
console.log(calcul(10, 3, "%"));

