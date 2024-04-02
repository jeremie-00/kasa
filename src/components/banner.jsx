import React from 'react';
import srcBannerHome from '@assets/banner_home.png';

function Banner({cls, children}) {
    return <div className='banner'>
            <img className={cls} src={srcBannerHome} alt="Paysage"/>
            {children}
        </div>
}

export default Banner;