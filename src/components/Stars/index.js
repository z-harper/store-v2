import * as S from './Stars.styled';
import { FaRegStar, FaStarHalfAlt, FaStar} from 'react-icons/fa';

const style = { color: '#022449', fontSize: '1rem' }

const starRating = (rating) => {
  const maxStarRating = 5
  let itemStarRating = []
  let starKey = 0

  let fullStars = Math.floor(rating)
  let halfStars = Math.ceil(rating - fullStars)
  let emptyStars = Math.floor(maxStarRating - rating)

  while (fullStars > 0) {
    itemStarRating.push(<FaStar key={starKey++} style={style} />)
    fullStars--
  }

  while (halfStars > 0) {
    itemStarRating.push(<FaStarHalfAlt key={starKey++} style={style} />)
    halfStars--
  }

  while (emptyStars > 0) {
    itemStarRating.push(<FaRegStar key={starKey++} style={style} />)
    emptyStars--
  }

  return itemStarRating
}

const Stars = ({rating}) => {

  return (
    <S.Stars>
      {starRating(rating)}
    </S.Stars>
  )
}

export default Stars
