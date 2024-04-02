import { NavLink } from "react-router-dom";

export default function Thumb({ id, txt, cover }) {
    if (!id || !txt || !cover) {
        throw new Error(`Composant Thumb : Propriétés manquantes - id: ${id}, txt: ${txt}, cover: ${cover}`);
    }
    return (
        <NavLink className='containerCard' to={`/location/${id}`} key={id}>
            <article className='contentCard'>
                <img className='imgCard' src={cover} alt='Photo' />
                <div className='overlay'></div>
                <h2>{txt}</h2>
            </article>
        </NavLink>
    )
    // try {
    //     if (id && txt && cover) {
    //         return (
    //             <NavLink className='containerCard' to={`/location/${id}`} key={id}>
    //                 <article className='contentCard'>
    //                     <img className='imgCard' src={cover} alt='Photo' />
    //                     <div className='overlay'></div>
    //                     <h2>{txt}</h2>
    //                 </article>
    //             </NavLink>
    //         )
    //     } else {
    //         throw new Error(`Composant Thumb : Propriétés manquantes - id: ${id}, txt: ${txt}, cover: ${cover}`)
    //     }
    // } catch (error) {
    //     return error
    // }
}
    