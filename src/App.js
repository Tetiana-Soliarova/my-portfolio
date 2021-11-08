import React, { Component, Suspense} from 'react';
//import Header from './component/Header/Header';
import Container from './component/Container/Container'
import  Navigation from './component/Navigation/Navigation'

class App extends Component {
  
  render() {
    return (
      <Container>
        
        
           <Navigation/>
        <Suspense fallback={<p>Загружаем...</p>}>
          
        </Suspense>
      </Container>
    )
  }
}



export default (App)
