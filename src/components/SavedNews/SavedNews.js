import './SavedNews.css';

import Header from '../Header/Header';
import SearchResults from '../SearchResults/SearchResults';
import Footer from '../Footer/Footer';

function SavedNews() {
    return (
        <div className='main'>
            <Header />
            <SearchResults />
            <Footer />
        </div>
    )
}

export default SavedNews;