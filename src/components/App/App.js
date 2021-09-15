import React, { useCallback, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as newsApi from '../../utils/NewsApi';
import * as mainApi from '../../utils/MainApi';
import testNewsResults from '../../utils/testNewsResults.json';
import { countKeywords } from '../../utils/utils';

function App() {

    const history = useHistory();

    // User Related
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({ email: '', name: '' });

    // Articles
    const [savedArticles, setSavedArticles] = React.useState([]);
    const [keywordList, setKeywordList] = React.useState([]);

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

    useEffect(() => {
        tokenCheck();
    }, []);

    // Update keywords List when articles list changes
    useEffect(() => {
        updateKeywords();
    }, [savedArticles]);

    // Registration and Authorization
    const tokenCheck = () => {
        const token = localStorage.getItem('token');
        if (token) {
            mainApi.getContent(token)
                .then((res) => {
                    if (res) {
                        setLoggedIn(true);
                        closeAllPopups();
                        setCurrentUser({ ...currentUser, email: res.email, name: res.name });
                        getSavedArticles();
                    }
                })
                .catch((err) => console.log(err));
        }
    }

    const onRegister = (data, setFormErrorText, setSubbmitting) => {
        mainApi.register(data.password, data.email, data.name)
            .then((res) => {
                if (!res) {
                    setFormErrorText('An error has occured');
                } else {
                    closeAllPopups();
                    onInfoPopupOpen();
                }
            })
            .catch((err) => {
                err.text()
                    .then((error) => setFormErrorText(JSON.parse(error).message))
                    .catch(() => setFormErrorText('An error has occcured'));
            })
            .finally(() => setSubbmitting(false));
    }

    const onLogin = (data, setFormErrorText, setSubbmitting) => {
        mainApi.authorize(data.password, data.email)
            .then((res) => {
                if (!res) {
                    setFormErrorText('An error has occured');
                } else if (res.token) {
                    tokenCheck();
                }
            })
            .catch((err) => {
                err.text()
                    .then((error) => setFormErrorText(JSON.parse(error).message))
                    .catch(() => setFormErrorText('An error has occcured'));
            })
            .finally(() => setSubbmitting(false));
    }

    const onSignOut = () => {
        setLoggedIn(false);
        setCurrentUser({ email: '', name: '' });
        localStorage.removeItem('token');
        history.push('/');
    }

    // Articles
    const getSavedArticles = () => {
        mainApi.getSavedArticles()
            .then((articles) => {
                setSavedArticles(articles);
            })
            .catch((err) => console.log(err));
    }

    const onBookmarkArticle = (keyword, title, text, date, source, link, image) => {
        mainApi.saveArticle(keyword, title, text, date, source, link, image)
            .then((article) => setSavedArticles([...savedArticles, article]))
            .catch((err) => console.log(err));
    }

    const onRemoveArticle = (articleId) => {
        mainApi.removeArticle(articleId)
            .then((res) => setSavedArticles(savedArticles.filter(a => a._id !== res._id)))
            .catch((err) => console.log(err));
    }

    // Article Sorting
    const sortArticles = () => {
        const keywordCounts = countKeywords((savedArticles.map((article) => article.keyword)));

        const sortedSavedArticles = savedArticles.slice().sort((a, b) => keywordCounts[b.keyword] - keywordCounts[a.keyword]);

        setSavedArticles(sortedSavedArticles);
    }

    const updateKeywords = () => {
        const keywordCounts = countKeywords((savedArticles.map((article) => article.keyword)));

        const newKeywords = Object.keys(keywordCounts).sort((a, b) => keywordCounts[b] - keywordCounts[a]);

        setKeywordList(newKeywords);
    }

    // Popups
    const onSignupPopupOpen = () => {
        closeAllPopups();
        addPopupKeyListener();
        setSignupPopupOpen(true);
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

    function closeAllPopups() {
        document.removeEventListener('keydown', onPopupKeyPress, false);
        setSignupPopupOpen(false);
        setSigninPopupOpen(false);
        setInfoPopupOpen(false);
    }

    // Nav Menu

    const setNavMenuState = (state) => {
        setNavMenuOpen(state);
    }

    const onNavMenuBackgroundClick = (e) => {
        if (e.target.classList.contains('navbar__menu-overlay')) {
            setNavMenuState(false);
        }
    }

    // News Searching
    const onSearchNews = ({ keyword }) => {

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

        // Temp for testing
        testNewsResults.searchKeyword = keyword;
        setNewsResults(testNewsResults);
        setSearchResultsVisible(true);
        setSearching(false);
        // Temp for testing

        // newsApi.getNews({ keyword })
        //     .then((res) => {

        //         if (res.status !== 'ok') {
        //             setSearchErrorVisible(true);
        //             return;
        //         }

        //         if (res.totalResults === 0) {
        //             setNothingFoundVisible(true);
        //         } else {
        //             res.searchKeyword = keyword;
        //             setNewsResults(res);
        //             setSearchResultsVisible(true);
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         setSearchErrorVisible(true)
        //     })
        //     .finally(() => setSearching(false));
    }

    const onShowMore = () => {
        setMaxDisplayedCards(maxDisplayedCards + 3);
    }

    return (
        <div className='app'>
            <CurrentUserContext.Provider value={ currentUser }>
                <Switch>
                    <Route exact path='/'>
                        <Main
                            loggedIn={loggedIn}
                            onRegister={onRegister}
                            onLogin={onLogin}
                            onSignOut={onSignOut}

                            isSignupPopupOpen={isSignupPopupOpen}
                            onSignupPopupOpen={onSignupPopupOpen}

                            isSigninPopupOpen={isSigninPopupOpen}
                            onSigninPopupOpen={onSigninPopupOpen}

                            isInfoPopupOpen={isInfoPopupOpen}

                            closeAllPopups={closeAllPopups}
                            onPopupBackgroundClick={onPopupBackgroundClick}

                            isNavMenuOpen={isNavMenuOpen}
                            setNavMenuState={setNavMenuState}
                            onNavMenuBackgroundClick={onNavMenuBackgroundClick}

                            onSearchNews={onSearchNews}
                            onShowMore={onShowMore}
                            onBookmarkArticle={onBookmarkArticle}
                            isSearching={isSearching}
                            newsResults={newsResults}
                            maxDisplayedCards={maxDisplayedCards}
                            isNothingFoundVisible={isNothingFoundVisible}
                            isSearchErrorVisible={isSearchErrorVisible}
                            isSearchResultsVisible={isSearchResultsVisible}
                        />
                    </Route>

                    <ProtectedRoute path='/saved-news'
                        component={SavedNews}

                        loggedIn={loggedIn}

                        isNavMenuOpen={isNavMenuOpen}
                        setNavMenuState={setNavMenuState}
                        onNavMenuBackgroundClick={onNavMenuBackgroundClick}

                        onSignOut={onSignOut}

                        savedArticles={savedArticles}
                        onRemoveArticle={onRemoveArticle}

                        sortArticles={sortArticles}
                        keywordList={keywordList}
                    />

                    <Route><Redirect to='/'></Redirect></Route>
                </Switch>
            </CurrentUserContext.Provider>
        </div >
    )
}

export default App;
