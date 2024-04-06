import '../styles/liste-template.scss'
import { array_template_websites } from './array-template-website';

function ListeTemplateWebSite() {
  return (
    <div className="page-liste-templates-website">

      <div className="div-bar">10+ Free Website Templates 2024</div>

      <div className='categorie'>
        <div>Travel </div>
        <div>Technology</div>
        <div>Buissness & law </div>
        <div>Art & Design </div>
        <div>Food & Restaurant & Nutrition </div>

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

        {array_template_websites.map((template) =>

          <div key={template.id} className='item'>
            <a href={"/template/" + template.id} >
              <img src={template.image} className="image" alt="logo" />
              <p>{template.titre}</p>
            </a>
          </div>
        )}


<a href="https://nicepage.com/templates/preview/web-developer-portfolio-255570?device=desktop">Portfolio</a>
      </div>

    </div>
  );
}

export default ListeTemplateWebSite;
