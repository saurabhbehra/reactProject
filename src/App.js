import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap.css import

import Header from './content/Header'
import Footer from './content/Footer'
import Home from './content/Home'
import Form from './content/Form'
import Fee from './content/Fee'
import Gallery from './content/Gallery'
import Faculties from './content/Faculties'
import Contact from './content/Contact'


const App = () => {
  return (
   <Router>
        <Header/>  
        <Switch>
            <Route path="/" exact>
                  <Home />
            </Route>
            <Route path="/apply-online" exact>
                <Form />
            </Route>
            <Route path="/fee-structure" exact>
                  <Fee />
            </Route>
            <Route path="/gallery" exact>
                  <Gallery />
            </Route>
            <Route path="/teachers-info" exact>
                  <Faculties />
            </Route>
            <Route path="/contact-us" exact>
                  <Contact />
            </Route>
            <Redirect to="/" />
         </Switch>
         <Footer/>
    </Router>
   
  );
}

export default App;
