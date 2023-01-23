import React from "react";

import './Card.css';

interface CardProps {
    image: string;
    handleClick: React.MouseEventHandler
}

const Card = (props: CardProps) => (
    <div className="card" onClick={props.handleClick}>
        <img src={props.image} className="card-image"/>
    </div>
)
export default Card;