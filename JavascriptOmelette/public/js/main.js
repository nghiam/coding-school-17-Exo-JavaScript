class Personne {
    constructor(nom,lieu,argent,mainDroite=[],mainGauche=[]) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
        this.seDeplacer = (lieu) => {
            this.lieu = lieu;
        }
        this.payerArticle = (article) => {
            if (this.argent >= article.prix) {
                this.argent -= article.prix;
            }
        }
        this.couper = (ingredient,outil) => {
            if( ingredient.etat == "entier") {
                ingredient.etat = outil.action;
            }

        }
    }
}

class Lieu {
    constructor(nom,personne,panier) {
        this.nom = nom;
        this.personne = personne;
        this.panier = panier;
    }
}

class Outil {
    constructor(nom,action) {
        this.nom = nom;
        this.action = "coupe";
    }
}

class Ingredient {
    constructor(nom,etat,prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

class Poele {
    constructor(tableau) {
        this.tableau = tableau;
        this.cuir = () => {

        }
    }
}

class Bol {
    constructor(tableau) {
        this.tableau = tableau;
        this.melanger = (newMelange) => {

        }
    }
}

let nghia = new Personne("nghia","epicerie",200);

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

    console.log(`J'ai pris un ${ingredients[index].nom}`); 

    nghia.mainDroite.contenu.push(ingredients[index]);
}

console.log(nghia.mainDroite);


// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
for (let index = 0; index < nghia.mainDroite.contenu.length; index++) {
    
    nghia.payerArticle(ingredients[index]);
    
}

// Afficher un message de ce qu'il reste d'argent sur le personnage.

console.log(` il reste ${nghia.argent} €`);

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

for (let index = 0; index < bol.ingredient.length; index++) {
    
    console.log(ingredient.length[index]);
}