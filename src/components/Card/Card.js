import './Card.css';

function Card({ showKeyword, showDelete, showBookmark, article, keyword, date, title, description, source, image, url, loggedIn, onBookmarkArticle, onRemoveArticle, onSigninPopupOpen, savedArticles }) {

    const handleBookmarkClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (loggedIn) {
            // Checks if article with URL is already saved
            const article = savedArticles.find((article) => (article.link === url));

            if (!article) {
                onBookmarkArticle(keyword, title, description, date, source, url, image);
            } else {
                onRemoveArticle(article._id);
            }

        } else {
            onSigninPopupOpen();
        }
    }

    const handleDeleteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (loggedIn) {
            onRemoveArticle(article._id);
        }
    }

    return (
        <li className='card'>
            <div className='card__shadow'></div>

            <a className='card__container' href={url} rel='noreferrer' target='_blank'>
                <div className='card__upper-container'>
                    <img src={image} className='card__image' alt={title} />

                    {showBookmark &&
                        <div className='card__button-container'>
                            <button className={'card__button card__button_type_bookmark' + (savedArticles.some((article) => (article.link === url) && (article.keyword === keyword)) ? ' card__button_active' : '')} onClick={handleBookmarkClick}></button>
                            {!loggedIn && <div className='card__tooltip'>Sign in to save articles</div>}
                        </div>
                    }

                    {showDelete &&
                        <div className='card__button-container'>
                            <button className='card__button card__button_type_delete' onClick={handleDeleteClick}></button>
                            <div className='card__tooltip'>Remove from saved</div>
                        </div>
                    }

                    {showKeyword && <div className='card__keyword'><span className='card__keyword-text'>{keyword}</span></div>}

                </div>
                <div className='card__lower-container'>
                    <p className='card__date'>{(new Date(date).toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' }))}</p>
                    <h2 className='card__title'>{title}</h2>
                    <p className='card__description'>{description}</p>
                    <p className='card__source'>{source}</p>
                </div>
            </a>
        </li>
    )
}

export default Card;