import './Main.css';

import Header from '../Header/Header';
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';
import About from '../About/About';
import Footer from '../Footer/Footer';
import SignupPopup from '../SignupPopup/SignupPopup';
import SigninPopup from '../SigninPopup/SigninPopup';
import InfoPopup from '../InfoPopup/InfoPopup';
import SearchError from '../SearchError/SearchError';

function Main(
    {
        loggedIn,
        onRegister,
        onLogin,
        onSignOut,

        isSignupPopupOpen,
        onSignupPopupOpen,

        isSigninPopupOpen,
        onSigninPopupOpen,

        isInfoPopupOpen,

        closeAllPopups,
        onPopupBackgroundClick,

        isNavMenuOpen,
        setNavMenuState,
        onNavMenuBackgroundClick,

        onSearchNews,
        onShowMore,
        onBookmarkArticle,
        onRemoveArticle,
        newsResults,
        isSearching,
        maxDisplayedCards,
        isNothingFoundVisible,
        isSearchErrorVisible,
        isSearchResultsVisible,

        savedArticles,
    }) {

    return (
        <main className='main'>
            <div className='main__container'>
                <Header
                    onSigninPopupOpen={onSigninPopupOpen}

                    isNavMenuOpen={isNavMenuOpen}
                    setNavMenuState={setNavMenuState}
                    onNavMenuBackgroundClick={onNavMenuBackgroundClick}

                    onSearchNews={onSearchNews}
                    loggedIn={loggedIn}
                    onSignOut={onSignOut}
                />

                {
                    (!isSearching && isSearchResultsVisible) &&
                    <SearchResults
                        newsResults={newsResults}
                        maxDisplayedCards={maxDisplayedCards}
                        onShowMore={onShowMore}
                        loggedIn={loggedIn}
                        onBookmarkArticle={onBookmarkArticle}
                        onSigninPopupOpen={onSigninPopupOpen}
                        onRemoveArticle={onRemoveArticle}
                        savedArticles={savedArticles}
                    />
                }
                {isSearching && <Preloader />}
                {isNothingFoundVisible && <NoResults />}
                {isSearchErrorVisible && <SearchError />}

                <About />

                <Footer />


                <SignupPopup
                    onClose={closeAllPopups}
                    isOpen={isSignupPopupOpen}
                    onPopupBackgroundClick={onPopupBackgroundClick}
                    onLinkClick={onSigninPopupOpen}
                    onRegister={onRegister}
                />
                <SigninPopup
                    onClose={closeAllPopups}
                    isOpen={isSigninPopupOpen}
                    onPopupBackgroundClick={onPopupBackgroundClick}
                    onLinkClick={onSignupPopupOpen}
                    onLogin={onLogin}
                />
                <InfoPopup
                    onClose={closeAllPopups}
                    isOpen={isInfoPopupOpen}
                    onPopupBackgroundClick={onPopupBackgroundClick}
                    onLinkClick={onSigninPopupOpen}
                    message='Registration successfully completed!'
                    linkText='Sign in'
                />
            </div>
        </main>
    )
}

export default Main;