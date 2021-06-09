import React from 'react';

import LoginPage from './pages/login'
import AtendentePage from './pages/atendente'
import ClientePage from './pages/cliente'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import {isAdmin} from './utils/auth';
import Menu from './components/Menu';

const PrivateRoute = ({ component: Component }) => (
    <Route
      render={props =>
        isAdmin()  ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );

const Routes = () =>
    <Router>
        
        <Switch>
            <Route exact path='/' component={LoginPage} />
            <PrivateRoute path='/atendente' component={AtendentePage} /> 
            <Route path='/cliente' component={ClientePage} />      
        </Switch>
    </Router>

export default Routes;