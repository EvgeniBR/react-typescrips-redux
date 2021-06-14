import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import RepositoriesList from './components/RepositoriesList/RepositoriesList';
import './App.css';

function App() {
  return <Provider store={store}>
    <div>
      <h1>Search For a Package</h1>
      <RepositoriesList />
    </div>
  </Provider>;
}

export default App;
