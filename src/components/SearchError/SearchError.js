import './SearchError.css';

function SearchError() {
    return (
        <div className='search-error'>
            <i className='search-error__graphic'></i>
            <p className='search-error__main-text'>Sorry, something went wrong during the request.</p>
            <p className='search-error__sub-text'>There may be a connection issue or the server may be down. Please try again later.</p>
        </div>
    )
}

export default SearchError;