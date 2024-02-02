import '../styles/liste-template.scss'
import {array_template_websites} from './array-template-website';

function ListeTemplateWebSite() {
  return (
    <div className="page-liste-templates-website">

      <div className="div-bar">10+ Free Website Templates 2024</div>

      <div className="div-liste-templates-website">

        {array_template_websites.map(( template) => 

          <div key={template.id} className='item'>
          <a  href={"/template/"+ template.id} >
            <img src={ template.image } className="image" alt="logo" />
            <p>{template.titre }</p>
          </a>
</div>
        )}
     

      </div>

    </div>
  );
}

export default ListeTemplateWebSite;
