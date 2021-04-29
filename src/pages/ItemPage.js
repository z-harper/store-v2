import { useState, useEffect } from 'react';
import axios from 'axios';
import ViewItem from '../components/ViewItem';

const ItemPage = (props) => {

  const [item, setItem] = useState([]);

  let url = `https://gp-super-store-api.herokuapp.com/item/${props.match.params.id}`
  
  useEffect(() => {
    const getItem = async () => {
      const response = await axios.get(url);
      setItem(response.data);
    }
    getItem();
  }, [url])

  return (
    <>
      <ViewItem item={item} />
    </>
  )
}

export default ItemPage
