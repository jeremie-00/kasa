import React from "react";
import Banner from "@components/banner";
import srcBannerHome from '@assets/banner_home.png';

export default function Home() {
    return <>
        <Banner cls='home-banner' srcBanner={srcBannerHome}>
            <h1>Chez vous, partout et ailleurs</h1>
        </Banner>
    </>
}