import { NavLink } from "react-router-dom";

export default function Thumb({ id, title, cover }) {
    return (
        <NavLink className='containerThumb' to={`/kasa/location/${id}`} key={id}>
            <article className='contentThumb'>
                <img className='imgThumb' src={cover} alt='Photo' />
                <div className='overlay'></div>
                <h2>{title}</h2>
            </article>
        </NavLink>
    )
}
