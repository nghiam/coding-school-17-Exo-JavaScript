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
//         this.seDeplacer = (lieu) => {
//             console.log(`${this.nom} se deplace dans ${lieu.nom}`)
//         }
//         this.payer = (article) => {
//             this.argent -= article.prix;
//             this.panier.push(article);
//         }
//         this.couper = (article) => {
//             if (article.etat =="entier"){
//                 article.etat = "coupé"
//             }
//         }
//     }
// }

// let Maxime = new Personne("Maxime","néant",100,[]);
// console.log(Maxime);

// EXO3_CLASS
// EXO1 & EXO2

// class Objet {
//     constructor(nom,prix){
//         this.nom = nom;
//         this.prix = prix;
        
//     }
// }
// let boite = [];


// let stylo = new Objet("stylo",2.5,[]);
// let table = new Objet("table",60,[]);

// boite.push(stylo);
// boite.push(table);
// console.log(boite);


// EXO3
// class Personnage {
//     constructor(nom,sac,argent){
//         this.nom = nom;
//         this.sac = sac;
//         this.argent = argent;

//         this.prendre = (objet) => {
//             sac.push(objet);
//         }
//         this.acheter = (vendeur,objet) => {
//             sac.push(objet)
//             vendeur.sac.splice(vendeur.sac.indexOf(objet),1)
//             argent -= objet.prix
//             vendeur.argent += objet.prix
//         }
//     }
// }

// let franki = new Personnage("franki",[],150);
// let kiki = new Personnage("kiki",[],80);

// franki.prendre(stylo);
// kiki.prendre(table);

// kiki.acheter(franki,stylo);

// console.log(franki);
// console.log(kiki);


// EXO4_CLASS
// EXO1

// class Lieu  {
//     constructor(nom,personnes){
//         this.nom = nom;
//         this.personnes = personnes;
//     }
// }

// let molengeek = new Lieu("molengeek",[]);
// let snack = new Lieu("Snack",[]);
// let maison = new Lieu("Maison",[]);

// class Personne {
//     constructor(nom,prenom,argent){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.argent = argent;
//     }

//     seDeplacer = (lieu) => {
//         embarquer = (bus) => {

//         }
//     }
// }


// let marc = new Personne("julo","marc",658);

// class Bus {
//     constructor(personne,caisse){
//         this.personne = personne;
//         this.caisse = caisse;
//     }

//     embarquer = () => {
//         seDeplacer = (Personne) => {
//             if (argent) {
//                 Personne.argent -= prix.argent
//                 Bus.caisse += prix.argent
//             }
//         }
//     }
// }

// let bubus = new Bus("bubus",12);

// marc.seDeplacer(bubus);


// console.log(`8h00 Vous êtes à la maison`)

// CORRECTION EXO4 

    // class Lieu {
    //     constructor(nom,personnes){
    //         this.nom = nom;
    //         this.personnes = [];
    //     }
    // }

    // let maison = new Lieu("Maison");
    // let snack = new Lieu("Snack");
    // let molengeek = new Lieu("Molengeek");

    // class Personne {
    //     constructor(nom,prenom,argent){
    //         this.nom = nom;
    //         this.prenom = prenom;
    //         this.argent = argent;
    //         this.seDeplacer = (depart,destination,moyenT) => {
    //             if (moyenT == null) {
    //                 depart.personnes.splice(depart.personnes.indexOf(this,1));
    //                 destination.personnes.push(this);
    //                 console.log(`${this.nom} se dirige à ${destination.nom} à pied`);
    //             } else {
    //                 moyenT.embarquer(this,depart,destination)
    //             }
    //         }
    //     }
    // }

    // class Bus {
    //     constructor(personnes,caisse){
    //         this.personnes = personnes;
    //         this.caisse = caisse;
    //         this.embarquer = (depart,destination,passager) => {
    //             if (passager.argent >= 2.80) {
    //                 passager.argent -= 2.80;
    //                 this.caisse += 2.80;
    //                 depart.personnes.splice(depart.personnes.indexOf(passager),1);
    //                 destination.personnes.push(passager);
    //                 console.log(`Bonjour ${passager.prenom}, bienvenu(e) à bord, nous allons à ${destination.nom}`);
    //             } else {
    //                 depart.personnes.splice(depart.personnes.indexOf(passager),1);
    //                 destination.personnes.push(passager);
    //                 console.log(`Veuillez quitter mon bus`);
    //                 console.log(`C'est pas grave, ${passager.nom} va se déplacer à pied`);
    //             }
    //         }
    //     }
    // }

    // let nghia = new Personne("Mai", "Nghia",1);
    // let gauthier = new Personne("CS17","Gauthier",100);
    // let delijn = new Bus([],10);

    // maison.personnes.push(nghia);
    // nghia.seDeplacer(maison,molengeek);
    // nghia.seDeplacer(molengeek,snack,delijn);
    // nghia.seDeplacer(snack,molengeek);
    // console.log(snack);
    // console.log(nghia,gauthier);


