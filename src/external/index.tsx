import '@/components/_settings/global.css'
import { ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '@/context/store'
import { App } from './App'
import { apolloClient } from './graphql/config'

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>,

  document.getElementById('root')
)
