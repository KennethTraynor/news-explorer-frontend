import React, { useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';

function App() {

    const [isPopupOpen, setPopupOpen] = React.useState(true);

    // Popups

    const onPopupOpen = () => {
        addPopupKeyListener();
        setPopupOpen(true);
    }

    const onPopupBackgroundClick = (e) => {
        if (e.target.classList.contains('popup')) {
            closeAllPopups();
        }
    }

    const onPopupKeyPress = useCallback((e) => {
        if (e.key === 'Escape') {
            closeAllPopups();
        }
    }, []);

    const addPopupKeyListener = () => {
        document.addEventListener('keydown', onPopupKeyPress, false);
    }

    const closeAllPopups = () => {
        document.removeEventListener('keydown', onPopupKeyPress, false);
        setPopupOpen(false);
    }

    return (
        <div className='app'>
            <Switch>
                <Route exact path='/'>
                    <Main
                        isPopupOpen={isPopupOpen}
                        closeAllPopups={closeAllPopups}
                        onPopupBackgroundClick={onPopupBackgroundClick}
                        onPopupOpen={onPopupOpen}
                    />
                </Route>
                <Route path='/saved-news'><SavedNews /></Route>
                <Route><Redirect to='/'></Redirect></Route>
            </Switch>
        </div>
    )
}

export default App;