// EXO5_CLASS
// PART 1 + PART 2

class Eleve {
    constructor(prenom,nom,sexe,age){
        this.prenom = prenom;
        this.nom = nom;
        this.sexe = sexe;
        this.age = age;
    }
        presenter = (eleve) => {
            if (this.sexe == "masculin") {
                alert(`Bonjour Monsieur ${this.prenom} ${this.nom}`)
            } else if ( this.sexe == "feminin"){
                alert(`Bonjour Madame ${this.prenom} ${this.nom}`)
            } else {
                alert(`Bonjour le non binaire ${this.prenom}${this.nom}`)
            }
        }

        galocher = (eleve) => {
            if (!this.sexe) {
                
            }
        }

    }


    let patrick = new Eleve("patrick","Nubz","masculin",26);
    let antho = new Eleve("antho","aloza","masculin",34);
    let mireille = new Eleve("mireille","mathieu","feminin",65);
    let manon = new Eleve("manon","casset","feminin",19);


    patrick.galocher(antho);

    // console.log(patrick);
    // console.log(manon);

    // CORRECTION

    // class Eleve {
    //     constructor(prenom,nom,sexe,age){
    //         this.prenom=prenom;
    //         this.nom=nom;
    //         this.sexe=sexe;
    //         this.age=age;
    //         this.presenter = ()=>{
    //             if (this.sexe == 'f') {
    //                 alert(`Bonjour Madame ${this.prenom} ${this.nom}`);
    //             } else if (this.sexe == 'h') {
    //                 alert(`Bonjour Monsieur ${this.prenom} ${this.nom}`);
    //             }else{
    //                 alert(`Bonjour le non-binaire ${this.prenom} ${this.nom}`);
    //             }
    //         }
    //         this.galoche = (persoAGaloche)=>{
    //             if (persoAGaloche.sexe !== this.sexe) {
    //                 alert(`${this.prenom} embrasse ${persoAGaloche.prenom}`);
    //             }else{
    //                 alert(`${this.prenom} essaye d'embrasser ${persoAGaloche.prenom} :dégage tu pue ${this.prenom} !`);
    //             }
    //         }
    //     }
    // }
    
    // let eleve1 = new Eleve ("Muff","l'incompris","h",19);
    // let eleve2 = new Eleve ("Said","Le tout puissant","h",20);
    // let eleve3 = new Eleve ("Mahad","la question","non-binaire",26);
    // let eleve4 = new Eleve ("Abdel","les cheveux lisses","f",25);
    
    // eleve1.presenter();
    // eleve2.presenter();
    // eleve3.presenter();
    // eleve4.presenter();
    
    // eleve1.galoche(eleve2);
    // eleve2.galoche(eleve3);
    // eleve3.galoche(eleve4);