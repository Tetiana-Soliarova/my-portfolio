import React, { Component, Suspense} from 'react';
//import Header from './component/Header/Header';
import Container from './component/Container/Container'
import Navigation from './component/Navigation/Navigation';
import AboutMe from './component/AboutMe/AboutMe';
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from './component/Contact/Contact';

class App extends Component {
  
  render() {
    return (
      <Container> <Suspense fallback={<p>Загружаем...</p>}>
       
        <Navigation />
        <AboutMe />
        <Portfolio />
        <Contact/>
       </Suspense>
      </Container>
    );
  }
}



export default (App)
