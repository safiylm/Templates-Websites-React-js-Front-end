import '../../../../styles/Ecommerce/template1.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';


class EcommerceTemplate1 extends Component {

    constructor(props) {
        super(props);
        this.display200ml = this.display200ml.bind(this);
        this.display400ml = this.display400ml.bind(this);
        this.displayDescription = this.displayDescription.bind(this);
        this.displayBenefices = this.displayBenefices.bind(this);
        this.displayIngredients = this.displayIngredients.bind(this);
        this.quantitePlus = this.quantitePlus.bind(this);
        this.quantiteMois = this.quantiteMois.bind(this);
        this.like = this.like.bind(this);
        this.quantite = 0;
        this.listeproduit = [
            {
                "name": "Effaclar Gel Moussant Nettoyant Peau Grasse",
                "prix": 12,
                "quantite": 200,
                "photos": ["https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwe2af8760/LRP_Product/Effaclar/3337872411083_Effaclar-Purifying-Cleansing-Gel_200ml_01_La-Roche-Posay.jpg",
                    "https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwf2c4b10b/LRP_Product/Effaclar/3337872411083_Effaclar-Purifying-Cleansing-Gel_200ml_02_La-Roche-Posay.jpg",
                    "https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwc3b128ad/LRP_Product/Effaclar/3337872411083_Effaclar-Purifying-Cleansing-Gel_200ml_03_La-Roche-Posay.jpg",
                    "https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dw1e3626eb/LRP_Product/Effaclar/3337872411083_Effaclar-Purifying-Cleansing-Gel_200ml_04_La-Roche-Posay.jpg",
                    "https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwf7107c11/LRP_Product/Effaclar/3337872411083_Effaclar-Purifying-Cleansing-Gel_200ml_05_La-Roche-Posay.jpg",
                    "https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwc9b4e655/LRP_Product/Effaclar/3337872411083_Effaclar-Purifying-Cleansing-Gel_200ml_06_La-Roche-Posay.jpg",
                    "https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dw6b25761b/LRP_Product/Effaclar/3337872411083_Effaclar-Purifying-Cleansing-Gel_200ml_07_La-Roche-Posay.jpg",
                    "https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwef8be0de/LRP_Product/Effaclar/3337872411083_Effaclar-Purifying-Cleansing-Gel_200ml_08_La-Roche-Posay.jpg",
                    "https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dw3886e8a5/LRP_Product/Effaclar/3337872411083_Effaclar-Purifying-Cleansing-Gel_200ml_09_La-Roche-Posay.jpg"]
            },
            {
                "name": "Effaclar Gel Moussant Nettoyant Peau Grasse",
                "prix": 14,
                "quantite": 400,
                "photos": ["https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwafa8ce7f/LRP_Product/Effaclar/3337872411991_Effaclar-Purifying-Cleansing-Gel_400ml_01_La-Roche-Posay.jpg",
                    "https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dw9c1374b2/LRP_Product/Effaclar/3337872411991_Effaclar-Purifying-Cleansing-Gel_400ml_02_La-Roche-Posay.jpg",
                    "https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dw950bdbf1/LRP_Product/Effaclar/3337872411991_Effaclar-Purifying-Cleansing-Gel_400ml_04_La-Roche-Posay.jpg",
                    "https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwf187bd94/LRP_Product/Effaclar/3337872411991_Effaclar-Purifying-Cleansing-Gel_400ml_03_La-Roche-Posay.jpg"]
            }
        ];

        this.produit = this.listeproduit[0];
    }


    like() {

        if (document.getElementById("heart").style.display == "none") {
            document.getElementById("heart").style.display = "block"
            document.getElementById("heart-fill").style.display = "none";
        } else {
            document.getElementById("heart").style.display = "none"
            document.getElementById("heart-fill").style.display = "block";
        }
    }


    displayProduct() {
        document.getElementById("titre-h1").innerText = this.produit.name + " " + this.produit.quantite + " ml";
        document.getElementById("img-produit").setAttribute("src", this.produit.photos[0])
        document.getElementById("prix-en-euro-produit").innerText = this.produit.prix + ",00€";
        document.getElementById("prix-total").innerText =
            this.produit.prix * document.getElementById("quantite").text
        // document.getElementById("prix-total").innerText =0
        this.quantite = 0
        document.getElementById("quantite").value = this.quantite
        document.getElementById("prix-total").innerText = "0,00€ -- "


    }


    display200ml() {

        this.produit = this.listeproduit[0];
        this.displayProduct()
        document.getElementById("btn-400ml").style.border = "rgb(218, 211, 211) 0.5px solid";
        document.getElementById("btn-200ml").style.border = "rgb(97, 95, 95) 0.5px solid";

    }

    display400ml() {
        this.produit = this.listeproduit[1];
        this.displayProduct()
        document.getElementById("btn-200ml").style.border = "rgb(218, 211, 211) 0.5px solid";
        document.getElementById("btn-400ml").style.border = "rgb(97, 95, 95) 0.5px solid";

    }

    displayDescription() {
        document.getElementById("description").style.display = "block"
        document.getElementById("benefice").style.display = "none";
        document.getElementById("ingredient").style.display = "none";

    }

    displayBenefices() {
        document.getElementById("description").style.display = "none"
        document.getElementById("benefice").style.display = "block";
        document.getElementById("ingredient").style.display = "none";

    }

    displayIngredients() {
        document.getElementById("description").style.display = "none"
        document.getElementById("benefice").style.display = "none";
        document.getElementById("ingredient").style.display = "block";

    }

