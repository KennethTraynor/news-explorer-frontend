import './Header.css';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';

function Header({ onSigninPopupOpen, isNavMenuOpen, setNavMenuState, onNavMenuBackgroundClick, onSearchNews, loggedIn, onSignOut }) {
    return (
        <header className="header">
            <Navbar
                loggedIn={loggedIn}
                onSignOut={onSignOut}

                onSigninPopupOpen={onSigninPopupOpen}
                isNavMenuOpen={isNavMenuOpen}
                setNavMenuState={setNavMenuState}
                onNavMenuBackgroundClick={onNavMenuBackgroundClick}
            />
            <div className="header__container">
                <h1 className="header__title">What's going on in the world?</h1>
                <p className="header__caption">Find the latest news on any topic and save them in your personal account.</p>
                <SearchBar onSearchNews={onSearchNews} />
            </div>
        </header>
    )
}

export default Header;