import React from "react";
import { useLoaderData, Await, useParams } from 'react-router-dom';
import { Suspense } from "react";

import Spinner from "@components/spinner";
import Collaps from "@components/collaps";
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
                    {(data) => (
                        data.map(d => (
                            <>
                                <Collaps
                                    key={d.id}
                                    title={d.title}
                                >
                                    <ElementUl liste={d.equipments} />
                                </ Collaps>
                                <Collaps
                                    key={d.id}
                                    title={d.title}
                                >
                                    <ElementP txt={d.description} />
                                </ Collaps>
                            </>
                        ))
                    )}
                </Await>
            </Suspense>
        </div>
    </>
}