import './SearchResults.css';
import Card from '../Card/Card';

function SearchResults() {
    return (
        <section className='search-results'>
            <div className='search-results__container'>
                <h2 className='search-results__title'>Search results</h2>
                <div className="search-results__card-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <button className='search-results__more-button'>Show more</button>
            </div>
        </section>
    )
}

export default SearchResults;