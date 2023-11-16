import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


export default function Calification({ cuantity }: { cuantity: number }) {
  const maxStars = 5;
  const filledStars = Math.floor(cuantity);
  const hasHalfStar = cuantity - filledStars >= 0.5;

  return (
    <div className="flex gap-1">
      {[...Array(filledStars)].map((_, index) => (
        <FaStar key={index} className= "text-base md:text-lg xl:text-xl text-arsenic" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className= "text-base md:text-lg xl:text-xl text-arsenic" />}
      {[...Array(maxStars - filledStars - (hasHalfStar ? 1 : 0))].map(
        (_, index) => (
          <FaRegStar key={index} className= "text-base md:text-lg xl:text-xl text-arsenic" />
        )
      )}
    </div>
  );
}
