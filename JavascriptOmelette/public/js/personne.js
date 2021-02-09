export default class Personne {
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