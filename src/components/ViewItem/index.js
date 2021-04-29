import * as S from './ViewItem.styled';
import Stars from '../Stars';
import { formatPrice } from '../../utils/price';

const ViewItem = ({item}) => {
  return (
    <S.ViewItem>
      <S.Wrapper>
        <S.ImgWrapper>
          <S.Img src={item.imageUrl} alt={item.name || 'Item Image'} />
        </S.ImgWrapper>
        <S.ContentWrapper>
          <S.Name>{item.name}</S.Name>
          <S.Description>{item.description}</S.Description>
          <Stars rating={item.avgRating}/>
          <S.PriceWrapper>
            <S.Price>{formatPrice(item.price)}</S.Price>
            {item.isOnSale && <S.OnSale>On Sale</S.OnSale>}
          </S.PriceWrapper>
          <S.QuantityContainer>
            <S.QuantityLabel htmlFor='quantity'>Quantity:</S.QuantityLabel>
            <S.QuantitySelected required type='number' id='quantity' name='quantity' />
          </S.QuantityContainer>
          <S.AddToCartBtn>Add to Cart</S.AddToCartBtn>
        </S.ContentWrapper>
      </S.Wrapper>
    </S.ViewItem>
  )
}

export default ViewItem
