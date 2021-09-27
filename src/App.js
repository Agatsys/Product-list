import React from 'react'
import { Route } from 'react-router';
import './media/styles/index.scss';
import detailsPage from './pages/detailsPage/detailsPage';
import mainPage from './pages/mainPage/mainPage';


const App = () => {
  return (
    <div className="app-wrapper">
      <Route exact path='/' component={mainPage} /> 
      <Route exact path='/details/:id' component={detailsPage} />
    </div>
  );
}

export default App;
