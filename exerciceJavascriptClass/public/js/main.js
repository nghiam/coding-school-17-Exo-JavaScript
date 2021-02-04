// Exo : Classe 

// EXO1_CLASS
// EXO1
// EXO2

// class Personnage {
//     constructor(age,nom,ville) {
//         this.age = age;
//         this.nom = nom;
//         this.ville = ville;
//         this.sePresenter = () => {
//             console.log(`Bonjour, je m'appelle ${this.nom} ! et j'ai ${this.age}`);
//         }
//     }
    
// }

// let Nghia = new Personnage(30,"Nghia","Bruxelles");

// console.log(Nghia);
// Nghia.sePresenter();


// EXO2_CLASS
// EXO1

// class Lieux {
//     constructor(nom,contenu,ingredients){
//     this.nom = nom;
//     this.contenu = contenu; 
//     this.ingredients = ingredients;
//     }
// }

// let maison = new Lieux("maison",[]);
// let epicerie = new Lieux("epicerie",[],[]);
// let cuisine = new Lieux("cuisine",[],[]);

// console.log(maison);


// class Ingredients {
//     constructor(nom,etat,prix){
//         this.nom = nom;
//         this.etat = etat;
//         this.prix = prix;
//     }
// }

// let poivron = new Ingredients("poivron","entier",1);
// let oignon = new Ingredients("oignon","entier",2);
// let oeuf = new Ingredients("oeuf","entier",4);
// let epice = new Ingredients("epice","moulu",3.25);
// let paprika = new Ingredients("paprika","moulu",1.5);
// let fromage = new Ingredients("fromage","coupé",1.6);

// console.log(oeuf);
// console.log(fromage);
// console.log(epice);


// class Personne {
//     constructor(nom,lieu,argent,panier) {
//         this.nom = nom;
//         this.lieu = lieu;
//         this.argent = argent;
//         this.panier = panier;
//         this.seDeplacer = (x) => {
//         }
//         this.payer = (x) => {
//         }
//         this.couper = (x,y) => {
//         }
//     }
// }

// let Maxime = new Personne("Maxime","néant",100,[]);
// console.log(Maxime);

// EXO3_CLASS
// EXO1 & EXO2

class Objet {
    constructor(nom,prix){
        this.nom = nom;
        this.prix = prix;
        
    }
}
let boite = [];


let Stylo = new Objet("stylo",2.5,[]);
let Table = new Objet("table",60,[]);

boite.push(Stylo);
boite.push(Table);
console.log(boite);


// EXO3
class Personnage {
    constructor(nom,sac,argent){
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;

        this.prendre = () => {

        }
        this.acheter = () => {
            
        }
    }
}