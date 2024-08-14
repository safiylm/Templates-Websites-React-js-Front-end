import 'bootstrap/dist/css/bootstrap.css';
import '../../../../../styles/Agences/Restaurant/2/styles2.scss'
import logo from '../../../../../assets/restaurant/logo.png'

function BurgerRestaurantTemplate() {

    return (
        <div className="burgerrestaurant1">
         <header>
        <div class="logo"> <img src={logo} width="80px" height="80px" /></div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-container">
            <h1>DELICIOUS ITALIAN HOME MADE CUISINE</h1>
            <p>Ratione numquam. Fugiat alias saepe fuga odio sed exauris, minim anim dolores earum! Veniam corporis
                cupidatat atque nesciunt dicta justoui varius loreto martino con sostanza e progolo. .</p>
            <div>
                <button>View Menu</button>
                <button>Reserve Now</button>
            </div>
        </div>
    </section>

 

    <section class="burgers">

        <div class="d-flex flex-wrap align-items-start justify-content-center">
            <img class="image-burger" src="http://templates.framework-y.com/gourmet/images/gallery/food-big-1.jpg"
                alt="mega fish burger" />
            <div class="description-burger">
                <h2>Mega fish burger deluxe</h2>
                <p>Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu
                    lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel. Tincidunt
                    integer eu augue augue nunc elit dolor luctus placerat scelerisque euismod, iaculis eu lacus nunc mi
                    elite milleporteno. </p>
                <p id="prix">$ 8.50</p>
            </div>
        </div>
        <div class="d-flex flex-wrap align-items-start justify-content-center">
            <div class="description-burger">
                <h2>Double cheese burger</h2>
                <p>Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu
                    lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel. Tincidunt
                    integer eu augue augue nunc elit dolor luctus placerat scelerisque euismod, iaculis eu lacus nunc mi
                    elite milleporteno. </p>
                <p id="prix">$ 8.50</p>

            </div>
            <img class="image-burger" src="http://templates.framework-y.com/gourmet/images/gallery/food-big-2.jpg"
                alt="big double burger" />
        </div>
    </section>

  
    <section class="menu">
        <h2>The Menu</h2>
        <div class="d-flex flex-wrap align-items-center justify-content-center">

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
   <section class="listmenu d-flex flex-wrap align-items-start justify-content-center">
        <div class="un-menu">
            <img src="http://templates.framework-y.com/gourmet/images/gallery/image-11.jpg" alt="image of dessert" />
            <span>DESSERT</span>
            <h3>Baconnaise Angus</h3>
            <p>Interdum iusto pulvinar consequuntur augue optio repporo. </p>
        </div>

        <div class="un-menu">
            <img src="http://templates.framework-y.com/gourmet/images/gallery/image-12.jpg" alt="image of wraps" />
            <span>WRAPS</span>
            <h3>Chicken Wrap</h3>
            <p>Interdum iusto pulvinar consequuntur augue optio repporo. </p>
        </div>

        <div class="un-menu">
            <img src="http://templates.framework-y.com/gourmet/images/gallery/image-13.jpg" alt="image of burgers" />
            <span>BURGERS</span>
            <h3>Double Texas BBQ</h3>
            <p>Interdum iusto pulvinar consequuntur augue optio repporo. </p>
        </div>

        <div class="un-menu">
            <img src="http://templates.framework-y.com/gourmet/images/gallery/image-14.jpg" alt="image of toats" />
            <span>TOATS</span>
            <h3>Crispy Chicken Toast</h3>
            <p>Interdum iusto pulvinar consequuntur augue optio repporo. </p>
        </div>
    </section>

    <section class="findtable d-flex flex-wrap align-items-center justify-content-center">
        <div class="col">
            <p><strong>From Monday to Friday</strong></p>
            <p>From 11am to 15pm and</p>
            <p> from 7pm to 11pm. </p>
            <p> Friday afternoon closed.</p>
        </div>

        <div class="col">
            <p> <strong>Saturday and Sunday</strong></p>
            <p>From 11am to 15pm and </p>
            <p>from 9pm to 3am.</p>
            <p> Sunday open all day.</p>
        </div>

        <div class="col">
            <input type="date" class="form-control" />
            <select class="form-select form-select-m" aria-label="Small select example">
                <option>7 PM</option>
                <option selected>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
            </select>

            <select class="form-select form-select-m" aria-label="Small select example">
                <option>1 person</option>
                <option selected>2 people</option>
                <option>3 people</option>
                <option>4 people</option>
                <option>5 people</option>
                <option>6 people</option>
            </select>
            <button class="btn btn-dark">Find a Table</button>
            <button class="btn btn-light">CONTACT US</button>
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
        </div>
    )

}

export default BurgerRestaurantTemplate;