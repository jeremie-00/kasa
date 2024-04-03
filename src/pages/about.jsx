import React from "react";
import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from "react";

import Banner from "@components/banner";
import Spinner from "@components/spinner";
import Collaps from "@components/collaps";
import srcBannerAbout from '@assets/banner_about.png';

export default function About() {
    const { data } = useLoaderData()

    return <>
        <Banner cls='about-banner' srcBanner={srcBannerAbout} />
        <Suspense fallback={<Spinner />}>
            <Await resolve={data}>
                {(data) => (
                    data.map(d => (
                        <Collaps
                            key={d.id}
                            title={d.title}
                            txt={d.text}      
                        />
                    ))
                )}
            </Await>
        </Suspense>
    </>
}