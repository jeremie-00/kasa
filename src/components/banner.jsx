import React from 'react';

export default function Banner({cls, srcBanner, children}) {
    return <div className='banner width-80'>
            <img className={cls} src={srcBanner} alt="Paysage"/>
            {children}
        </div>
}
