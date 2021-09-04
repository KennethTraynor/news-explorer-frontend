import React from "react";

import './Card.css';
import cardImage from '../../images/image_08.png';

function Card() {

    const [bookmarked, setBookmarked] = React.useState(false);

    function handleBookmarkClick() {
        setBookmarked(!bookmarked);
    }

    return (
        <div className='card'>
            <div className='card__upper-container'>
                <img src={cardImage} className='card__image' alt='' />
                <button className={'card__bookmark-button ' + (bookmarked ? 'card__bookmark-button_active' : '')} onClick={handleBookmarkClick} ></button>
                <div className='card__tooltip'>Sign in to save articles</div>
                <div className='card__keyword'>Nature</div>
            </div>
            <div className='card__lower-container'>
                <p className='card__date'>November 4, 2020</p>
                <h2 className='card__title'>Everyone Needs a Special 'Sit Spot' in Nature</h2>
                <p className='card__excerpt'>Ever since I read Richard Louv's influential book, "Last Child in the Woods," 
                the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature 
                educator Jon Young, is for both adults and children to find a spot in nature – it could be anywhere, from 
                an urban backyard to a nearby forest – and to spend time in it, sitting quietly.</p>
                <p className='card__source'>treehugger</p>
            </div>
        </div>
    )
}

export default Card;