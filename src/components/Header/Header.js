import './Header.css';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';

function Header({ onSigninPopupOpen, isNavMenuOpen, onNavMenuOpen, onNavMenuClose, onNavMenuBackgroundClick }) {
    return (
        <header className="header">
            <Navbar onSigninPopupOpen={onSigninPopupOpen} isNavMenuOpen={isNavMenuOpen} onNavMenuOpen={onNavMenuOpen} onNavMenuClose={onNavMenuClose} onNavMenuBackgroundClick={onNavMenuBackgroundClick}/>
            <div className="header__container">
                <h1 className="header__title">What's going on in the world?</h1>
                <p className="header__caption">Find the latest news on any topic and save them in your personal account.</p>
                <SearchBar />
            </div>
        </header>
    )
}

export default Header;