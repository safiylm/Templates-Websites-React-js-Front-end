import '../../../../styles/Ecommerce/template1.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';


class EcommerceTemplate1 extends Component {
    
    constructor(props){
        super(props);
        this.display200ml = this.display200ml.bind(this);
        this.display400ml = this.display400ml.bind(this);
        this.displayDescription = this.displayDescription.bind(this);
        this.displayBenefices = this.displayBenefices.bind(this);
        this.displayIngredients = this.displayIngredients.bind(this);
        this.quantitePlus = this.quantitePlus.bind(this);
        this.quantiteMois = this.quantiteMois.bind(this);
        this.prixproduit = 12;
        this.quantite = 0;
    }

    
// $(document).ready(function () {

//     $('#heart').show();
//     $('#heart-fill').hide();

//     $("#btn-like").click(() => {
//         $('#heart').toggle();
//         $('#heart-fill').toggle();
//     }
//     )
// })

    
    display200ml() {
        this.prixproduit = 12;

        document.getElementById("btn-400ml").style.border = "rgb(218, 211, 211) 0.5px solid";
        document.getElementById("btn-200ml").style.border = "rgb(97, 95, 95) 0.5px solid";
        document.getElementById("img-produit").setAttribute("src","https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwe2af8760/LRP_Product/Effaclar/3337872411083_Effaclar-Purifying-Cleansing-Gel_200ml_01_La-Roche-Posay.jpg?sw=930&sh=930&sm=cut&sfrm=jpg&q=70")
        document.getElementById("titre-200ml").style.display = "block";
        document.getElementById("titre-400ml").style.display = "none"
        document.getElementById("prix-en-euro-produit").innerText = 12;
        document.getElementById("prix-total").innerText =
        document.getElementById("prix-en-euro-produit").text *  document.getElementById("quantite").text    

    }

    display400ml() {
        this.prixproduit = 14;

        document.getElementById("btn-200ml").style.border = "rgb(218, 211, 211) 0.5px solid";
        document.getElementById("btn-400ml").style.border = "rgb(97, 95, 95) 0.5px solid";
        document.getElementById("img-produit").setAttribute("src","https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwafa8ce7f/LRP_Product/Effaclar/3337872411991_Effaclar-Purifying-Cleansing-Gel_400ml_01_La-Roche-Posay.jpg?sw=930&sh=930&sm=cut&sfrm=jpg&q=70")

        document.getElementById("titre-200ml").style.display = "none"
        document.getElementById("titre-400ml").style.display = "block";
        document.getElementById("prix-en-euro-produit").innerText= 14;
        document.getElementById("prix-total").innerText=
        document.getElementById("prix-en-euro-produit").text *  document.getElementById("quantite").text    
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

    quantiteMois(){
        if (this.quantite > 1) {
            this.quantite = this.quantite- 1
            document.getElementById("prix-total").innerText =  
            document.getElementById("prix-en-euro-produit").text 
            document.getElementById("prix-total").innerText =  
            this.prixproduit * this.quantite
            document.getElementById("quantite").value =this.quantite
        
        }
    }

    quantitePlus(){
        this.quantite = this.quantite - (-1)
        document.getElementById("prix-total").innerText =
        this.prixproduit * this.quantite
        
        document.getElementById("quantite").value =this.quantite
    }



    render() {
        return (
            <div id="div-Ecommerce1-container">

                <nav>
                    <img id="logo" src="img/logo.png" />
                </nav>

                <div class="main">


                    <div class="right">
                        <h1>Effaclar Gel Moussant Nettoyant Peau Grasse <div id="titre-200ml">200 ml</div><div id="titre-400ml">400 ml</div></h1>

                        <button id="btn-like">
                            <svg id="heart" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                            </svg>

                            <svg id="heart-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill"
                                viewBox="0 0 16 16">
                                <path
                                    d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                            </svg>
                        </button>


                        <div class="div-evaluation"> </div>

                        <p id="p-intro">
                            Gel moussant nettoyant peau grasse à tendance acnéique. Purifie la peau. Élimine les impuretés et <a
                                href="#description">En savoir
                                plus </a>
                        </p>
                    </div>

                    <img id="img-produit" src="https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwe2af8760/LRP_Product/Effaclar/3337872411083_Effaclar-Purifying-Cleansing-Gel_200ml_01_La-Roche-Posay.jpg?sw=930&sh=930&sm=cut&sfrm=jpg&q=70" />

                    <div class="right">
                        <p>14,00€</p>
                        <p>SELECTIONNER UNE TAILLE </p>

                        <button id="btn-200ml" onClick={this.display200ml}>
                            <p>200 ml</p>
                            <p>12,00€</p>
                        </button>

                        <button id="btn-400ml" onClick={this.display400ml}>
                            <p>400 ml</p>
                            <p>14,00€</p>
                        </button>

                        <div class="publicite"> </div>

                        <div class="div-ajouter-au-panier">
                            <div id="div-quantite">
                                <button id="btn-mois" onClick={this.quantiteMois}> - </button>
                                <input id="quantite" value="0" disabled/>
                                <button id="btn-plus" onClick={this.quantitePlus}> + </button>
                            </div>
                            <button id="btn-panier"> <div id="prix-total"> </div>,00€ -- Ajouter au panier </button>
                        </div>


                    </div>


                    <div class="div-x-titre">
                        <h4><button id="btn-description" onClick={this.displayDescription}>Description</button></h4>
                        <h4><button id="btn-benefices" onClick={this.displayBenefices}>Bénéfices</button></h4>
                        <h4><button id="btn-ingredients" onClick={this.displayIngredients}>Ingrédients</button></h4>
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



                    <div>

                        <div>
                            {/* style="text-transform: uppercase; font: 500 1.375rem/1.5rem Locator-Regular,sans-serif; letter-spacing: .01562rem;
        margin: 0 0 .75rem; text-align: center;" */}

                            Charte de sécurité :</div>
                        <p style={{ "text-align": "center" }}>SANS SAVON</p>
                        <p style={{ "text-align": "center" }}>HYPOALLERGÉNIQUE</p>
                        <p style={{ "text-align": "center" }}>NON COMÉDOGÈNE</p>

                    </div>
                </div>
            </div>


        )
    }
}

export default EcommerceTemplate1;