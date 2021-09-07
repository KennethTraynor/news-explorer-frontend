import './SearchResults.css';
import Card from '../Card/Card';

import { TestCards } from '../../utils/constants';

function SearchResults() {
    return (
        <section className='search-results'>
            <div className='search-results__container'>
                <h2 className='search-results__title'>Search results</h2>
                <ul className="search-results__cards-container">
                    {TestCards.map((card) => <Card showBookmark={true} keyword={card.keyword} date={card.date} description={card.description} title={card.title} source={card.source} image={card.image} />)}
                </ul>
                <button className='search-results__more-button'>Show more</button>
            </div>
        </section>
    )
}

export default SearchResults;