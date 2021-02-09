import Personne from "./personne.js"
import Lieu from "./lieu.js"
import Outil from "./outil.js"
import Ingredient from "./ingredient.js"


class Poele {
    constructor(tableau) {
        this.tableau = tableau;
        this.cuir = () => {
            setTimeout(() => {
                tableau[0] = tableau[0] + " cuit"
                console.log(tableau[0]);
                console.log(`Super ! notre omelette est cuite !`);
            }, 4000)
        }
    }
}


class Bol {
    constructor(tableau) {
        this.tableau = tableau;
        this.melanger = (newMelange) => {
            this.tableau = newMelange
        }
    }
}

let nghia = new Personne("nghia","epicerie",50);

let maison = new Lieu("maison",[]);
let couteau = new Outil("couteau","coupé");

let oeuf = new Ingredient("oeuf","entier",1.20);
let oignon = new Ingredient("oignon","coupe",1);
let poivron = new Ingredient("poivron","coupe",1.40);
let fromage = new Ingredient("fromage","entier",2.10);
let sel = new Ingredient("sel","moulu",0.50);
let poivre = new Ingredient("poivre","moulu",0.25);

let ingredients = [oeuf,oignon,poivron,fromage,sel,poivre];

let epicerie = new Lieu("epicerie",[],[
    {type : "panier 1", contenu : []},
    {type : "panier 2", contenu : []},
    {type : "panier 3", contenu : []}
]);

let poele = new Poele([]);
let bol = new Bol([])

 // let nghia = new Personne("nghia","maison",200); nghia.lieu => maison

 nghia.seDeplacer(maison)
console.log(`${nghia.nom} est actuellement à la ${nghia.lieu.nom}`);

 // let nghia = new Personne("nghia","epicerie",200); nghia.lieu => epicerie
 nghia.seDeplacer(epicerie)
console.log(`${nghia.nom} est actuellement à la ${nghia.lieu.nom}`);


// on retire le premier element du tableau

nghia.mainDroite = epicerie.panier.shift();

console.log(`${nghia.nom} a pris un ${nghia.mainDroite.type}`);

for (let index = 0; index < ingredients.length; index++) {
    
    // Afficher un message à chaque ingrédient pris

    console.log(`J'ai pris un ${ingredients[index].nom} dans mon panier 1`); 

    nghia.mainDroite.contenu.push(ingredients[index]);
}

console.log(nghia.mainDroite);


// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
for (let index = 0; index < nghia.mainDroite.contenu.length; index++) {
    
    nghia.payerArticle(ingredients[index]);
    
}

// Afficher un message de ce qu'il reste d'argent sur le personnage.

console.log(` il me reste actuellement ${nghia.argent} €`);

// rentrer à la maison (comme ça on pourra cuisiner)

nghia.seDeplacer(maison)
console.log(`${nghia.nom} est actuellement à la ${nghia.lieu.nom}`);

// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)

for (let index = 0; index < ingredients.length; index++) {
    
    bol.tableau.push(ingredients[index]);

    // Afficher un petit message de chaque ingrédient qu'on met dans le bol.

    console.log(` L'ingredient ${ingredients[index].nom} a été ajouté au bol`);
}

// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)

nghia.mainDroite.contenu = [];

console.log(nghia.mainDroite.contenu);

// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer)

nghia.seDeplacer(epicerie)
console.log(`${nghia.nom} est actuellement à la ${nghia.lieu.nom}`);

// puis enlever le panier de la main droite 

 epicerie.panier.push(nghia.mainDroite);

nghia.mainDroite = [];

 console.log(nghia.mainDroite);
 
 // et le remetre dans les paniers de l'épicerie.)
 
 console.log(epicerie.panier);

console.log(` le panier est desormais vide`);

// Retourner à la maison pour continuer l'omelette
 
nghia.seDeplacer(maison)
console.log(`${nghia.nom} est actuellement à la ${nghia.lieu.nom}`);

console.log(`nghia est de retour pour cuisiner`);

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage


for (let index = 0; index < ingredients.length; index++) {
    
// oeuf & fromage deviennent "coupe"
    nghia.couper(ingredients[index],couteau)

    console.log(` L'ingredient ${ingredients[index].nom} est toujours dans le bol`);
}


// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).

bol.melanger("omelette");

// Afficher un message avec le nouveau mélange

console.log(`Mon bol contient une : ${bol.tableau}`);

// vider le contenu du bol dans la poele. 

poele.tableau.push(bol.tableau);

console.log(poele);


// Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.

console.log(bol.tableau);

bol.tableau = [];

console.log(bol.tableau);

// Cuire l'omelette avec la méthode de la poele 

poele.cuir();


