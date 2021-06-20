import React from 'react';

props.card.likes = undefined;

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="card">
            <div className="card__group">
                <img src={props.card.link} alt={props.card.name} onClick={handleClick} className="card__image"/>
                <button className="card__delete"></button>
                <div className="card__group-container">
                    <h2 className="card__title">{props.card.name}</h2>
                    <div className="card__like_group">
                        <button type="button" className="card__like-button"></button>
                        <span className="card__like-info">{props.card.likes.length}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card