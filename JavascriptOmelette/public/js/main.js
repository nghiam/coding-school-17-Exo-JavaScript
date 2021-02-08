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

let Nghia = new Personne("Nghia","epicerie",200);

let maison = new Lieu("maison",[]);
let couteau = new Outil("couteau", "coupé");

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

 // let Nghia = new Personne("Nghia","maison",200); Nghia.lieu => maison

 Nghia.seDeplacer(maison)
console.log(`${Nghia.nom} est actuellement à la ${Nghia.lieu.nom}`);

 // let Nghia = new Personne("Nghia","epicerie",200); Nghia.lieu => epicerie
 Nghia.seDeplacer(epicerie)
console.log(`${Nghia.nom} est actuellement à la ${Nghia.lieu.nom}`);


// on retire le premier element du tableau

Nghia.mainDroite = epicerie.panier.shift();

console.log(`${Nghia.nom} a pris un ${Nghia.mainDroite.type}`);

for (let index = 0; index < ingredients.length; index++) {
    
    // Afficher un message à chaque ingrédient pris

    console.log(`J'ai pris un ${ingredients[index].nom}`); 

    Nghia.mainDroite.contenu.push(ingredients[index]);
}

console.log(Nghia.mainDroite);


// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
for (let index = 0; index < Nghia.mainDroite.contenu.length; index++) {
    
    Nghia.payerArticle(ingredients[index]);
    
}

// Afficher un message de ce qu'il reste d'argent sur le personnage.

console.log(` il reste ${Nghia.argent} €`);

// rentrer à la maison (comme ça on pourra cuisiner)

Nghia.seDeplacer(maison)
console.log(`${Nghia.nom} est actuellement à la ${Nghia.lieu.nom}`);

// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)

for (let index = 0; index < ingredients.length; index++) {
    
    bol.tableau.push(ingredients[index]);

    // Afficher un petit message de chaque ingrédient qu'on met dans le bol.

    console.log(` L'ingredient ${ingredients[index].nom} a été ajouté au bol`);
}

// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)

Nghia.mainDroite.contenu = [];

console.log(Nghia.mainDroite.contenu);

// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer)

Nghia.seDeplacer(epicerie)
console.log(`${Nghia.nom} est actuellement à la ${Nghia.lieu.nom}`);

// puis enlever le panier de la main droite 



// et le remetre dans les paniers de l'épicerie.)

