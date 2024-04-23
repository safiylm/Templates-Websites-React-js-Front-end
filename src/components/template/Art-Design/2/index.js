import {  useState } from 'react';
import '../../../../styles/Art-Design/template2.scss'
import 'bootstrap/dist/css/bootstrap.css';

  const  tab = [
    {
      "id" : 1,
      "image": "https://resize.elle.fr/original/var/plain_site/storage/images/people/la-vie-des-people/news/emma-watson-designee-femme-la-plus-remarquable-de-l-annee-2938174/53980890-1-fre-FR/Emma-Watson-designee-femme-la-plus-remarquable-de-l-annee.jpg",
      "texte": "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
      "nom": "Emma Watson ",
      "metier": "Actrice"
    },
    {
      "id" : 2,
      "image": "https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/bb5e195ad4b95d589db0e8ac/pexelsphoto412840.jpeg",
      "texte": "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
      "nom": "Frank Kinney",
      "metier": "Financial Director"
    },
  ];
function ArtDesignTemplate2() {

  const [indexSlide, setIndexSlide] =useState(1);

  const suivant = ()=>{
    if(indexSlide < tab.length)
    setIndexSlide(indexSlide+1)
    console.log(indexSlide)
  }

  const precedent  = ()=>{
    if(indexSlide >1 )
    setIndexSlide(indexSlide-1)
    console.log(indexSlide)

  }
  
  return (
    <div id="page-template11" className='d-flex flex-row align-items-center justify-content-between'>
      <button  className='right' onClick={precedent}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
        </svg>
      </button>
      <div id='liste-profil' className='d-flex flex-column align-items-center justify-content-center'>
      {tab.filter(p => p.id == indexSlide ).map((item)=>(
          
          <div id='profil' key={item.id} className='d-flex flex-column align-items-center justify-content-center'>
            <img src={item.image } />
            <div id="texte">{item.texte}</div>
            <div id="nom">{item.nom}</div>
            <div id="metier">{item.metier}</div>
          </div>
        ))}

        <div className='liste-element'>
          {tab.map((element) => (
             
             element.id === indexSlide ? 
              <div className="element active"></div>
              : 
              <div className="element"></div>

            
            
          ))}
        </div>
      </div>
      <button className='left' onClick={ suivant }> 
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
        </svg>
      </button>

    </div>
  );
}

export default ArtDesignTemplate2;