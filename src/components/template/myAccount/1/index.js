import '../../../../styles/MyAccount/template1.scss';
import 'bootstrap/dist/css/bootstrap.css';


function MyAccountTemplate1() {

  return (
    <div id="div-AuthentificationCompte1-container">


      <form className=''>
        <div id="div-myaccount-edit" className='d-flex align-items-center justify-content-between'>
          <h1>My account</h1>
          <button type="button" className='btn btn-primary' >Edit</button>
        </div>
        <div id="div-user-information">
          <h2>User Information </h2>
          <div className='d-flex flex-wrap align-items-center justify-content-between'>

            <div className="input-group mb-3">
              <label>Nom:</label>
              <input className='form-control' value="nom" />
            </div>
            <div className="input-group mb-3">
              <label>Prenom:</label>
              <input className='form-control' value="prenom" />
            </div>
          </div>

          <div className='d-flex flex-wrap align-items-center justify-content-between'>

            <div className="input-group mb-3">
              <label>Email:</label>
              <input className='form-control' value="email" />
            </div>
            <div className="input-group mb-3">
              <label>Mot de passe:</label>
              <input className='form-control' value="password" />
            </div>
          </div>
        
        </div>

        <div id="div-contact-information">
          <h2>Contact information</h2>
          <div className='d-flex flex-wrap align-items-center justify-content-between'>

            <div className="input-group mb-3" id="adresse">
              <label>Adresse:</label>
              <input className='form-control' value="adresse" name="adresse" />
            </div>
            
          </div>

          <div className='d-flex flex-wrap align-items-center justify-content-between'>

            <div className="input-group mb-3">
              <label>City:</label>
              <input className='form-control' value="city" />
            </div>
           
            <div className="input-group mb-3">
              <label>Contry:</label>
              <input className='form-control' value="US" />
            </div>

            <div className="input-group mb-3">
              <label>Postal code :</label>
              <input className='form-control' value="Postal code" />
            </div>
          </div>
        
        </div>

        <div id="div-about-me">
          <h2>About me</h2>

            <div className="form-floating mb-3">
              <textarea className='form-control'  id="aboutmeTextarea"></textarea>
              <label for="aboutmeTextarea">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</label>
            </div>
            
          </div>

      </form>

    </div>

  )
}

export default MyAccountTemplate1;