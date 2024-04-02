import { NavLink } from "react-router-dom";

export default function Thumb({ id, txt, cover }) {
    return <NavLink className='containerCard' to={`/location/${id}`} key={id}>
        <article className='contentCard'>
            <img className='imgCard' src={cover} alt='Photo' />
            <div className='overlay'></div>
            <h2>{txt}</h2>
        </article>
    </NavLink >
}