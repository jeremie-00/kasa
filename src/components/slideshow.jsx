import { useState } from 'react';

import arrowLeft from "@assets/arrow_left.png"
import arrowRight from "@assets/arrow_right.png"

export default function SlideShow({ pictures }) {
    const [activeIndex, setActiveIndex] = useState(0)

    console.log(pictures.length)

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1))
    }

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1))
    }

    return <div className='slider flexRow' >
        <img className="slide-img" src={pictures[activeIndex]} alt="image appartement" />
        <img class="arrow arrow_left" src={arrowLeft} alt="arrow left" onClick={handlePrev} />
        <img class="arrow arrow_right" src={arrowRight} alt="arrow right" onClick={handleNext} />
        <span className='numerotation'>{activeIndex + 1}/{pictures.length}</span>
    </ div>
}
