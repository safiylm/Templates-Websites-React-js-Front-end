import '../styles/liste-template.css'
import {array_template_websites} from './array-template-website';

function ListeTemplateWebSite() {
  return (
    <div className="page-liste-templates-website">

      <div className="div-bar">Template Website </div>

      <div className="div-liste-templates-website">

        {array_template_websites.map(( template) => 


          <a key={template.id} href={"/template/"+ template.id} >
            <img src={ template.image } className="image" alt="logo" />
            <p>{template.titre }</p>
          </a>

        )}
     

      </div>

    </div>
  );
}

export default ListeTemplateWebSite;
