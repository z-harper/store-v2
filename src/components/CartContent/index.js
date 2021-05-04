import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateItemQuantity, removeFromCart, clearCart } from '../../redux/ducks/cart';
import axios from 'axios';
import { formatPrice } from '../../utils/price';
import * as S from './CartContent.styled';
import Loading from '../Loading';
import PopupShortStock from '../PopupShortStock';
import PopupCheckout from '../PopupCheckout';

const URL = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc';

const CartContent = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isShortStock, setIsShortStock] = useState(false); // Used to display popup
  const [stockCount, setStockCount] = useState(); // Used in shortstock popup
  const [isCheckedOut, setIsCheckedOut] = useState(false);  // Triggers checkout popup when true

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
      setStockCount(item[0].stockCount - quantity);
      setIsShortStock(true);
    } else {
      dispatch(updateItemQuantity({
        _id: id,
        quantity: 1,
      }))
    }
  }

  // Triggers when user closes pop up message
  const handleClose = () => {
    setIsShortStock(false);
    setIsCheckedOut(false);
  }

  const handleCheckout = () => {
    dispatch(clearCart());
    setIsCheckedOut(true);
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

  if (cart.length < 1 && !isCheckedOut) {
    return (
      <S.CartContent>
        <S.CartEmpty>Cart Currently Empty...</S.CartEmpty>
      </S.CartContent>
    )
  }

  return (
    <S.CartContent>
      {isCheckedOut && <PopupCheckout handleClose={handleClose} />}
      {isShortStock && <PopupShortStock itemStock={stockCount} handleClose={handleClose} />}
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
                  <S.QuantityBtnWrapper>
                    <S.ChangeQuantityBtn onClick={() => subtractItem(item._id, item.quantity)}>-</S.ChangeQuantityBtn>
                    <S.QuantitySelected>Qty: {item.quantity}</S.QuantitySelected>
                    <S.ChangeQuantityBtn onClick={() => addItem(item._id, item.quantity)}>+</S.ChangeQuantityBtn>
                  </S.QuantityBtnWrapper>
                  <S.DeleteItemBtn onClick={() => deleteItem(item._id)}>Delete Item</S.DeleteItemBtn>
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
          <S.CheckoutBtn onClick={() => handleCheckout()}>Checkout</S.CheckoutBtn>
          <S.GrandTotal>Total: {calculatePrice()}</S.GrandTotal>
        </S.CheckoutContainer>
      </S.Wrapper>
    </S.CartContent>
  )
}

export default CartContent
