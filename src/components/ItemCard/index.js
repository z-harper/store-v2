import * as S from './ItemCard.styled';
import Stars from '../Stars';
import { formatPrice } from '../../utils/price';

const ItemCard = ({item}) => {
  return (
    <S.ItemCard key={item._id}>
      <S.Wrapper>
        <S.ImgWrapper>
          <S.Img src={item.imageUrl} alt={item.name || 'Item Image'} />
        </S.ImgWrapper>
        <S.InfoWrapper>
          <S.Name>{item.name}</S.Name>
          <Stars rating={item.avgRating}/>
          <S.PriceWrapper>
            <S.Price>{formatPrice(item.price)}</S.Price>
            {item.isOnSale && <S.OnSale>On Sale</S.OnSale>}
          </S.PriceWrapper>
        </S.InfoWrapper>
        <S.BtnWrapper>
          <S.ViewItemLink to={`/item/${item._id}`}>View Item</S.ViewItemLink>
        </S.BtnWrapper>
      </S.Wrapper>
    </S.ItemCard>
  )
}

export default ItemCard
