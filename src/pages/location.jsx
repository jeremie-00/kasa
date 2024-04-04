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
        <div className="flexColumn gap-20 width-80">
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
                                    <div className="flexBeteew">
                                        <div className='titleCard'>
                                            <h1>{title}</h1>
                                            <h2>{location}</h2>
                                        </div>
                                        <Host name={name} picture={picture} />
                                    </div>

                                    <div className="flexBeteew">
                                        <div className="flexRow gap-20">
                                            {tags.map((txt, index) => (
                                                <Tag key={index} txt={txt} />
                                            ))}
                                        </div>
                                        <Rating rating={rating} />
                                    </div>
                                    <div className="flexBeteew gap-20">
                                        <Collaps
                                            title="Description"
                                        >
                                            <p >{description}</p>
                                        </Collaps>

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