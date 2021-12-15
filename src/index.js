import React from 'react'
import ReactDOM from 'react-dom'
import "../src/index.scss";
import App from './App'
//import { store, persistor } from './redux/store'
//import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
//import { PersistGate } from 'redux-persist/integration/react'

//console.log(store)

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
     
          <App />
        
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)