import * as S from './PopupCheckout.styled';

const PopupCheckout = ({handleClose}) => {
  return (
    <S.PopupCheckout onClick={handleClose}>
      <S.Wrapper>
        <S.Title>
          Thank you for your purchase!
        </S.Title>
        <S.Message>
          Your order will be on its way shortly. In the meantime, please feel free to continue shopping!
        </S.Message>
        <S.LinkWrapper>
          <S.Link exact to='/'>Return to Home</S.Link>
        </S.LinkWrapper>
      </S.Wrapper>
    </S.PopupCheckout>
  )
}

export default PopupCheckout
