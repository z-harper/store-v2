import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateItemQuantity } from '../redux/ducks/cart';
import axios from 'axios';
import ViewItem from '../components/ViewItem';
import PopupSuccess from '../components/PopupSuccess';
import PopupShortStock from '../components/PopupShortStock';

const ItemPage = (props) => {

  const [item, setItem] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [stockCount, setStockCount] = useState();
  const [isShortStock, setIsShortStock] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  let url = `https://gp-super-store-api.herokuapp.com/item/${props.match.params.id}`

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Updates the selected quantity the user is intended on purchasing in ViewItem component
  const handleChange = (e) => {
    setSelectedQuantity(e.target.value);
  }

  // Triggers when user selects Add to Cart in ViewItem component
  const handleSubmit = (e) => {
    e.preventDefault();
    setStockCount(item.stockCount);
    let alreadyInCart = false;
    let quantity = parseInt(selectedQuantity);
    // Within cart state, check if this item already exists and what quantity is chosen
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === item._id) {
        alreadyInCart = true;
        quantity += cart[i].quantity;

        // If quantity selected too large, show popup and return
        if (quantity > item.stockCount) {
          setStockCount(item.stockCount - cart[i].quantity);
          setIsShortStock(true);
          return;
        }
        // If item in cart and new quantity selected not too large, add to existing order
        dispatch(updateItemQuantity({
          _id: item._id,
          quantity: parseInt(selectedQuantity),
        }))
        setSelectedQuantity(1);
        setIsSuccess(true);
        break;
      }
    }
    if (alreadyInCart) {
      return;
    }
    // Show popup if selected quantity > the quantity in stock
    if (quantity > item.stockCount) {
      setIsShortStock(true);
      return;
    } 
    // If item has yet to be added to cart and there is enough stock for order
    dispatch(addToCart({
      _id: item._id,
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
      quantity: quantity,
    }))
    setSelectedQuantity(1);
    setIsSuccess(true);
  }

  // Triggers when user closes pop up message in PopupShortStock component
  const handleClose = () => {
    setIsShortStock(false);
    setIsSuccess(false);
  }
  
  useEffect(() => {
    const getItem = async () => {
      const response = await axios.get(url);
      setItem(response.data);
    }
    getItem();
  }, [url])

  return (
    <>
      {isSuccess && <PopupSuccess handleClose={handleClose} />}
      {isShortStock && <PopupShortStock itemStock={stockCount} handleClose={handleClose} />}
      <ViewItem item={item} selectedQuantity={selectedQuantity} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  )
}

export default ItemPage
