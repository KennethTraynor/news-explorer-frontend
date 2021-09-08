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

function Main(
    {
        isSignupPopupOpen,
        onSignupPopupOpen,
        handleSignup,
        isSigninPopupOpen,
        onSigninPopupOpen,
        isInfoPopupOpen,
        onInfoPopupOpen,
        closeAllPopups,
        onPopupBackgroundClick,
    }) {
    return (
        <main className='main'>
            <div className='main__container'>
                <Header onSigninPopupOpen={onSigninPopupOpen} />
                <SearchResults />
                <Preloader />
                <NoResults />
                <About />
                <Footer />
                <SignupPopup onClose={closeAllPopups} isOpen={isSignupPopupOpen} onPopupBackgroundClick={onPopupBackgroundClick} onLinkClick={onSigninPopupOpen} handleSignup={handleSignup} />
                <SigninPopup onClose={closeAllPopups} isOpen={isSigninPopupOpen} onPopupBackgroundClick={onPopupBackgroundClick} onLinkClick={onSignupPopupOpen} />
                <InfoPopup onClose={closeAllPopups} isOpen={isInfoPopupOpen} onPopupBackgroundClick={onPopupBackgroundClick} onLinkClick={onSigninPopupOpen} message='Registration successfully completed!' linkText='Sign in'/>
            </div>
        </main>
    )
}

export default Main;