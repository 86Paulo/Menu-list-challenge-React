import React from 'react';

export default function Card (text, topText) {
    return <div className='card-container'>
        <div className='img-container'>
            <img className='img' src='' alt='food image'/>
        </div>
        <div className='text-container'>
            <p className='top-text'>{topText}</p>
            <p className='text'>{text}</p>
        </div>
    </div>
}