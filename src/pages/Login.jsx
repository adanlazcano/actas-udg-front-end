import './css/login.css';
import { Link } from 'react-router-dom';

//Login Page
const Login = _ =>{
    
    return(

        <section>
            
            <div className="container">
                <div className="user">
                    <div className="imgBx"><img src="logo.jpg" title="CUCEA" alt="logo"/></div>

                    <div className="formBx">
                    
                        <h2>Centro Universitario de Ciencias Econ&oacute;mico Administrativas</h2>
                        <div className="inputBx">
                            <label>Usuario</label>
                            <input readOnly={true} type="text" defaultValue="demo@cucea.udg.mx" />
                            <label>Contraseña</label>
                            <input readOnly={true} type="password" defaultValue="12345678"/>
                        </div>
                        <Link to="/dashboard">
                            <button className="btn">Entrar</button>
                        </Link>
                    
                    </div>
                </div>
            </div>
  
        </section>
    )
}

export default Login