import React, { Component, Suspense} from 'react';
//import Header from './component/Header/Header';
import Container from './component/Container/Container'
import Navigation from './component/Navigation/Navigation';
import AboutMe from './component/AboutMe/AboutMe';
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from './component/Contact/Contact';
import Home from './component/Home';

import { Route, Routes } from "react-router-dom";




class App extends Component {
  
  render() {
    return (
      <Container>
        <Suspense fallback={<p>Загружаем...</p>}>
          <Navigation />
          <Routes>
            <Route expect path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </Suspense>
      </Container>
    );
  }
}



export default (App)
