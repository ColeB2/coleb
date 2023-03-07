import React from "react";

import './Card.css';
import { projectType } from "../../types/customTypes";

interface CardProps extends projectType {
    handleClick: React.MouseEventHandler<Element>
    handleEnter: React.KeyboardEventHandler<HTMLDivElement> | undefined
}

const Card = (props: CardProps) => (
    <div
        className="card"
        tabIndex={0}
        onClick={props.handleClick}
        onKeyUp={props.handleEnter}
    >
        <img 
            src={props.image}
            className="card-image"
            alt={props.title}
        />
    </div>
)
export default Card;