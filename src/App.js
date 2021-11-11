import React, { Component, Suspense} from 'react';
//import Header from './component/Header/Header';
import Container from './component/Container/Container'
import Navigation from './component/Navigation/Navigation';
import AboutMe from './component/AboutMe/AboutMe';


class App extends Component {
  
  render() {
    return (
      <Container>
        
        
        <Navigation />
        <AboutMe/>
        <Suspense fallback={<p>Загружаем...</p>}>
          
        </Suspense>
      </Container>
    )
  }
}



export default (App)
