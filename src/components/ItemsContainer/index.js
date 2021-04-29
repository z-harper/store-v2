import ItemCard from '../ItemCard';
import * as S from './ItemsContainer.styled';
import Loading from '../Loading';

const ItemsContainer = ({ isLoading, items }) => {

  if (isLoading) {
    return (
      <S.ItemsContainer>
        <Loading />
      </S.ItemsContainer>
    )
  }

  if (items.length < 1) {
    return (
      <S.ItemsContainer>
        <S.NoItemsFound>No items found...</S.NoItemsFound>
      </S.ItemsContainer>
    )
  }

  return (
    <S.ItemsContainer>
      <S.Wrapper>
        <S.ItemsGrid>
          {items.map(item => {
            return (
              <ItemCard item={item} key={item._id} />
            )
          })}
        </S.ItemsGrid>
      </S.Wrapper>
    </S.ItemsContainer>
  )
}

export default ItemsContainer
