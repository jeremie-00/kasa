import { useState } from 'react';

import arrowLeft from "@assets/arrow_left.png"
import arrowRight from "@assets/arrow_right.png"

export default function SlideShow({ pictures }) {
    const [activeIndex, setActiveIndex] = useState(0)

    

    const handlePrev = () => {
        //prevIndex = valeur précedente fonction "callback"
        // si prevIndex === 0 alors on affiche la derniere picture sinon -1
        setActiveIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1))
    }

    const handleNext = () => {
        // si prevIndex === la derniere picture alors on renvoi 0 sinon +1
        setActiveIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1))
    }

    return <div className='slider flexRow' >
        <img className="slide-img" src={pictures[activeIndex]} alt="image appartement" />
        <img class="arrow arrow_left" src={arrowLeft} alt="arrow left" onClick={handlePrev} />
        <img class="arrow arrow_right" src={arrowRight} alt="arrow right" onClick={handleNext} />
        <span className='numerotation'>{activeIndex + 1}/{pictures.length}</span>
    </ div>
}
