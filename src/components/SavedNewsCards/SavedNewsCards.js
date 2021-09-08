import './SavedNewsCards.css';
import Card from '../Card/Card';
import { TestCards } from '../../utils/constants';

function SavedNewsCards() {
    return (
        <div className='saved-news-cards'>
            <ul className="saved-news-cards__layout">
                {TestCards.map((card, index) => <Card key={index} showDelete={true} showKeyword={true} keyword={card.keyword} date={card.date} description={card.description} title={card.title} source={card.source} image={card.image} />)}
            </ul>
        </div>
    )
}

export default SavedNewsCards;