import 'bootstrap/dist/css/bootstrap.css';
import '../../../../../styles/Agences/Restaurant/1/styles1.scss'
import logo from '../../../../../assets/restaurant/logo.png'


function MenuRestaurantTemplate() {

    return (
        <div className="menurestaurant1">
            <header>
                <div class="logo"> <img src={logo} width="80px" height="80px" /></div>
                <nav>
                    <ul>
                        <li><a href="#breakfast">Breakfast menu</a></li>
                        <li><a href="#lunch">Lunch menu</a></li>
                        <li><a href="#dinner">Dinner menu</a></li>

                    </ul>
                </nav>
            </header>

            <section class="hero">
                <h1>Menu list one</h1>
                <p>Menu and portfolio</p>
            </section>

            <section class="Breakfast" id="breakfast" >
                <h2>Breakfast menu</h2>
                <div class="d-flex flex-wrap align-items-center justify-content-center">
                    <img src="http://templates.framework-y.com/gourmet/images/block-10.jpg" alt="image d'une assiette de dejeuner" />

                    <div class="listmenu d-flex flex-wrap align-items-center justify-content-center">

                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Slow roasted white</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9.5$ </div>
                        </div>

                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Grass beef fillet</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Deboned king quail</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 10$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Confit of lamb</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 15$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Twice cooked duck </div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 21$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Steamed king crab</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Roast partridge</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9.5$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Salad of shaved fenne</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9.5$ </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="Launch" id="lunch">
                <h2>Launch menu</h2>
                <div class="d-flex flex-wrap align-items-center justify-content-center">
                    <img src="http://templates.framework-y.com/gourmet/images/block-11.jpg" alt="image d'une assiette lunch" />

                    <div class="listmenu d-flex flex-wrap align-items-center justify-content-center">

                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Slow roasted white</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9.5$ </div>
                        </div>

                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Grass beef fillet</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Deboned king quail</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 10$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Confit of lamb</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 15$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Twice cooked duck </div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 21$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Steamed king crab</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Roast partridge</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9.5$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Salad of shaved fenne</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9.5$ </div>
                        </div>

                    </div>

                </div>


            </section>

            <section class="Dinner" id="dinner">
                <h2>Dinner menu</h2>
                <div class="d-flex flex-wrap align-items-center justify-content-center">
                    <img src="http://templates.framework-y.com/gourmet/images/block-12.jpg" alt="image d'une assiette du dinner" />

                    <div class="listmenu d-flex flex-wrap align-items-center justify-content-center">

                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Slow roasted white</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9.5$ </div>
                        </div>

                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Grass beef fillet</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Deboned king quail</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 10$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Confit of lamb</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 15$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Twice cooked duck </div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 21$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Steamed king crab</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Roast partridge</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9.5$ </div>
                        </div>
                        <div class="menu-items d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <div id="titre">Salad of shaved fenne</div>
                                <div id="description">Duis aute irure dolor in reprehenderit i esse</div>
                            </div>
                            <div id="prix"> 9.5$ </div>
                        </div>

                    </div>
                </div>
            </section>

            <footer>
                <p>Contact us: 123-456-7890 | info@restaurant.com</p>
                <div class="social-media">
                    <a href="#">Facebook</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                </div>
            </footer>
        </div>
    );
}

export default MenuRestaurantTemplate;