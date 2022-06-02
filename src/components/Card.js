import React from 'react';
import '../styles/Card.css';
import CardText from './CardText';
import CardImage from './CardImage';

export default function Card () {
    return (
    <div className='card-container'>
        <CardText />
        <CardImage />
    </div>
    )
}