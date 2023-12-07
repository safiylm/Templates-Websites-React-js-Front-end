import ArticleRecette from "../7/articleRecette.js"
import "../../../styles/template6.scss"


function TemplateWebSite6() {

  return (
    <div className="page-template6">
      <div className="div0">
        <h1>Ne cherchez plus <br />
          Céto c'est là</h1>
        <p>
          Découvrez le régime Céto avec des conseils adaptés</p>
        <button>Acheter Pack </button>
      </div>
      <div className="div1">
        <div className="div-les-articles">

          <ArticleRecette titre="Bon, mauvais gras ?" imageurl="https://static.wixstatic.com/media/5305c5_7ce56faed8ad4a4cbf0ee6c6b2019f55~mv2_d_3456_5184_s_4_2.jpg/v1/fill/w_608,h_608,fp_0.50_0.50,q_90,enc_auto/5305c5_7ce56faed8ad4a4cbf0ee6c6b2019f55~mv2_d_3456_5184_s_4_2.jpg" />
          <ArticleRecette titre="Comment bien choisir son poisson ?" imageurl="https://static.wixstatic.com/media/5305c5_031db8312d3c43c3825ed1dc86fab98d~mv2_d_3775_5663_s_4_2.jpg/v1/fill/w_608,h_608,fp_0.50_0.50,q_90,enc_auto/5305c5_031db8312d3c43c3825ed1dc86fab98d~mv2_d_3775_5663_s_4_2.jpg" />
          <ArticleRecette titre="Poisson à la méditerranéenne " imageurl="https://static.wixstatic.com/media/5305c5_b9efb8c6b9e94c5b92354a029fee9ca3~mv2_d_5700_3830_s_4_2.jpeg/v1/fill/w_608,h_608,fp_0.50_0.50,q_90,enc_auto/5305c5_b9efb8c6b9e94c5b92354a029fee9ca3~mv2_d_5700_3830_s_4_2.jpeg" />
          <ArticleRecette titre="Salade de printemps et pecorino " imageurl="https://static.wixstatic.com/media/5305c5_d80a8fafcfa34c70a027f29a1f92bf9a~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_608,h_608,fp_0.50_0.50,q_90,enc_auto/5305c5_d80a8fafcfa34c70a027f29a1f92bf9a~mv2_d_6000_4000_s_4_2.jpg" />
          <ArticleRecette titre="Vos nouvelles habitudes Céto : tout ce que vous devez savoir" imageurl="https://static.wixstatic.com/media/5305c5_ef23e1c298c742e380f7ec489ec94880~mv2_d_3144_4183_s_4_2.jpg/v1/fill/w_608,h_608,fp_0.50_0.50,q_90,enc_auto/5305c5_ef23e1c298c742e380f7ec489ec94880~mv2_d_3144_4183_s_4_2.jpg" />
        </div>
        <div className="div-right-of-les-articles">
          <div className="div-auteur">
            <img style={{"margin": "0"}}src="https://static.wixstatic.com/media/5305c5_95a7095f0b06453a8ab306ece8a3fa83~mv2_d_3733_5600_s_4_2.jpg/v1/crop/x_0,y_438,w_3733,h_4309/fill/w_678,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-585357375.jpg" />
            <h1>Julie <br /> Brun</h1>

            <p>
              Paragraphe. Cliquez ici pour ajouter votre propre texte. Cliquez sur
              « Modifier Texte » ou double-cliquez ici pour ajouter votre contenu et personnaliser les polices...
            </p>
            <a>Lire Plus</a>
          </div>


          <img id="" src="https://static.wixstatic.com/media/5305c5_01c71640bbb44abea2f5eef501e05014~mv2_d_3868_2574_s_4_2.jpg/v1/crop/x_741,y_0,w_2393,h_2560/fill/w_682,h_720,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-525445909.jpg" />


          <div className="div-resaux-sociaux">
            <p>RETROUVER MOI </p>
            <div>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
                </svg>
              </a>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                </svg>
              </a>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
            </div>
          </div>

          <div className="div-sabonner">
            <p>SOUSCRIRE À MA NEWSLETTER</p>
            <input placeholder="Saisissez votre e-mail ici*" />
            <br/>
            <button>S'abonner</button>
          </div>
        </div>

      </div>

      <div className="div2">
        <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Keto%20Diet%20blog/01.jpg"/>
        <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Keto%20Diet%20blog/02.jpg"/>
        <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Keto%20Diet%20blog/03.jpg"/>
        <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Keto%20Diet%20blog/04.jpg"/>
        <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Keto%20Diet%20blog/05.jpg"/>
        <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Keto%20Diet%20blog/06.jpg"/>
        <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Keto%20Diet%20blog/07.jpg"/>
        <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Keto%20Diet%20blog/08.jpg"/>
        <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Keto%20Diet%20blog/09.jpg"/>
        <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Keto%20Diet%20blog/10.jpg"/>

      </div>
    </div>
  );
}

export default TemplateWebSite6;