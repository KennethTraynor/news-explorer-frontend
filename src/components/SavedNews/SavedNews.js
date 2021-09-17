import './SavedNews.css';

import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import SavedNewsCards from '../SavedNewsCards/SavedNewsCards';
import { useEffect } from 'react';

function SavedNews({ isNavMenuOpen, setNavMenuState, onNavMenuBackgroundClick, onSignOut, loggedIn, savedArticles, onRemoveArticle, sortArticles, keywordList }) {

    useEffect(() => {
        sortArticles();
    }, []);

    return (
        <div className='saved-news'>
            <SavedNewsHeader
                loggedIn={loggedIn}

                isNavMenuOpen={isNavMenuOpen}
                setNavMenuState={setNavMenuState}
                onNavMenuBackgroundClick={onNavMenuBackgroundClick}
                onSignOut={onSignOut}

                savedArticles={savedArticles}
                keywordList={keywordList}
            />
            {(savedArticles.length > 0) && <SavedNewsCards loggedIn={loggedIn} savedArticles={savedArticles} onRemoveArticle={onRemoveArticle} />}
            <Footer />
        </div>
    )
}

export default SavedNews;