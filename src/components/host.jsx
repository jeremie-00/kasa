
export default function Host({name, picture}) {
    return <div className="host flexRow gap-20">
        <h2>{name}</h2>
        <img className='imgHost' src={picture} alt='Photo' />
    </div> 
}