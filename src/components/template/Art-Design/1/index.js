import '../../../../styles/Art-Design/template1.scss'
import 'bootstrap/dist/css/bootstrap.css';



function ArtDesignTemplate1() {

    return (
        <div id="div-ArtDesign1-container">

            <div className="div1"></div>
           
            <div id="div2" className="d-flex flex-row flex-wrap justify-content-evenly">
                <div className="left">
                    <img id="croissant" src="//images01.nicepage.com/c461c07a441a5d220e8feb1a/8f9c6b62b47251409226f758/fddfdf.png" />

                    <h1>What We Do</h1>
                    <p>Habitant morbi tristique senectus et. Nec dui nunc mattis enim ut tellus. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. </p>
                    <p>Images from <a href=""> Freepik</a></p>
                    <button>Learn More</button>
                </div>
                <div id="right" className="d-flex flex-column align-items-end">

                    <img id="sphere" src="//images01.nicepage.com/c461c07a441a5d220e8feb1a/36a0d48f91ce5fedbb5d4f16/aaaaa-min.png" />
                    <img id="cube" src="//images01.nicepage.com/c461c07a441a5d220e8feb1a/d96b7f93d0a35d2fb6095f03/s.png" />
                </div>
            </div>

            <div className="div3">
                <img src="//images01.nicepage.com/c461c07a441a5d220e8feb1a/44eb8e9990f35c8cbe2d3616/gfg.png" />
            </div>
            <a href="https://nicepage.com/website-templates/preview/branding-and-graphic-design-2200922?device=desktop" >
                Lien</a>
        </div>
    );
}

export default ArtDesignTemplate1;