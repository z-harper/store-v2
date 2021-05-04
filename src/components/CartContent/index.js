import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateItemQuantity, removeFromCart } from '../../redux/ducks/cart';
import axios from 'axios';
import { formatPrice } from '../../utils/price';
import * as S from './CartContent.styled';
import Loading from '../Loading';

const URL = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc';

const CartContent = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Calculates total price of all items in cart
  const calculatePrice = () => {
    const total = cart.reduce((accum, item) => accum + (item.price * item.quantity), 0)
    return formatPrice(total);
  }

  // Removes item from cart
  const deleteItem = (id) => {
    dispatch(removeFromCart({
      _id: id
    }))
  }

  // Reduces the quantity of the item in cart by 1
  const subtractItem = (id, quantity) => {
    if (quantity - 1 === 0) {
      deleteItem(id);
    } else {
      dispatch(updateItemQuantity({
        _id: id,
        quantity: -1,
      }))
    }
  }

  // Increases the quantity of the item in cart by 1 if there is available stock
  const addItem = (id, quantity) => {
    const item = items.filter(item => item._id === id);
    if (quantity + 1 > item[0].stockCount) {
      window.alert('Not enough stock');
    } else {
      dispatch(updateItemQuantity({
        _id: id,
        quantity: 1,
      }))
    }
  }

  useEffect(() => {
    let componentMounted = true; 
    const getAllItems = async () => {
      setIsLoading(true);
      const response = await axios.get(URL);
      if (componentMounted) {  
        setItems(response.data.items);
        setIsLoading(false);
      }
      return () => { 
        componentMounted = false; 
      }
    }
    getAllItems();
  }, [])


  if (isLoading) {
    return (
      <S.CartContent>
        <Loading />
      </S.CartContent>
    )
  }

  return (
    <S.CartContent>
      <S.Wrapper>
        <S.Title>Shopping Cart</S.Title>
        <S.CartItems>
          {cart.map(item => {
            return (
              <S.ItemContainer key={item._id}>
                <S.ImgWrapper>
                  <S.Img src={item.imageUrl} alt={item.name || 'Item Image'} />
                </S.ImgWrapper>
                <S.QuantityContainer>
                  <S.Name>{item.name}</S.Name>
                  <div>
                    <button onClick={() => subtractItem(item._id, item.quantity)}>-</button>
                    <span>Qty: {item.quantity}</span>
                    <button onClick={() => addItem(item._id, item.quantity)}>+</button>
                  </div>
                  <button onClick={() => deleteItem(item._id)}>Delete</button>
                </S.QuantityContainer>
                <S.PriceContainer>
                  <S.CurrentQuantity>Quantity: {item.quantity} @ {formatPrice(item.price)}</S.CurrentQuantity>
                  <S.Price>{formatPrice(item.price * item.quantity)}</S.Price>
                </S.PriceContainer>
              </S.ItemContainer>
            )
          })}
        </S.CartItems>
        <S.CheckoutContainer>
          <S.CheckoutBtn>Checkout</S.CheckoutBtn>
          <S.GrandTotal>{calculatePrice()}</S.GrandTotal>
        </S.CheckoutContainer>
      </S.Wrapper>
    </S.CartContent>
  )
}

export default CartContent
