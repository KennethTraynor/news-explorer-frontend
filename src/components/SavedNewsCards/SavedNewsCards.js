import './SavedNewsCards.css';
import Card from '../Card/Card';

function SavedNewsCards({ loggedIn, savedArticles, onRemoveArticle }) {
    return (
        <div className='saved-news-cards'>
            <ul className="saved-news-cards__layout">
                {(savedArticles || []).map((article, index) =>
                    <Card
                        key={index}
                        loggedIn={loggedIn}
                        article={article}
                        showDelete={true}
                        showKeyword={true}
                        keyword={article.keyword}
                        date={article.date}
                        description={article.text}
                        title={article.title}
                        source={article.source}
                        image={article.image}
                        url={article.link}
                        onRemoveArticle={onRemoveArticle}
                    />)
                }
            </ul>
        </div>
    )
}

export default SavedNewsCards;