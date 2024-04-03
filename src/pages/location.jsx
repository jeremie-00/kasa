import React from "react";
import { useLoaderData, Await, useParams } from 'react-router-dom';
import { Suspense } from "react";

import Spinner from "@components/spinner";
import Collaps from "@components/collaps";
import Tag from "@components/tag";
import Rating from "@components/rating";
import Host from "@components/host";

export default function Location() {
    //recupere une promise
    const { data } = useLoaderData()
    const idUrl = useParams()

    return <>
        <div className="location">
            <Suspense fallback={<Spinner />}>
                <Await resolve={data}>
                    {(data) => {
                        const locationData = data.find((d) => d.id === idUrl.id);
                        const { equipments, description, tags, rating } = locationData
                        const { name, picture } = locationData.host
                        console.log(locationData.host)

                        if (locationData) {
                            return (
                                <>
                                <Host name={name} picture={picture} />
                                <Rating rating={rating} /> 
                                <div className="flexRow gap-20">
                                    {tags.map((txt, index) => (
                                        <Tag key={index} txt={txt} />
                                    ))}
                                </div>
                                    <Collaps
                                        key={locationData.id + "description"}
                                        title="Description"
                                    >
                                        <p >{description}</p>
                                    </Collaps>

                                    <Collaps
                                        key={locationData.id + "equipments"}
                                        title="Équipements"
                                    >
                                        <ul>
                                            {equipments.map((txt, index) => (
                                                <li key={index}>{txt}</li>
                                            ))}
                                        </ul>
                                    </Collaps>
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