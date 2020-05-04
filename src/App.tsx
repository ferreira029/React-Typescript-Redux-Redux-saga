import React, { Component } from 'react';
import RepositoryList from './components/RepositoryList';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RepositoryList />
      </Provider>
    );
  } 
}

export default App;
