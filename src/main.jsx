import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApolloProvider } from '@apollo/client'
import { client } from './apolloClient.js'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobaleStyle } from './globaleStyle.js'
import { Provider } from 'react-redux'
import { store } from '../store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <Router>
   
        <ApolloProvider client={client}>
        <Provider store={store}>
          
   

          <App />
          <GlobaleStyle/>
        </Provider>

        </ApolloProvider>
      </Router>
  </React.StrictMode>,
)
