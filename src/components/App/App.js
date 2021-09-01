import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';

function App() {
    return (
        <div className='app'>
            <Switch>
                <Route exact path='/'><Main /></Route>
                <Route path='/saved-news'><SavedNews /></Route>
                <Route><Redirect to='/'></Redirect></Route>
            </Switch>
        </div>
    )
}

export default App;
