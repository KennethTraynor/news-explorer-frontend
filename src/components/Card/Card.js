import React from "react";

import './Card.css';

function Card({ showKeyword, showDelete, showBookmark, keyword, date, title, description, source, image }) {

    return (
        <li className='card'>
            <div className='card__shadow'></div>

            <div className='card__container'>
                <div className='card__upper-container'>
                    <img src={image} className='card__image' alt='' />

                    {showBookmark &&
                        <div className='card__button-container'>
                            <button className='card__button card__button_type_bookmark' ></button>
                            <div className='card__tooltip'>Sign in to save articles</div>
                        </div>
                    }

                    {showDelete &&
                        <div className='card__button-container'>
                            <button className='card__button card__button_type_delete'></button>
                            <div className='card__tooltip'>Remove from saved</div>
                        </div>
                    }

                    {showKeyword && <div className='card__keyword'>{keyword}</div>}

                </div>
                <div className='card__lower-container'>
                    <p className='card__date'>{date}</p>
                    <h2 className='card__title'>{title}</h2>
                    <p className='card__description'>{description}</p>
                    <p className='card__source'>{source}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;