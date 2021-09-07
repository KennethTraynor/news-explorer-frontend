import './SavedNews.css';

import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { TestCards } from '../../utils/constants';


function SavedNews() {
    return (
        <div className='saved-news'>
            <div className='saved-news__container'>
                <Navbar theme='dark' />
                <SavedNewsHeader />
                <ul className="saved-news__cards-container">
                    {TestCards.map((card) => <Card showDelete={true} showKeyword={true} keyword={card.keyword} date={card.date} description={card.description} title={card.title} source={card.source} image={card.image} />)}
                </ul>
                <Footer />
            </div>
        </div>
    )
}

export default SavedNews;