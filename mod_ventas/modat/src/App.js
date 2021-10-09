import React, { Fragment } from 'react';
import VentasPage from './ventas/VentasPage';
import BuscarPage from './buscar/BuscarPage';
import ModVentasPage from './modventas/ModVentasPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponents from './shared/components/navbar/NavbarComponents';
import Footer from './shared/components/footer/Footer';



function App() {
  return (
    <Router>
      <NavbarComponents />
      <Switch>
        <Route path="/ventas" exact>
          <VentasPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/buscar" exact>
          <BuscarPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/modventas" exact>
          <ModVentasPage />
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
