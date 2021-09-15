import './SearchResults.css';
import Card from '../Card/Card';

function SearchResults({ newsResults, maxDisplayedCards, onShowMore, loggedIn, onBookmarkArticle, onSigninPopupOpen }) {
    return (
        <section className='search-results'>
            <div className='search-results__container'>
                <h2 className='search-results__title'>Search results</h2>
                <ul className="search-results__cards-container">
                    {(newsResults.articles || []).slice(0, maxDisplayedCards).map((article, index) =>
                        <Card
                            key={index}
                            showBookmark={true}
                            keyword={newsResults.searchKeyword}
                            article={article}
                            date={article.publishedAt}
                            description={article.description}
                            title={article.title}
                            source={article.source.name}
                            image={article.urlToImage}
                            url={article.url}
                            loggedIn={loggedIn}
                            onBookmarkArticle={onBookmarkArticle}
                            onSigninPopupOpen={onSigninPopupOpen}
                        />)}
                </ul>
                {(maxDisplayedCards < newsResults.articles.length) && <button className='search-results__more-button' onClick={onShowMore}>Show more</button>}
            </div>
        </section>
    )
}

export default SearchResults;