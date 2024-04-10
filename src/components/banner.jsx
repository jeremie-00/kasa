import React from 'react';

export default function Banner({ cls, srcBanner, children }) {
    return <div className='banner'>
        <img className={cls} src={srcBanner} alt="Paysage" />
        {children}
    </div>
}
