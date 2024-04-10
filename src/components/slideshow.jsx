import { useState } from 'react';

import arrowLeft from "@assets/arrow_left.png"
import arrowRight from "@assets/arrow_right.png"

export default function SlideShow({ pictures }) {
    const [activeIndex, setActiveIndex] = useState(0)

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1))
    }

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1))
    }

    return <div className='slider' >

        {pictures.map((picture, index) => (
            <img
                key={index}
                className={`slide-img ${index === activeIndex ? `active` : ``}`}
                src={picture}
                alt={`image ${index}`}
            />
        ))}

        <img className={pictures.length <= 1 ? 'hidden' : 'arrow arrow_left'} src={arrowLeft} alt="arrow left" onClick={handlePrev} />
        <img className={pictures.length <= 1 ? 'hidden' : 'arrow arrow_right'} src={arrowRight} alt="arrow right" onClick={handleNext} />
        <span className={pictures.length <= 1 ? 'hidden' : 'numerotation'} >{activeIndex + 1}/{pictures.length}</span>
    </ div>
}
