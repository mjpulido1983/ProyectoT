import React from 'react'
import '../styles/formulario.css';
import foto1 from '../media/MODAT.png';
import back from '../media/backgroundlogin.png';
import formulario from '../script/formulario.js';

function Formulario() {
  return (
    <div className="App">
     <body background= {back} >
    <form className="formulario">

      
        {/* <!-- <h1>Registro</h1> --> */}
            <div className="contenedor">
                
                <div className="logo"> 
                <img className= "foto 1" src={foto1} width="270px" height="270px"/> 
                </div>  

               <div className="usuario">
                <i className="fas fa-user-alt icon"></i>
                <input type="text" placeholder="Usuario"required id="nombre"/>
               </div>
               
                {/* <!-- <div classNane="correo">
                <i classNane="fas fa-envelope icon"></i>
                <input type="text" placeholder="Correo Electrónico" required>
                </div> --> */}

                <div className="password">
                <i className="fas fa-key icon"></i>
                <input type="password" placeholder="Contraseña" required id= "password"/>
                </div> 
                <input type="button" value="INGRESAR" onClick="mostrar()" className= "button"/>
                <p>  Ó </p>
                <div className="g-signin2" data-onsuccess="onSignIn"></div>
            
                
                <p>¿Perdio su contraseña? <a className="link" href="loginvista.html">Recuperar contraseña</a></p>
            

            </div>

        
    </form>
    
</body>
<script src="formulario.js"></script>
    </div>
  );
}

export default Formulario;
