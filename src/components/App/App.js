import React, { useCallback, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import newsApi from '../../utils/NewsApi';

function App() {

    // Popups
    const [isSignupPopupOpen, setSignupPopupOpen] = React.useState(false);
    const [isSigninPopupOpen, setSigninPopupOpen] = React.useState(false);
    const [isInfoPopupOpen, setInfoPopupOpen] = React.useState(false);

    // Nav Menu
    const [isNavMenuOpen, setNavMenuOpen] = React.useState(false);

    // News Searching
    const [isSearching, setSearching] = React.useState(false);
    const [newsResults, setNewsResults] = React.useState([]);
    const [isNothingFoundVisible, setNothingFoundVisible] = React.useState(false);
    const [isSearchErrorVisible, setSearchErrorVisible] = React.useState(false);
    const [isSearchResultsVisible, setSearchResultsVisible] = React.useState(false);
    const [maxDisplayedCards, setMaxDisplayedCards] = React.useState(3);

    // Popups

    const onSignupPopupOpen = () => {
        closeAllPopups();
        addPopupKeyListener();
        setSignupPopupOpen(true);
    }

    // Temporary for testing transition from Signup to Info popup
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

    // Nav Menu

    const onNavMenuOpen = () => {
        setNavMenuOpen(true);
    }

    const onNavMenuClose = () => {
        setNavMenuOpen(false);
    }

    const onNavMenuBackgroundClick = (e) => {
        if (e.target.classList.contains('navbar__menu-overlay')) {
            onNavMenuClose();
        }
    }

    // News Searching
    const handleSearchNews = ({ keyword }) => {

        if (!keyword.trim()) {
            return;
        }

        setSearching(true);

        setNewsResults([]);
        setMaxDisplayedCards(3);
        setNothingFoundVisible(false);
        setSearchErrorVisible(false)
        setSearchErrorVisible(false);
        setSearchResultsVisible(false);

        newsApi.getNews({ keyword })
            .then((res) => {

                if (res.status !== 'ok') {
                    setSearchErrorVisible(true);
                    return;
                }

                if (res.totalResults === 0) {
                    setNothingFoundVisible(true);
                } else {
                    res.searchKeyword = keyword;
                    setNewsResults(res);
                    setSearchResultsVisible(true);
                }
            })
            .catch((err) => {
                console.log(err);
                setSearchErrorVisible(true)
            })
            .finally(() => setSearching(false));
    }

    const onShowMore = () => {
        setMaxDisplayedCards(maxDisplayedCards + 3);
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

                        closeAllPopups={closeAllPopups}
                        onPopupBackgroundClick={onPopupBackgroundClick}

                        isNavMenuOpen={isNavMenuOpen}
                        onNavMenuOpen={onNavMenuOpen}
                        onNavMenuClose={onNavMenuClose}
                        onNavMenuBackgroundClick={onNavMenuBackgroundClick}

                        isSearching={isSearching}
                        handleSearchNews={handleSearchNews}
                        newsResults={newsResults}
                        isNothingFoundVisible={isNothingFoundVisible}
                        maxDisplayedCards={maxDisplayedCards}
                        onShowMore={onShowMore}
                        isSearchErrorVisible={isSearchErrorVisible}
                        isSearchResultsVisible={isSearchResultsVisible}
                    />
                </Route>
                <Route path='/saved-news'><SavedNews isNavMenuOpen={isNavMenuOpen} onNavMenuOpen={onNavMenuOpen} onNavMenuClose={onNavMenuClose} onNavMenuBackgroundClick={onNavMenuBackgroundClick} /></Route>
                <Route><Redirect to='/'></Redirect></Route>
            </Switch>
        </div>
    )
}

export default App;
