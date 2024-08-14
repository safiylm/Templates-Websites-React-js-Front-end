import '../../../../../styles/Coiffeur/template1.scss'
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../../../../../assets/coiffeur/logo.png";
import home from "../../../../../assets/coiffeur/home.png";
import home2 from "../../../../../assets/coiffeur/home2.png";


function CoiffeurTemplate1() {

    return (
        <>
    
            <header>
                <div className="logo"><img src={logo} width="80px" height="80px" /></div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#serives">Services</a></li>
                        <li><a href="#workinghours">Working Hours</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#clientssay">Clients say</a></li>
                        <li><a href="#gallery">Gallery </a></li>
                        <li><a href="#contactus">Prendre RDV</a></li>
                    </ul>
                </nav>
            </header>
        
            
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={home} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={home2} alt="Second slide" />
                  </div>
                 
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            <section className="whatwedo" id="serives">
                <h2>What We Do?</h2>
                <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat
                    cupidatat non proident culpa.</p>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    <div className="col">
                        <img src="http://demo.zytheme.com/hairy/assets/images/services/4.png" alt="haircut style" />
                        <h3>Haircut Styles</h3>
                        <p>Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore fugiat nulla.</p>
                    </div>
                    <div className="col">
                        <img src="http://demo.zytheme.com/hairy/assets/images/services/5.png" alt="beard trim" />
                        <h3>Beard Trim</h3>
                        <p>Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore fugiat nulla.</p>
        
                    </div>
                    <div className="col">
                        <img src="http://demo.zytheme.com/hairy/assets/images/services/6.png" alt="hot shave" />
                        <h3>Hot Shave</h3>
                        <p>Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore fugiat nulla.</p>
        
                    </div>
                </div>
            </section>
        
            <section id="workinghours" className="workinghours d-flex flex-column justify-content-center align-items-center">
                <h2>Working Hours</h2>
                <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat
                    cupidatat non proident culpa.</p>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    <div className="col">
                        <h3>Mon</h3>
                        <p> 9.00 am<br />
                            to<br />
                            4.30 am
                        </p>
                    </div>
                    <div className="col">
                        <h3>Thu</h3>
                        <p> 9.00 am<br />
                            to<br />
                            4.30 am
                        </p>
                    </div>
                    <div className="col">
                        <h3>Wen</h3>
                        <p> 9.00 am<br />
                            to<br />
                            4.30 am
                        </p>
                    </div>
                    <div className="col">
                        <h3>Thu</h3>
                        <p> 9.00 am<br />
                            to<br />
                            4.30 am
                        </p>
                    </div>
                    <div className="col">
                        <h3>Fri</h3>
                        <p> 9.00 am<br />
                            to<br />
                            4.30 am
                        </p>
                    </div>
                    <div className="col">
                        <h3>Sat</h3>
                        <p> 9.00 am<br />
                            to<br />
                            4.30 am
                        </p>
                    </div>
        
                </div>
            </section>
        
        
            <section className="ourpricing" id="pricing">
                <h2>Our Pricing</h2>
                <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat
                    cupidatat non proident culpa.</p>
                <div className="d-flex flex-wrap justify-content-start align-items-center">
                    <div className="col">
                        <div className="d-flex justify-content-start align-items-center">
                            <h3>Haircut</h3>
                            <div className="pricing--divider"></div>
                            <span className="price">20,00$</span>
                        </div>
                        <p>Our stylist consults & delivers you a precision haircut.</p>
                    </div>
        
                    <div className="col">
                        <div className="d-flex justify-content-start align-items-center">
                            <h3>Beard Trim</h3>
                            <div className="pricing--divider"></div>
                            <span className="price">20,00$</span>
                        </div>
                        <p>Our stylist consults & delivers you a precision haircut.</p>
                    </div>
        
                    <div className="col">
                        <div className="d-flex justify-content-start align-items-center">
                            <h3>Hair Color</h3>
                            <div className="pricing--divider"></div>
                            <span className="price">20,00$</span>
                        </div>
                        <p>Our stylist consults & delivers you a precision haircut.</p>
                    </div>
        
                    <div className="col">
                        <div className="d-flex justify-content-start align-items-center">
                            <h3>Men’s Facial</h3>
                            <div className="pricing--divider"></div>
                            <span className="price">20,00$</span>
                        </div>
                        <p>Our stylist consults & delivers you a precision haircut.</p>
                    </div>
        
                    <div className="col">
                        <div className="d-flex justify-content-start align-items-center">
                            <h3>Moustache Trim</h3>
                            <div className="pricing--divider"></div>
                            <span className="price">20,00$</span>
                        </div>
                        <p>Our stylist consults & delivers you a precision haircut.</p>
                    </div>
        
                    <div className="col">
                        <div className="d-flex justify-content-start align-items-center">
                            <h3>Hair Wash</h3>
                            <div className="pricing--divider"></div>
                            <span className="price">20,00$</span>
                        </div>
                        <p>Our stylist consults & delivers you a precision haircut.</p>
                    </div>
        
                    <div className="col">
                        <div className="d-flex justify-content-start align-items-center">
                            <h3>Face Mask</h3>
                            <div className="pricing--divider"></div>
                            <span className="price">20,00$</span>
                        </div>
                        <p>Our stylist consults & delivers you a precision haircut.</p>
                    </div>
        
                    <div className="col">
                        <div className="d-flex justify-content-start align-items-center">
                            <h3>Line Up</h3>
                            <div className="pricing--divider"></div>
                            <span className="price">20,00$</span>
                        </div>
                        <p>Our stylist consults & delivers you a precision haircut.</p>
                    </div>
        
        
        
                </div>
            </section>
        
            <section className="clientssay" id="clientssay">
                <h2>Clients say</h2>
                <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat
                    cupidatat non proident culpa.</p>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
        
                    <div className="col">
                        <img src="http://demo.zytheme.com/hairy/assets/images/testimonial/1.png" alt=""/>
                        <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat cupidatat non proident culpa.</p>
                        <p>Steve Rodriguez</p>
                    </div>
        
                    <div className="col">
                        <img src="http://demo.zytheme.com/hairy/assets/images/testimonial/1.png" alt=""/>
                        <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat cupidatat non proident culpa.</p>
                        <p>Jean Baptiste</p>
                    </div>
        
                    <div className="col">
                        <img src="http://demo.zytheme.com/hairy/assets/images/testimonial/1.png" alt=""/>
                        <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat cupidatat non proident culpa.</p>
                        <p>Louis Jean</p>
                    </div>
                </div>
            </section>
        
            <section className="gallery" id="gallery">
                <h2>Gallery</h2>
                <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat
                    cupidatat non proident culpa.</p>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/034/039/869/non_2x/low-fade-machine-haircut-for-handsome-bearded-man-on-white-background-hair-cut-with-a-smooth-transition-ai-generative-photo.jpg" alt="" />
                    <img src="https://preview.redd.it/6wmp3haw9sh61.jpg?width=275&format=pjpg&auto=webp&s=ff79edd6daab8b2f0356897a2163a3494b1a3f5f" alt="" />
                    <img src="https://img.freepik.com/free-photo/stylish-man-sitting-barbershop_1157-21718.jpg" alt="" />
                    <img src="https://images.squarespace-cdn.com/content/v1/5cd9d27f840b16669a850ca3/1627466141730-N5FOAMUMOANMC8FUYLRH/jason-barber-mens-combed-haircut-barbers-den.jpeg" alt="" />
                    <img src="https://img.mensxp.com/media/content/2020/Aug/Dapper-Hairstyles-To-Go-For-When-Your-Barber-Accidentally-Cuts-Your-Hair-A-Bit-Too-Short-500-5_5f47a12700863.jpeg?w=450&h=548.1" alt="" />
                    <img src="https://content.latest-hairstyles.com/wp-content/uploads/short-buzz-cut-for-very-thick-hair-for-men.jpg" alt="" />
                    <img src="https://content.latest-hairstyles.com/wp-content/uploads/faux-hawk-crew-cut-on-mens-thick-black-hair.jpg" alt="" />
                    <img src="https://menshaircuts.com/wp-content/uploads/2023/03/best-haircuts-for-men-asymmetrical-long-bang-fade-683x1024.jpg" alt="" />
                </div>
            </section>
        
            <section className="contactus d-flex flex-column justify-content-center align-items-center" id="contactus">
                <h2>Contact us</h2>
                <form action="" method="post">
                    <label> Nom & Prénom :
                        <input className="form-control" type="text" name="nom" />
                    </label> <br />
                    <label> Email :
                        <input className="form-control" type="email" name="email" />
                    </label> <br />
        
                    <label> Message :
                        <textarea className="form-control" name="message"></textarea>
                    </label> <br />
                    <button className="btn btn-dark" type="submit"> Envoyer votre message </button>
                </form>
            </section>
        
            <footer>
                <p>Contact us: 123-456-7890 | info@hairsalon.com</p>
                <div className="social-media">
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                </div>
            </footer>
        
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
       
        
</>
    );
}

export default CoiffeurTemplate1;