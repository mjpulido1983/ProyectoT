import React from 'react';
import Formulario from "./pages/Formulario";
import Producto from  "./pages/Producto";
import Usuario from "./pages/Usuario";
import Vendedor  from "./pages/Vendedor";
import Ventas  from "./pages/Ventas";

import  './styles/formulario.css'
import  './styles/producto.css';
import  './styles/usuario.css';
import  './styles/vendedor.css';
import  './styles/ventas.css';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function App ()  {
  return (
    <div className='App'>
    <Router>
      <Switch>
        <Route path="/" exact>
            <Formulario/>
            </Route>
        <Route path="/producto">
            <Producto/>
            </Route>
        <Route path="/usuario">
          <Usuario/>
        </Route>
        <Route path="/vendedor">
          <Vendedor/>
          </Route>
        <Route path="/ventas">
        <Ventas/>
        </Route>
      </Switch>
  </Router>
  </div> 
  );
}
export default App;
