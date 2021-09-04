import './SavedNewsHeader.css';

function SavedNewsHeader() {
    return (
        <header className='saved-news-header'>
            <div className='saved-news-header__container'>
                <h1 className='saved-news-header__title'>Saved articles</h1>
                <p className='saved-news-header__total'>Elise, you have 5 saved articles</p>
                <p className='saved-news-header__keywords'>By keywords: <span className='saved-news-header__keywords-span'>Nature, Yellowstone, and 2 other</span></p>
            </div>
        </header>
    )
}

export default SavedNewsHeader;