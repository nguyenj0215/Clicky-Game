import React from 'react';
import "./style.css";

function ImageCards(props) {
    return (
        <div className="card">
            <img className="cardImage" src={props.image} alt="Card Pic" onClick={() => props.handleIncrement(props.id)}></img>
        </div>
    )
}

export default ImageCards;