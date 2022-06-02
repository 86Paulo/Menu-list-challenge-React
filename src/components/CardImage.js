import React from 'react';
import '../styles/Card.css';

export default function CardImage () {
    return (
        <>
        <div id='text'>
            <h1>meet our community</h1>
        </div>
        <div>
            <h5 id='know-more'><a href='#'>know more</a></h5>
        </div>
        <div id='img-1' className='img-container'>
            <div className='restaurant-image'></div>
        </div>
        <div id='img-2' className='img-container'>
            <div className='restaurant-image'></div>
        </div>
        <div id='img-3' className='img-container'>
            <div className='restaurant-image'></div>
        </div>
        </>
    )
}