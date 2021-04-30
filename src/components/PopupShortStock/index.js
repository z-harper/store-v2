import * as S from './PopupShortStock.styled';

const PopupShortStock = ({itemStock, handleClose}) => {
  return (
    <S.PopupShortStock onClick={handleClose}>
      <S.Wrapper>
        <S.IconWrapper>
          <S.CloseIcon onClick={handleClose}>X</S.CloseIcon>
        </S.IconWrapper>
        <S.Message>
          Insufficient stock quantity to place order.
          <br />
          Total quantity available: {itemStock}.
        </S.Message>
      </S.Wrapper>
    </S.PopupShortStock>
  )
}

export default PopupShortStock
