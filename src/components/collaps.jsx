import React from "react";
import { useState } from 'react';
import arrowCollaps from '@assets/arrow_collaps.png';

export default function Collaps({ children, title }) {
    const [active, setActive] = useState(false)

    const handleToggle = () => {
        setActive(!active)
    }

    return (
        <div className="container-collaps">
            <div className="collaps">
                <h2>{title}</h2>
                <img
                    className={active ? 'arrow rotate' : 'arrow'}
                    src={arrowCollaps}
                    alt='arrow'
                    onClick={handleToggle}
                />
            </div>

            <div className={active ? 'content-collaps visible' : 'content-collaps hidden'}>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}