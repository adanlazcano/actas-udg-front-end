import { Link } from 'react-router-dom';
import {useContext} from 'react';
import MainContext from '../context/MainContext';
import './css/components.scss';

//Draw Header and set search
const Header = () => {

 const{searchStudent} = useContext(MainContext);

  window.addEventListener('click',_=>{
    const menu = document.querySelector('.menuHeader');
    menu && menu.classList.remove('active');
  });

  const handleMenu = e =>{
    e.stopPropagation();
    document.querySelector('.menuHeader').classList.toggle('active');
  }

  const handleChange = e =>{

    searchStudent(e.target);
  }

    return (
        <div className="header">
          <Link to="/dashboard">
            <img  className="headerLogo" src="logo.jpg" alt="logo" title="CUCEA" />
          </Link>
          <input onChange={handleChange} autoFocus={true} placeholder="No. de Registro del Alumno"  type="search" />

          <img onClick={handleMenu} className="headerImg" src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" title="Bienvenid@ demo" alt="Bienvenid@ demo" />

          <div  className="menuHeader">
            
             <Link className="menuHeaderLink"  to="/">
              <i title="Cerrar Sesión" className='bx bx-log-out'></i>
              <span>Cerrar Sesi&oacute;n</span>
            </Link>
         
          </div>

        </div>
    )
}

export default Header
