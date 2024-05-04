import StarActive from '../assets/star_active.png';
import StarInactive from '../assets/star_inactive.png';

const maxStars = 5

export default function Rating({ rating }) {
   const stars = []

   for (let i = 1; i <= maxStars; i++) {
      stars.push(
         <img
            className='star'
            key={i}
            src={i <= rating ? StarActive : StarInactive}
            alt={i <= rating ? "star-filled" : "star-empty"}
         />
      )
   }

   return <>{stars}</>
}