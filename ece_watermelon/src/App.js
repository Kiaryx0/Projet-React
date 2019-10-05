import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SubscribePage from './Pages/SubscribePage';

const App = () => (
    <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/subscribe" exact component={SubscribePage}/>
    </div>
);
        
export default App;
