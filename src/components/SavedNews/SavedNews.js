import './SavedNews.css';

import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import SavedNewsCards from '../SavedNewsCards/SavedNewsCards';

function SavedNews({ isNavMenuOpen, onNavMenuOpen, onNavMenuClose, onNavMenuBackgroundClick }) {
    return (
        <div className='saved-news'>
            <SavedNewsHeader isNavMenuOpen={isNavMenuOpen} onNavMenuOpen={onNavMenuOpen} onNavMenuClose={onNavMenuClose} onNavMenuBackgroundClick={onNavMenuBackgroundClick} />
            <SavedNewsCards />
            <Footer />
        </div>
    )
}

export default SavedNews;