    quantiteMois() {
        if (this.quantite > 1) {
            this.quantite = this.quantite - 1
            document.getElementById("prix-total").innerText =
                document.getElementById("prix-en-euro-produit").text
            document.getElementById("prix-total").innerText =
                (this.produit.prix * this.quantite) + ",00€ -- "
            document.getElementById("quantite").value = this.quantite

        }
    }

    quantitePlus() {
        this.quantite = this.quantite - (-1)

        document.getElementById("prix-total").innerText =
            (this.produit.prix * this.quantite) + ",00€ -- "
        document.getElementById("quantite").value = this.quantite
    }



    render() {
        return (
            <div id="div-Ecommerce1-container">
                    <div class="right">
                        <h1 id="titre-h1"> {this.produit.name} {this.produit.quantite} ml </h1>

                        <button id="btn-like" onClick={() => { this.like() }}>
                            <svg id="heart" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-suit-heart"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                            </svg>

                            <svg id="heart-fill" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-suit-heart-fill"
                                viewBox="0 0 16 16">
                                <path
                                    d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                            </svg>
                        </button>


                        <div class="div-evaluation"> </div>

                        <p>
                            Gel moussant nettoyant peau grasse à tendance acnéique. Purifie la peau. Élimine les impuretés et <a
                                href="#description">En savoir
                                plus </a>
                        </p>
                    </div>

                    {/* <div className='d-flex align-items-center justify-content-center'>  */}
                        <img id="img-produit" src={this.produit.photos[0]} />
                        {/* <div className='d-flex flex-column align-items-center justify-content-center'>
                        <img width="200px" height="200px" src={this.produit.photos[0]} alt={this.produit.name} />
                        </div> */}

                    {/* </div> */}

                    <div className="right">
                        <p style={{ "fontSize": "23px" }} id="prix-en-euro-produit"> 12,00€</p>
                        <p>SELECTIONNER UNE TAILLE </p>

                        <button id="btn-200ml" onClick={this.display200ml}>
                            <p>200 ml</p>
                            <p> 12,00€</p>
                        </button>

                        <button id="btn-400ml" onClick={this.display400ml}>
                            <p>400 ml</p>
                            <p>14,00€</p>
                        </button>

                        <div className="publicite"> </div>

                        <div className="div-quantite-panier d-flex">

                            <button id="btn-mois" onClick={this.quantiteMois}> - </button>
                            <input id="quantite" value="0" disabled />
                            <button id="btn-plus" onClick={this.quantitePlus}> + </button>
                            <button id="btn-panier"> <div id="prix-total"> </div> Ajouter au panier </button>
                        </div>


                    </div>


                    <div class="div-menu d-flex align-items-center justify-content-center ">
                        <button id="btn-description" onClick={this.displayDescription}>Description</button>
                        <button id="btn-benefices" onClick={this.displayBenefices}>Bénéfices</button>
                        <button id="btn-ingredients" onClick={this.displayIngredients}>Ingrédients</button>
                    </div>

                    <div id="description">
                        <p> Gel moussant nettoyant peau grasse à tendance acnéique. Purifie la peau. Élimine les impuretés et l'excès de
                            sébum. Anti-points noirs.
                        </p><br />
                        <p> BÉNÉFICES </p>
                        <p>
                            Le gel moussant Effaclar est un nettoyant visage pour peaux grasses à tendance acnéique. Ce gel nettoyant
                            purifiant élimine en douceur les impuretés et l'excès de sébum. Ses agents nettoyants doux respectent
                            l'épiderme des peaux sensibles. L'eau thermale La Roche-Posay apaise et limite les risques d'irritations. La
                            peau est nette et fraîche.
                        </p><br />
                        <p>INDICATION </p>
                        <p>
                            Ce gel moussant visage est indiqué pour nettoyer une peau grasse ou une peau à tendance acnéique.
                        </p>
                    </div>

                    <div id="benefice">


                        <p> Effaclar gel moussant purifiant nettoie en douceur la peau du visage et désobstrue les pores pour une action
                            anti-points noirs.</p>

                        <p> 1/ NETTOIE ET PURIFIE LA PEAU</p>
                        <p> Ce gel moussant nettoie et purifie la peau grâce à ses agents nettoyants ultra doux et au zinc PCA, un actif
                            réputé pour ses propriétés sébo-régulatrices, antibactériennes et anti-inflammatoires. La peau est
                            débarrassée
                            de ses impuretés et de l'excès de sébum. Les imperfections se réduisent progressivement.
                        </p>
                        <p>2/ RESPECTE LES PEAUX SENSIBLES</p>
                        <p> Les peaux grasses à tendance acnéique peuvent être aussi sensibles. Formulé sans alcool pour éviter
                            d'agresser
                            l'épiderme, notre gel moussant Effaclar se compose d'actifs nettoyants qui respectent la barrière cutanée et
                            de
                            l'eau thermale La Roche-Posay qui apaise la peau.
                        </p>
                        <p>Efficacité cliniquement prouvée sur 3000 personnes. pH physiologique. Sans alcool. Agit sur le sébum, les
                            imperfections et les points noirs.</p>

                    </div>

                    <div id="ingredient">
                        Liste complète des ingrédients :
                        aqua/water | sodium laureth sulfate | peg-8 | coco-betaine | hexylene glycol ....
                    </div>
                    <input type="hidden" id="prix-en-euro-produit" value="12" />

                </div>

        )
    }
}

export default EcommerceTemplate1;