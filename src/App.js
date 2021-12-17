import React, { Component, Suspense} from 'react';
//import Header from './component/Header/Header';
import Container from './component/Container/Container'
import Navigation from './component/Navigation/Navigation';
import AboutMe from './component/AboutMe/AboutMe';
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from './component/Contact/Contact';
import Home from './component/Home';

import { Route,  Switch } from "react-router-dom";




class App extends Component {
  
  render() {
    return (
      <Container>
        <Suspense fallback={<p>Загружаем...</p>}>
          <Navigation>
             <Home/>
            </Navigation >
        
          <Switch>
           
            <Route expect path="/home" component={Home} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contacts" component={Contact} />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}



export default (App)
