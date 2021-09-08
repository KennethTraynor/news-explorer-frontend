import './SavedNews.css';

import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import SavedNewsCards from '../SavedNewsCards/SavedNewsCards';

function SavedNews() {
    return (
        <div className='saved-news'>
            <SavedNewsHeader />
            <SavedNewsCards />
            <Footer />
        </div>
    )
}

export default SavedNews;