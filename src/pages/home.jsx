import React from "react";
import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from "react";

import Banner from "@components/banner";
import Spinner from "@components/spinner";
import Thumb from "@components/thumb"
import srcBannerHome from '@assets/banner_home.png';

export default function Home() {
    //recupere une promise
    const { data } = useLoaderData()

    return <div className="home-wrapper">
        <Banner cls='home-banner' srcBanner={srcBannerHome}>
            <h1>Chez vous, <span>partout et ailleurs</span></h1>
        </Banner>
        <div className="home-logements">
            <Suspense fallback={<Spinner />}>
                <Await resolve={data}>
                    {(data) => (
                        data.map(d => (
                            <Thumb
                                key={d.id}
                                id={d.id}
                                title={d.title}
                                cover={d.cover}
                            />
                        ))
                    )}
                </Await>
            </Suspense>
        </div>
    </div>
}