import './SearchResults.css';

function SearchResults() {
    return (
        <section className='search-results'>
            <div className='search-results__container'>
                <h2 className='search-results__title'>Search results</h2>
                <div className="temp-card-layout">
                    <div className='temp-card'></div>
                    <div className='temp-card'></div>
                    <div className='temp-card'></div>
                    <div className='temp-card'></div>
                    <div className='temp-card'></div>
                </div>
                <button className='search-results__more-button'>Show more</button>
            </div>
        </section>
    )
}

export default SearchResults;