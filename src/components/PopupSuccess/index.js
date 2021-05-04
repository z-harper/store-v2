import * as S from './PopupSuccess.styled';

const PopupSuccess = ({handleClose}) => {
  return (
    <S.PopupSuccess onClick={handleClose}>
      <S.Wrapper>
        <S.IconWrapper>
          <S.CloseIcon onClick={handleClose}>X</S.CloseIcon>
        </S.IconWrapper>
        <S.Message>
          Item has been added to cart!!
        </S.Message>
      </S.Wrapper>
    </S.PopupSuccess>
  )
}

export default PopupSuccess
