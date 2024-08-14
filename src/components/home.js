import '../styles/home.scss'
import { array_template_websites } from './array-template-website';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {

  const queryParameters = new URLSearchParams(window.location.search)
  const categorie = queryParameters.get("categorie")

  const listeofcategorie = [
    "Blog",
    "Food-Restaurant-Nutrition",
    "Portfolio",
    "Agences", 
    "Ecommerce",
    "Authentification",
    "Education"
  ]


  return (
    <div className="page-liste-templates-website">

      <div className="div-bar">15+ Free Website Templates 2024</div>

      <div id='categorie' className='d-flex flex-row flex-wrap align-items-center justify-content-center'>
        <div><a href="/">All category</a> </div>
        {listeofcategorie.map((categ) =>
          <div><a href={"?categorie=" + categ}> {categ} </a> </div>
        )}
      </div>


      {categorie == null ?

        listeofcategorie.map((categ) =>
          <>
            <h2>{categ}</h2>
            <div id="div-liste-templates-website"
              className='d-flex flex-row flex-wrap align-items-center justify-content-center'>

              {array_template_websites.filter(x => x.categorie[0] == categ ||  x.categorie[1] == categ).map((template) =>

                <div key={template.id} className='item'>

                  <a href={"/template/" + template.id} >
                    <img src={template.image} className="image" alt={"image de " + template.titre} />
                    <p>{template.titre}</p>
                  </a>
                </div>
              )
              }
            </div>
          </>) :
        <>
          <h2>{categorie}</h2>
          <div id="div-liste-templates-website"
            className='d-flex flex-row flex-wrap align-items-center justify-content-center'>
            {array_template_websites.filter(x => x.categorie[0] == categorie ||x.categorie[1] == categorie  ).map((template) =>



              <div key={template.id} className='item'>
                <a href={"/template/" + template.id} >
                  <img src={template.image} className="image" alt={"image de " + template.titre} />
                  <p>{template.titre}</p>
                </a>
              </div>


            )}
          </div>
           </>}

    </div>
  );
}

export default Home;
