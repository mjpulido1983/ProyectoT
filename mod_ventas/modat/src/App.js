import React, {Fragment} from 'react';
import VentasPage from './ventas/VentasPage';
import BuscarPage from './buscar/BuscarPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponents from './shared/components/navbar/NavbarComponents';


function App() {
  return (
    <Router>
      <NavbarComponents />
     <Switch>
       <Route path="/" exact>
         <BuscarPage />

       </Route>
     </Switch>
     <Switch>
       <Route path="/buscar" exact>
         <BuscarPage />

       </Route>
     </Switch>
    </Router>
  );
}

export default App;
