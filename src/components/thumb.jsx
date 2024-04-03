import { NavLink } from "react-router-dom";

export default function Thumb({ id, title, cover }) {
    //si il manque des donnees alors page erreur
    if (!id || !title || !cover) {
        throw new Error(`Composant Thumb : Propriétés manquantes - id: ${id}, txt: ${title}, cover: ${cover}`);
    }
    return (
        <NavLink className='containerCard' to={`/location/${id}`} key={id}>
            <article className='contentCard'>
                <img className='imgCard' src={cover} alt='Photo' />
                <div className='overlay'></div>
                <h2>{title}</h2>
            </article>
        </NavLink>
    )
}
    