import '../styles/liste-template.scss'
import { array_template_websites } from './array-template-website';

function ListeTemplateWebSite() {

  const queryParameters = new URLSearchParams(window.location.search)
  const categorie = queryParameters.get("categorie")
  console.log(categorie)

  return (
    <div className="page-liste-templates-website">

      <div className="div-bar">10+ Free Website Templates 2024</div>

      <div className='categorie'>
        <div> <a href="?categorie=Travel">Travel</a> </div>
        <div>Technology</div>
        <div>Buissness & law </div>
        <div>Art & Design </div>
        <div><a href="?categorie=Food-Restaurant-Nutrition">Food & Restaurant & Nutrition</a> </div>

        <div>Education</div>
        <div>Interior</div>
        <div>Travel & Hotels</div>
        <div>Nature</div>
        <div>Portfolio</div>
      </div>
     
      <div className='block-design'>
       <div>Team</div>
        <div>Pricing</div>
        <div>Video</div>
        <div>Product List/ Details</div>
        <div>Slider</div>
        <div>Gallery </div>
        <div>About us </div>
        <div>Contact us </div>
        <div>Contact Form </div>
      </div>

      <div className="div-liste-templates-website">

      {categorie == null ?
        array_template_websites.map((template) =>

          <div key={template.id} className='item'>
            <a href={"/template/" + template.id} >
              <img src={template.image} className="image" alt="logo" />
              <p>{template.titre}</p>
            </a>
          </div>
        ) :
        array_template_websites.filter( x => x.categorie == categorie ).map((template) =>

          <div key={template.id} className='item'>
            <a href={"/template/" + template.id} >
              <img src={template.image} className="image" alt="logo" />
              <p>{template.titre } 3333</p>
            </a>
          </div>)
        
        }




<a href="https://nicepage.com/templates/preview/web-developer-portfolio-255570?device=desktop">Portfolio</a>
      </div>

    </div>
  );
}

export default ListeTemplateWebSite;
