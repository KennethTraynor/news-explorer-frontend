import React, { useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';

function App() {

    const [isSignupPopupOpen, setSignupPopupOpen] = React.useState(false);
    const [isSigninPopupOpen, setSigninPopupOpen] = React.useState(false);
    const [isInfoPopupOpen, setInfoPopupOpen] = React.useState(false);

    // Popups

    const onSignupPopupOpen = () => {
        closeAllPopups();
        addPopupKeyListener();
        setSignupPopupOpen(true);
    }

    const handleSignup = () => {
        onInfoPopupOpen();
    }

    const onSigninPopupOpen = () => {
        closeAllPopups();
        addPopupKeyListener();
        setSigninPopupOpen(true);
    }

    const onInfoPopupOpen = () => {
        closeAllPopups();
        addPopupKeyListener();
        setInfoPopupOpen(true);
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
        setSignupPopupOpen(false);
        setSigninPopupOpen(false);
        setInfoPopupOpen(false);
    }

    return (
        <div className='app'>
            <Switch>
                <Route exact path='/'>
                    <Main
                        isSignupPopupOpen={isSignupPopupOpen}
                        onSignupPopupOpen={onSignupPopupOpen}
                        handleSignup={handleSignup}

                        isSigninPopupOpen={isSigninPopupOpen}
                        onSigninPopupOpen={onSigninPopupOpen}

                        isInfoPopupOpen={isInfoPopupOpen}
                        onInfoPopupOpen={onInfoPopupOpen}
                        
                        closeAllPopups={closeAllPopups}
                        onPopupBackgroundClick={onPopupBackgroundClick}
                    />
                </Route>
                <Route path='/saved-news'><SavedNews /></Route>
                <Route><Redirect to='/'></Redirect></Route>
            </Switch>
        </div>
    )
}

export default App;
