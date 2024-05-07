import '../../../../styles/Authentification/template1.scss';
import 'bootstrap/dist/css/bootstrap.css';



function AuthentificationTemplate1() {

    return (
        <div id="div-Authentification1-container">
            <form action="" method="">
                <input type="text" class="form-control" name="email" placeholder="email" auto autoComplete='off' required />

                <input type="password" class="form-control" name="password" placeholder="Mot de passe" autoComplete='off' required />
                <p>
                    <input type="checkbox" id="scales" name="scales" checked />
                    <label for="scales">Se souvenir de moi</label>
                </p>

                <button class="btn" type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        document.location.href = "/template/17"
                    }}>
                    Se connecter
                </button>


                <br />
                <a href="#">Mot de passe oublié ?</a>
            </form>
        </div>

    )
}

export default AuthentificationTemplate1;