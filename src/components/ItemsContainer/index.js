import ItemCard from '../ItemCard';
import * as S from './ItemsContainer.styled';

const ItemsContainer = ({ items }) => {
  return (
    <S.ItemsContainer>
      <S.Wrapper>
        <S.ItemsGrid>
          {items.map(item => {
            return (
              <ItemCard item={item} />
            )
          })}
          
        </S.ItemsGrid>
      </S.Wrapper>
    </S.ItemsContainer>
  )
}

export default ItemsContainer
