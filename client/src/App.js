import React, {useState } from 'react';
import './App.css';

// components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Contact from './pages/Contact';
import Nav from './components/Nav/index';

// Apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Nav />
            <Switch>
              <Route exact path='/' component={Search} />
              <Route exact path='/saved' component={Saved} />
              <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;