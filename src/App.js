import React from 'react'
import { Route } from 'react-router';
import './media/styles/index.scss';
import DetailPage from './pages/detailsPage/detailsPage';
import mainPageContainer from './pages/mainPage/mainPageContainer';

const App = (props) => {
  return (
    <div className="AppWrapper">
      <Route exact path='/' component={() => <mainPageContainer /> } /> 
      <Route exact path='/details/:id' component={() => <DetailPage/> } />
    </div>
  );
}

export default App;
