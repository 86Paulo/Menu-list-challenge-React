import React from 'react';
import '../styles/Card.css';

export default function Card () {
    return (
    <div className='card-container'>
        <div className='img-container'>
            <div className='restaurant-image'></div>
        </div>
        <div className='text-container'>
            <p className='top-text'></p>
            <p className='text'></p>
        </div>
    </div>
    )
}