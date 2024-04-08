import '../styles/liste-template.scss'
import { array_template_websites } from './array-template-website';
import 'bootstrap/dist/css/bootstrap.css';

function ListeTemplateWebSite() {

  const queryParameters = new URLSearchParams(window.location.search)
  const categorie = queryParameters.get("categorie")
  console.log(categorie)

  return (
    <div className="page-liste-templates-website">

      <div className="div-bar">10+ Free Website Templates 2024</div>

      <div id='categorie' className='d-flex flex-row flex-wrap align-items-center justify-content-center'>
      <div> <a href="/">All category</a> </div>
        <div> <a href="?categorie=Travel">Travel</a> </div>
        <div><a href="?categorie=Art-Design">Art & Design </a></div>
        <div><a href="?categorie=Food-Restaurant-Nutrition">Food & Restaurant & Nutrition</a> </div>
        <div> <a href="?categorie=Education">Education</a></div>
        <div><a href="?categorie=Interior-Design">Interior Design</a></div>
        <div><a href="?categorie=Nature">Nature</a></div>
        <div><a href="?categorie=Portfolio">Portfolio</a></div>
      </div>


      <div id='block-design' className='d-flex flex-row flex-wrap align-items-center justify-content-center'>
        <div><a href="?categorie=Team">Team</a></div>
        <div><a href="?categorie=Pricing">Pricing</a></div>
        <div><a href="?categorie=Video">Video</a></div>
        <div><a href="?categorie=Product">Product List/ Details</a></div>
        <div><a href="?categorie=Slider">Slider</a></div>
        <div><a href="?categorie=Gallery">Gallery </a></div>
        <div><a href="?categorie=About-us">About us</a></div>
        <div><a href="?categorie=Contact-us">Contact us </a></div>
        <div><a href="?categorie=Contact-form">Contact Form </a></div>
      </div>

      <div id="div-liste-templates-website"  
      className='d-flex flex-row-reverse flex-wrap align-items-center justify-content-center'>

        {categorie == null ?
          array_template_websites.map((template) =>

            <div key={template.id} className='item'>
              <a href={"/template/" + template.id} >
                <img src={template.image} className="image" alt="logo" />
                <p>{template.titre}</p>
              </a>
            </div>
          ) :
          array_template_websites.filter(x => x.categorie == categorie).map((template) =>

            <div key={template.id} className='item'>
              <a href={"/template/" + template.id} >
                <img src={template.image} className="image" alt="logo" />
                <p>{template.titre}</p>
              </a>
            </div>)

        }




      </div>

    </div>
  );
}

export default ListeTemplateWebSite;
