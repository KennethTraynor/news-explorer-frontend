import './SearchResults.css';
import Card from '../Card/Card';

function SearchResults({ newsResults, maxDisplayedCards, onShowMore }) {
    return (
        <section className='search-results'>
            <div className='search-results__container'>
                <h2 className='search-results__title'>Search results</h2>
                <ul className="search-results__cards-container">
                    {(newsResults.articles || []).slice(0, maxDisplayedCards).map((article, index) =>
                        <Card
                            key={index}
                            showBookmark={true}
                            keyword={newsResults.searcKeyword}
                            date={(new Date(article.publishedAt).toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' }))}
                            description={article.description}
                            title={article.title}
                            source={article.source.name}
                            image={article.urlToImage}
                            url={article.url} />)}
                </ul>
                {(maxDisplayedCards < newsResults.articles.length) && <button className='search-results__more-button' onClick={onShowMore}>Show more</button>}
            </div>
        </section>
    )
}

export default SearchResults;