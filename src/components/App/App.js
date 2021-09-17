import React, { useCallback, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as newsApi from '../../utils/NewsApi';
import * as mainApi from '../../utils/MainApi';
import { countKeywords } from '../../utils/utils';
import { DEFAULT_CARD_AMOUNT, SHOW_MORE_AMOUNT } from '../../utils/constants';

function App() {

    // History
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
    const [newsResults, setNewsResults] = React.useState({});
    const [isNothingFoundVisible, setNothingFoundVisible] = React.useState(false);
    const [isSearchErrorVisible, setSearchErrorVisible] = React.useState(false);
    const [isSearchResultsVisible, setSearchResultsVisible] = React.useState(false);
    const [maxDisplayedCards, setMaxDisplayedCards] = React.useState(DEFAULT_CARD_AMOUNT);

    // On App loaded, check token, check local storage for previous search results
    useEffect(() => {
        tokenCheck();
        renderPreviousResults();
    }, []);

    // On saved articles change
    useEffect(() => {
        updateKeywords();
    }, [savedArticles]);

    //--- Registration and Authorization ---// 
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

    const onLogin = (data, setFormErrorText, setSubmitting) => {
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
            .finally(() => setSubmitting(false));
    }

    const onSignOut = () => {
        setLoggedIn(false);
        setCurrentUser({ email: '', name: '' });
        setSavedArticles([]);
        localStorage.removeItem('token');
        history.push('/');
    }

    //--- Articles ---// 
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

    //--- Saved Article Sorting ---// 
    const sortArticles = () => {
        // Object with the totals of each keyword
        const keywordCounts = countKeywords((savedArticles.map((article) => article.keyword)));

        // New sorted articles array using keyword totals
        const sortedSavedArticles = savedArticles.slice().sort((a, b) => keywordCounts[b.keyword] - keywordCounts[a.keyword]);

        setSavedArticles(sortedSavedArticles);
    }

    const updateKeywords = () => {
        // Object with the totals of each keyword
        const keywordCounts = countKeywords((savedArticles.map((article) => article.keyword)));

        // New sorted keyword array using keyword totals
        const newKeywords = Object.keys(keywordCounts).sort((a, b) => keywordCounts[b] - keywordCounts[a]);

        setKeywordList(newKeywords);
    }

    //--- Popups ---// 
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

    //--- Nav Menu ---// 
    const setNavMenuState = (state) => {
        setNavMenuOpen(state);
    }

    const onNavMenuBackgroundClick = (e) => {
        if (e.target.classList.contains('navbar__menu-overlay')) {
            setNavMenuState(false);
        }
    }

    //--- News Searching ---// 
    const onSearchNews = ({ keyword }) => {

        // Checks if keyword is valid
        if (!keyword.trim()) {
            return;
        }

        // Display preloader and reset values
        setSearching(true);

        setNewsResults([]);
        setMaxDisplayedCards(DEFAULT_CARD_AMOUNT);
        setNothingFoundVisible(false);
        setSearchErrorVisible(false)
        setSearchErrorVisible(false);
        setSearchResultsVisible(false);

        // Makes api request using keyword
        newsApi.getNews({ keyword })
            .then((res) => {

                // Display if an error occurs
                if (res.status !== 'ok') {
                    setSearchErrorVisible(true);
                    return;
                }

                // Display if no results
                if (res.totalResults === 0) {
                    setNothingFoundVisible(true);
                } else {
                    // Update news results and attach keyword to the object, store results in local storage
                    res.searchKeyword = keyword;
                    setNewsResults(res);

                    localStorage.setItem('previous-results', JSON.stringify(res));
                    setSearchResultsVisible(true);
                }
            })
            .catch((err) => {
                console.log(err);
                setSearchErrorVisible(true)
            })
            .finally(() => setSearching(false));
    }

    // Renders previous results if there are any
    const renderPreviousResults = () => {
        if (Object.keys(newsResults).length === 0) {
            if (localStorage.getItem('previous-results')) {
                setNewsResults(JSON.parse(localStorage.getItem('previous-results')));
                setSearchResultsVisible(true);
            }
        }
    }

    const onShowMore = () => {
        setMaxDisplayedCards(maxDisplayedCards + SHOW_MORE_AMOUNT);
    }

    return (
        <div className='app'>
            <CurrentUserContext.Provider value={currentUser}>
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
                            onRemoveArticle={onRemoveArticle}
                            renderPreviousResults={renderPreviousResults}
                            isSearching={isSearching}
                            newsResults={newsResults}
                            maxDisplayedCards={maxDisplayedCards}
                            isNothingFoundVisible={isNothingFoundVisible}
                            isSearchErrorVisible={isSearchErrorVisible}
                            isSearchResultsVisible={isSearchResultsVisible}

                            savedArticles={savedArticles}
                        />
                    </Route>

                    <ProtectedRoute
                        path='/saved-news'
                        onSigninPopupOpen={onSigninPopupOpen}
                        
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
