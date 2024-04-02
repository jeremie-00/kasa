import React from "react";
import Banner from "@components/banner";
import srcBannerAbout from '@assets/banner_about.png';

export default function About() {
    return <>
        <Banner cls='about-banner' srcBanner={srcBannerAbout} />
    </>
}