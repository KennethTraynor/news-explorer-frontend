import './SavedNewsHeader.css';

import Navbar from '../Navbar/Navbar';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import React from 'react';

function SavedNewsHeader({ isNavMenuOpen, setNavMenuState, onNavMenuBackgroundClick, onSignOut, loggedIn, savedArticles, keywordList }) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <header className='saved-news-header'>
            <Navbar
                loggedIn={loggedIn}
                theme='light'
                isNavMenuOpen={isNavMenuOpen}
                setNavMenuState={setNavMenuState}
                onNavMenuBackgroundClick={onNavMenuBackgroundClick}
                onSignOut={onSignOut}
            />
            <div className='saved-news-header__container'>
                <h1 className='saved-news-header__title'>Saved articles</h1>
                <p className='saved-news-header__total'>{currentUser.name}, you have {savedArticles.length} saved articles</p>
                {(keywordList.length > 0) &&
                    <p className='saved-news-header__keywords'>
                        By keywords: <span className='saved-news-header__keywords-span'>
                            {(keywordList.length <= 3) && keywordList.slice(0, 3).join(', ')}
                            {(keywordList.length > 3) && keywordList.slice(0, 2).join(', ') + (', and ' + (keywordList.length - 2) + ' other')}
                        </span>
                    </p>
                }
            </div>
        </header>
    )
}

export default SavedNewsHeader;