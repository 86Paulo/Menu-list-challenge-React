import React from 'react';
import '../styles/Card.css';

export default function Card () {
    return (
    <div className='card-container'>
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
        <div className='text-container'>
            <p className='top-text'>@buzzfeedfood</p>
            <p className='top-text-content'>I'm not a witch. Where'd you get the coconuts? She looks like one. The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water</p>
        </div>
    </div>
    )
}