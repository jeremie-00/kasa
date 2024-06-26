import { Suspense } from "react";
import { useLoaderData, Await } from 'react-router-dom';

import Spinner from "../components/spinner";
import Collaps from "../components/collaps";
import Tag from "../components/tag";
import Rating from "../components/rating";
import Host from "../components/host";
import SlideShow from "../components/slideshow";

export default function Location() {
    const { locationData } = useLoaderData()
    
    return <>
        <section className="location-wrapper">
            <Suspense fallback={<Spinner />}>
                <Await resolve={locationData}>
                    {(data) => {
                  

                        const { equipments, description, tags, rating, title, location, pictures } = data
                        const { name, picture } = data.host

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
                    }}
                </Await>
            </Suspense>
        </section>
    </>
}