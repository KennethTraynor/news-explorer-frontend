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
        isSignupPopupOpen,
        onSignupPopupOpen,
        handleSignup,
        isSigninPopupOpen,
        onSigninPopupOpen,
        isInfoPopupOpen,
        closeAllPopups,
        onPopupBackgroundClick,
        isNavMenuOpen,
        onNavMenuOpen,
        onNavMenuClose,
        onNavMenuBackgroundClick,
        handleSearchNews,
        newsResults,
        isSearching,
        isNothingFoundVisible,
        maxDisplayedCards,
        onShowMore,
        isSearchErrorVisible,
        isSearchResultsVisible,
    }) {
    return (
        <main className='main'>
            <div className='main__container'>
                <Header
                    onSigninPopupOpen={onSigninPopupOpen}

                    isNavMenuOpen={isNavMenuOpen}
                    onNavMenuOpen={onNavMenuOpen}
                    onNavMenuClose={onNavMenuClose}
                    onNavMenuBackgroundClick={onNavMenuBackgroundClick}

                    handleSearchNews={handleSearchNews}
                />

                {
                    (!isSearching && isSearchResultsVisible) &&
                    <SearchResults
                        newsResults={newsResults}
                        maxDisplayedCards={maxDisplayedCards}
                        onShowMore={onShowMore}
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
                    handleSignup={handleSignup}
                />
                <SigninPopup
                    onClose={closeAllPopups}
                    isOpen={isSigninPopupOpen}
                    onPopupBackgroundClick={onPopupBackgroundClick}
                    onLinkClick={onSignupPopupOpen}
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