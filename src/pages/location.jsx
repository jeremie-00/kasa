import React from "react";
import { useLoaderData, Await, useParams } from 'react-router-dom';
import { Suspense } from "react";

import Spinner from "@components/spinner";
import Collaps from "@components/collaps";
import Tag from "@components/tag";
import Rating from "@components/rating";
import Host from "@components/host";
import SlideShow from "@components/slideshow";

export default function Location() {
    //recupere une promise
    const { data } = useLoaderData()
    const idUrl = useParams()

    return <>
        <div className="wrapper width-80 margin-50 gap-20">
            <Suspense fallback={<Spinner />}>
                <Await resolve={data}>
                    {(data) => {

                        const locationData = data.find((d) => d.id === idUrl.id);
                        const { equipments, description, tags, rating, title, location, pictures } = locationData
                        const { name, picture } = locationData.host

                        console.log(pictures.length)

                        const cles = Object.keys(locationData);
                        //console.log(cles)

                        if (locationData) {
                            return (
                                <>
                                    <SlideShow pictures={pictures} />
                                    <div className="flexBetween">
                                        <div className='titleCard'>
                                            <h1>{title}</h1>
                                            <h2>{location}</h2>
                                        </div>
                                        <Host name={name} picture={picture} />
                                    </div>

                                    <div className="flexBetween">
                                        <div className="flexRow gap-20">
                                            {tags.map((txt, index) => (
                                                <Tag key={index} txt={txt} />
                                            ))}
                                        </div>
                                        <Rating rating={rating} />
                                    </div>
                                    <div className="flexBetween location-collaps">
                                        <div className="containerCollaps">
                                        <Collaps
                                            title="Description"
                                        >
                                            <p >{description}</p>
                                        </Collaps>
                                        </div>
                                        <div className="container-collaps">
                                        <Collaps
                                            title="Équipements"
                                        >
                                            <ul>
                                                {equipments.map((txt, index) => (
                                                    <li key={index}>{txt}</li>
                                                ))}
                                            </ul>
                                        </Collaps>
                                        </div>
                                    </div>
                                </>

                            );
                        } else {
                            return null;
                        }
                    }}
                </Await>
            </Suspense>
        </div>
    </>
}