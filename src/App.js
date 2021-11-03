import React from 'react'
import { Route } from 'react-router';
import './media/styles/index.scss';
import DetailsPage from './pages/detailsPage/DetailsPage';
import MainPage from './pages/mainPage/MainPage';


const App = () => {
  return (
    <>
      <div className="app-wrapper">
        <Route exact path='/' component={MainPage} />
        <Route exact path='/details/:id' component={DetailsPage} />
      </div>
    </>
  );
}

export default App;