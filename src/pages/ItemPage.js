import { useState, useEffect } from 'react';
import axios from 'axios';
import ViewItem from '../components/ViewItem';
import PopupShortStock from '../components/PopupShortStock';

const ItemPage = (props) => {

  const [item, setItem] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [isPopupTriggered, setIsPopupTriggered] = useState(false);

  let url = `https://gp-super-store-api.herokuapp.com/item/${props.match.params.id}`

  // Updates the selected quantity the user is intended on purchasing in ViewItem component
  const handleChange = (e) => {
    setSelectedQuantity(e.target.value);
  }

  // Triggers when user selects Add to Cart in ViewItem component
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedQuantity > item.stockCount) {
      setIsPopupTriggered(true);
      return;
    } 
    setSelectedQuantity(0);
  }

  // Triggers when user closes pop up message in PopupShortStock component
  const handleClose = () => {
    setIsPopupTriggered(false);
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
      {isPopupTriggered && <PopupShortStock itemStock={item.stockCount} handleClose={handleClose} />}
      <ViewItem item={item} selectedQuantity={selectedQuantity} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  )
}

export default ItemPage
