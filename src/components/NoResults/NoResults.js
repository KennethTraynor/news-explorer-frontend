import './NoResults.css';

function NoResults() {
    return (
        <div className='no-results'>
            <i className='no-results__graphic'></i>
            <p className='no-results__main-text'>Nothing Found</p>
            <p className='no-results__sub-text'>Sorry, but nothing matched your search terms.</p>
        </div>
    )
}

export default NoResults;