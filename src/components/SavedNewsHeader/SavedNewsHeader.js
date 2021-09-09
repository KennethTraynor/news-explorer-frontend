import './SavedNewsHeader.css';

import Navbar from '../Navbar/Navbar';

function SavedNewsHeader({ isNavMenuOpen, onNavMenuOpen, onNavMenuClose, onNavMenuBackgroundClick, }) {
    return (
        <header className='saved-news-header'>
            <Navbar loggedIn={true} theme='light' isNavMenuOpen={isNavMenuOpen} onNavMenuOpen={onNavMenuOpen} onNavMenuClose={onNavMenuClose} onNavMenuBackgroundClick={onNavMenuBackgroundClick} />
            <div className='saved-news-header__container'>
                <h1 className='saved-news-header__title'>Saved articles</h1>
                <p className='saved-news-header__total'>Username, you have 5 saved articles</p>
                <p className='saved-news-header__keywords'>By keywords: <span className='saved-news-header__keywords-span'>Nature, Yellowstone, and 2 other</span></p>
            </div>
        </header>
    )
}

export default SavedNewsHeader;