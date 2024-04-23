import '../../../../styles/Education/template1.scss';
import 'bootstrap/dist/css/bootstrap.css';



function EducationTemplate1() {
const goToLink = () => {
   // document.location.href='https://createur2site.fr/creation-site-internet/creer-site/langage-programmation/'
}
    return (
        <div id="div-Education1-container">
            <div className="d-flex justify-content-between" id="nav">
                <div>Accueil</div>
                <div>Création de site </div>
                <div>Consultant SEO </div>
                <div>Blog</div>
            </div>

            <div className="d-flex justify-content-end"  id="nav">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
            </div>

            <div className="d-flex flex-wrap justify-content-between"  id="nav">

                <div className='div-left'>
                    <form>
                        <h2>Recevez un e-mail chaque fois que nous publions un nouvel article !</h2>
                        <input className="form-control" placeholder='E-mail' autoComplete='none' />
                        <button className="btn btn-light">S'abonner</button>
                    </form>
                </div>
                <div className='div-center'>
                    <h1 id="titre-h1">
                        Les meilleurs langages de programmation pour créer un site web (2023)
                    </h1>
                    <p id="nb-commentaires">2 commentaires</p>
                    <img src="https://createur2site.fr/wp-content/uploads/2022/02/meilleur-langages-programmation.png.webp" />
                    <div className='border-bottom'></div>
                    <div id="texte">
                        De la même manière qu’est compris le langage naturel entre les humains, les langages de programmation web eux sont compris et interprétés par les navigateurs. Les navigateurs qui les comprennent nous les affichent par la suite pour que nous, nous les comprenions. Nous pouvons séparer deux types de langage : le « frontend » qui permet d’habiller la page, et le « backend » qui permet d’effectuer des tâches en arrière plan invisibles par l’utilisateur. Par exemple, le visuel d’un bouton d’inscription est du frontend, le backend lui s’occupe de créer votre inscription dans la base de données une fois que vous avez cliqué. Même si nous pouvons les séparer, sachez que certains langages de programmation web, comme le JavaScript, peuvent à la fois s’occuper du front et du back.
                    </div>

                    <h2>Les meilleurs langages frontend</h2>
                    <div id="texte">Coté front, nous pouvons très distinctement constater la différence visuellement sur ce que peuvent offrir les meilleurs langages front. Ceci étant dit, nous allons vous citer les langages de programmation qu’utilisent les plus beaux sites internet du monde.</div>

                    <h3>HTML / CSS </h3>
                    <img src="https://createur2site.fr/wp-content/uploads/2021/11/logo-css-html-1024x499.png.webp" />

                    <div id="texte">HTML et CSS ne sont pas ce que l’on appelle des langages de programmation web, mais plutôt des langages informatiques. Tout comme les langages de programmation web, ils sont interprétés par le navigateur. Malgré tout ils ne permettent pas de « programmer ». HTML lui est un langage dit de balisage, il permet de structurer une page web. Quant au CSS, il s’agit d’un langage de style pour le HTML, il permet de styliser et modifier le code HTML.</div>
                    <div id="texte">Ils sont indispensables dans n’importe quelle création de site web et sont les langages les plus simples à apprendre. Pour ce qui est de CSS(3), sachez qu’il permet d’aller très loin à lui tout seul comme pour créer des animations, de transformer des éléments en « 3D » et bien d’autres choses encore.</div>

                    <h2>JavaScript</h2>
                    <div id="texte">JavaScript ne doit pas être confondu avec le langage Java, ça n’a rien à voir ! Ce langage web permet de réaliser énormément de choses, de l’envoi de formulaire coté back aux animations front les plus complexes. D’ailleurs, de nombreux « langages » viennent de celui-ci, appelé bibliothèque ou framework. Il est le plus incontournable des langages de programmation.</div>

                    <h3>React, Angular, Vue</h3>
                    <div id="texte">En plus des langages mentionnés ci-dessus, il existe également des frameworks frontend très populaires qui facilitent le développement de sites web interactifs et dynamiques.

                        Voici quelques-uns des frameworks les plus utilisés :
                        <ul>
                            <li> React : Développé par Facebook, React est un framework JavaScript qui permet de créer des interfaces utilisateur interactives. Il est largement utilisé et apprécié pour sa flexibilité et sa performance.
                            </li>
                            <li>Angular : Développé par Google, Angular est un framework JavaScript complet pour la création d'applications web. Il offre de nombreuses fonctionnalités prêtes à l'emploi et facilite la structuration et la maintenance des projets.
                            </li>
                            <li>Vue : Vue.js est un framework JavaScript progressif et facile à utiliser pour la construction d'interfaces utilisateur. Il est connu pour sa simplicité et sa courbe d'apprentissage douce, ce qui en fait un excellent choix pour les débutants.
                            </li> </ul>
                        Ces frameworks sont très populaires dans la communauté du développement web et offrent de nombreux avantages pour la création de sites web modernes et réactifs.
                    </div>
                    <h3>WebGl / ThreeJs</h3>
                    <div id="texte">
                        WebGL est une interface de programmation permettant un rendu 3D dynamique pour les pages et applications en HTML5, utilisant une API JavaScript reliée à OpenGL . Plus simplement dit, il permet d’intégrer de la 3D sur les navigateurs web. Concrètement, Google Map l’utilise.

                        Three.js comme son nom le laisse penser est effectivement une bibliothèque (ou framework...) JavaScript. En général, les sites 3D sont crées en WebGL avec Three.js (sans oublier HTML, CSS,...) Ces langages permettent de passer vers la création de sites futuristes et sont probablement les meilleurs langages pour créer les plus beaux sites web du monde. Ainsi, voici quelques exemples de sites réalisés en 3D :

                        <ul>
                            <li> https://zen.ly/fr</li>
                            <li> https://live.vanmoof.com/</li>
                            <li> https://go.pioneer.com/cornrevolution</li>
                            <li> https://github.com/home</li>
                            <li>...</li>

                        </ul>
                    </div>


                    <h3>GSAP</h3>
                    <div id="texte">
                        GSAP est une bibliothèque d’animation JavaScript rapide, puissante, robuste et qui s’intègre facilement dans n’importe quel framework JS. En d’autres termes, GSAP est le couteau suisse super puissant de l'animation Javascript. Il anime tout ce que JavaScript peut toucher (propriétés CSS, objets de la bibliothèque de canevas, SVG, React.js, Vue.js, Three.js : peu importe) et il résout d'innombrables incohérences du navigateur, le tout à une vitesse fulgurante (jusqu'à 20 fois plus rapide que jQuery). GSAP est totalement flexible et il est donc possible de le saupoudrer n’importe où.
                        Si vous avez adoré le 3D, GSAP est utilisé dans certains des projets WebGL les plus populaires alimentés par Three.js.

                        Envie de voir quelques exemples réalisés avec GSAP ? En voici quelques-un :

                        <ul>
                            <li> https://takeboost.com/</li>
                            <li> https://menudurable.ca/</li>
                            <li> https://yolele.com/</li>
                            <li> createur2site.fr</li>
                            <li> ...</li>
                        </ul>
                    </div>

                    <h2>Les meilleurs langages backend</h2>
                    <div id="texte">Il n’y a pas de meilleur langage à proprement parler côté backend puisque cela dépend de ce que vous devez construire. Il existe des milliers de langages de programmation mais voici les plus utilisés et les plus flexibles :</div>

                    <h3>PHP</h3>
                    <div id="texte">PHP est le langage le plus connu pour le back, il est d’ailleurs le pilier du CMS WordPress. PHP se modernise de plus en plus et s’éloigne peu à peu du simple langage de script vers un langage de programmation polyvalent. En outre, c’est un très bon langage pour créer un très bon site web. Il existe également de nombreux framework PHP incroyables comme Laravel et Symfony.</div>

                    <h3>SQL : MySQL & MariaDB</h3>
                    <div id="texte">SQL n’est pas techniquement un langage de programmation puisqu’il n’est pas comparable à des langages polyvalents tels que JavaScript. Dans tous les cas, c’est un langage informatique indispensable pour toute création de site internet. Son objectif principal est de servir d’interface avec une base de données d’un site. Ensuite, il existe des systèmes de gestion de base de données tels que MySQL ou MariaDB (MariaDB est le meilleur).</div>

                    <h3>Ruby</h3>
                    <div id="texte">Ruby est l’un des meilleurs langages notamment parce qu’il est utilisable coté front et back (tout comme JavaScript) mais il est également simple d’utilisation, d’autant plus grâce au framework Ruby on Rails. Cela ne l’empêche pas d’être beaucoup utilisé et d’extrêmement bien faire son travail. C’est donc un incontournable.</div>

                    <h2>Le no-code ou low-code</h2>
                    <div id="texte">
                        Si apprendre un langage vous semble trop pénible, ou si vous ne savez pas par ou commencer, utiliser un outil low-code est probablement l'idéal. Il vous permettra de voir concrètement ce que vous faites, mais vous pourrez également écrire vos propres lignes de code pour perfectionner vos créations !
                    </div>





                </div>
                <div className='div-right'>

                    <div>
                        <h2>Création de site internet</h2>
                        <ul>
                            <li>Comment créer un site internet ?</li>
                            <li>  Créer un site internet professionnel</li>
                            <li>   Pourquoi utiliser WordPress ?</li>
                            <li>     Créer un site avec WordPress</li>
                            <li>  Le no code et le low code</li>
                            <li>      Webflow</li>
                            <li>     Webflow vs WordPress</li>
                            <li>  Langages de programmation web à apprendre</li>
                        </ul>

                    </div>


                    <div className='div-besoin'>

                        <h2>Vous avez besoin d'aide ?</h2>
                        <p>N'hésitez pas ! Nous sommes experts en création de site et en référencement naturel (seo).</p>
                        <button className="btn btn-dark">Contactez nous!</button>

                    </div>
                </div>

            </div>

            <div className='div-commentaires'>

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p><strong> Bah Ousmane</strong>	sur 7 décembre 2022 à 23 h 35 min</p>
                        <p> La description est vraiment très Claire. C'est facile à comprendre. Merci beaucoup et bonne continuation.</p>
                    </div>

                    <div className='div-button'>
                        <button>Reponse</button>
                    </div>

                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p><strong>  AB</strong> sur 26 juin 2023 à 7 h 08 min</p>
                        <p> Pas de react?</p>
                    </div>
                    <div>

                        <div className='div-button'>
                            <button>Reponse</button>
                        </div>
                    </div>


                </div>


                <form>
                    <h2>Soummetre un commentaire </h2>
                    <textarea class="form-control" placeholder='Commentaire *'></textarea>
                    <input class="form-control" placeholder='Nom *' />
                    <input class="form-control" placeholder="E-mail *" />
                    <div className='div-button'>
                        <button>Soumettre le commentaire</button>
                    </div>
                </form>
            </div>

            <div className="d-flex flex-wrap justify-content-around  align-items-center" id="prendrerdv">
                <h1>Votre site WordPress est... ennuyeux ? Votre site web n'est pas en première page de Google ?
                    <br />
                    <br />
                    Vous inquiétez pas. Parlons-en.</h1>
                <button className="btn btn-light">Prendre rendez vous </button>
                <img src="https://createur2site.fr/wp-content/uploads/2021/09/cluster-4.png.webp" alt='logo'/>
            </div>

            <footer className="d-flex flex-wrap justify-content-around">

                <div  className="d-flex flex-column mb-3">
                    <button  className="btn btn-light" onClick={goToLink()}>Contactez nous</button>
                    <div>contact@createur2site.fr</div>
                    <div>06 51 89 35 83</div>
                </div>

                <div className="d-flex flex-column mb-5">
                    <div> Créateur de site</div>
                    <div>Création de site </div>
                    <div> Créer site internet </div>
                    <div> Créer un site WordPress </div>
                    <div> Thème WordPress  </div>
                </div>

                <div className="d-flex flex-column mb-6">
                    <div> SEO </div>
                    <div>  Consultant SEO  </div>
                    <div> Agence SEO</div>
                    <div> Agence SEO Paris</div>
                    <div>  Consultant SEO Paris </div>
                    <div> Blog </div>
                </div>
            </footer>
        </div>

    )
}

export default EducationTemplate1;
