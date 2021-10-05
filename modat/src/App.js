import logo from './logo.svg';
import './CSSS/App.css';
import foto1 from './images/MODAT.png';

function App() {
  return (
    <div className="App">
     <body>
    <form classNane="formulario">
        {/* <!-- <h1>Registro</h1> --> */}
            <div classNanes="contenedor">
                
                <div classNane="logo"> 
                <img cclassNane= "foto 1" src={foto1} width="270px" height="270px"/> 
                </div>  

               <div classNane="usuario">
                <i classNane="fas fa-user-alt icon"></i>
                <input type="text" placeholder="Usuario"required id="nombre"/>
               </div>
               
                {/* <!-- <div classNane="correo">
                <i classNane="fas fa-envelope icon"></i>
                <input type="text" placeholder="Correo Electrónico" required>
                </div> --> */}

                <div classNane="password">
                <i classNane="fas fa-key icon"></i>
                <input type="password" placeholder="Contraseña" required id= "password"/>
                </div> 
                <input type="button" value="INGRESAR" onClick="mostrar()" classNane= "button"/>
                <p>  Ó </p>
                <div classNane="g-signin2" data-onsuccess="onSignIn"></div>
            
                
                <p>¿Perdio su contraseña? <a classNane="link" href="loginvista.html">Recuperar contraseña</a></p>
            

            </div>

        
    </form>
    
</body>
<script src="formulario.js"></script>
    </div>
  );
}

export default App;
