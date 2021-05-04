import { useState, useEffect } from 'react';
import * as S from './Navbar.styled';
import { data } from './Navbar.data';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const style = { color: '#fff', fontSize: '1.5rem' }

const Navbar = () => {
  const cart = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const getItems = () => {
      const total = cart.reduce((accum, item) => accum +  item.quantity, 0);
      setCartItems(total);
    }
    getItems();
  }, [cart])

  return (
    <S.Navbar>
      <S.Wrapper>
        <S.Link exact to='/'>
          <S.Img src={data.img} alt='logo' />
        </S.Link>
        <S.LinksList>
          {data.links.map(navLink => {
            return (
              <S.LinkItem key={navLink.linkTo}>
                <S.Link exact to={navLink.linkTo}>
                  {navLink.displayAs}
                </S.Link>
              </S.LinkItem>
            )
          })}
          <S.LinkIcon exact to='/cart'>
            <S.IconWrapper>
              <FaShoppingCart style={style} />
              <S.CartCount>{cartItems}</S.CartCount>
            </S.IconWrapper>
          </S.LinkIcon>
        </S.LinksList>
      </S.Wrapper>
    </S.Navbar>
  )
}

export default Navbar
