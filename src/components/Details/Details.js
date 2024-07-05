import React, { useState } from 'react';
import './Details.css';

function Details({ details }) {
    const { id, name, subtitle, images, content } = details;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='details-container'>
            <h1>{name}</h1>
            <h4>{subtitle}</h4>
            <div className='image-container'>
               <button onClick={handlePrevious} className='prev'></button>
                <img src={images[currentImageIndex]} alt={`${name}-${currentImageIndex}`} />
                <button onClick={handleNext}
                className='next'></button>
            </div>
            <b><p>About the Experience</p></b>
            <p>{content}</p>
        </div>
    );
}

export default Details;
