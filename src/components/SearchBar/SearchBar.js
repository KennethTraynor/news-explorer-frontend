import './SearchBar.css';

function SearchBar() {
    return (
        <div className='search-bar'>
            <form action='#' className='search-bar__form'>
                <input className='search-bar__search-text' placeholder='Enter topic'></input>
                <button className='search-bar__button' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;