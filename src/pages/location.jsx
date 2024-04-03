import React from "react";
import { useLoaderData, Await, useParams } from 'react-router-dom';
import { Suspense } from "react";

import Spinner from "@components/spinner";
import Collaps from "@components/collaps";
import Tag from "@components/tag";



import ElementP from "@components/element_P";
import ElementUl from "@components/element_Ul";

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
                        const { equipments, description, tags } = locationData

                        console.log(locationData)

                        if (locationData) {
                            return (
                                <>
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

                                    {tags.map((txt, index) =>  (
                                        <Tag key={index} txt={txt} />
                                    ))}

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