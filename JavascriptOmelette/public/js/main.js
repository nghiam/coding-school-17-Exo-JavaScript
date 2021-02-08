class Personne {
    constructor(nom,lieu,argent,mainDroite=[],mainGauche=[]) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
        this.seDeplacer = (lieu) => {

        }
        this.payerArticle = (article) => {

        }
        this.couper = (ingredient,outil) => {

        }
    }
}

class Lieu {
    constructor(nom,personne) {
        this.nom = nom;
        this.personne = personne;
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

let Nghia = new Personne("Nghia","Bruxelles",200);

let maison = new Lieu("maison",[]);
let couteau = new Outil("couteau", "coupé");

let oeuf = new Ingredient("oeuf","entier",1.20);
let oignon = new Ingredient("oignon","coupe",1);
let poivron = new Ingredient("poivron","coupe",1.40);
let fromage = new Ingredient("fromage","entier",2.10);
let sel = new Ingredient("sel","moulu",0.50);
let poivre = new Ingredient("poivre","moulu",0.25);

let epicerie = new Lieu("epicerie",[]);

let poele = new Poele([]);
let bol = new Bol([])


Nghia.seDeplacer(maison);

console.log(`${Nghia.nom} est actuellement à la ${Nghia.lieu}`);





