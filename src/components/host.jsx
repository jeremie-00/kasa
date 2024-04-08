
export default function Host({ name, picture}) {
    return <>
        <h2>{name}</h2>
        <img className='imgHost' src={picture} alt='Photo' />
    </> 
}