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
    const { data } = useLoaderData()
    const idUrl = useParams()

    return <>
        <section className="location-wrapper">
            <Suspense fallback={<Spinner />}>
                <Await resolve={data}>
                    {(data) => {

                        const locationData = data.find((d) => d.id === idUrl.id);
                        const { equipments, description, tags, rating, title, location, pictures } = locationData
                        const { name, picture } = locationData.host

                        if (locationData) {
                            return (
                                <>
                                    <SlideShow pictures={pictures} />

                                    <div className="cardContent">

                                        <div className='title-tags'>
                                            <h1>{title}</h1>
                                            <h2>{location}</h2>
                                            <div className="tags">
                                                {tags.map((txt, index) => (
                                                    <Tag key={index} txt={txt} />
                                                ))}
                                            </div>

                                        </div>

                                        <div className="rating-host">
                                            <div className="host">
                                                <Host name={name} picture={picture} />
                                            </div>
                                            <div className='rating'>
                                                <Rating rating={rating} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="collaps-card">
                                        <div className="description">
                                            <Collaps title="Description">
                                                <p>{description}</p>
                                            </Collaps>
                                        </div>
                                        <div className="equipements">
                                            <Collaps title="Équipements" >
                                                <ul>
                                                    {equipments.map((txt, index) => (
                                                        <li key={index}>{txt}</li>
                                                    ))}
                                                </ul>
                                            </Collaps>
                                        </div>
                                    </div>
                                </>

                            )
                        } else {
                            return null
                        }
                    }}
                </Await>
            </Suspense>
        </section>
    </>
}