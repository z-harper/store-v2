import { useState, useEffect } from 'react';
import axios from 'axios';
import { dealsdata, wavesSvg } from '../components/Hero/Hero.data';
import Hero from '../components/Hero';
import ItemsContainer from '../components/ItemsContainer';

const URL = 'https://gp-super-store-api.herokuapp.com/item/list?isOnSale=true';

const Deals = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      <Hero data={dealsdata} wavesSvg={wavesSvg} itemsCount={items.length} />
      <ItemsContainer isLoading={isLoading} items={items} />
    </>
  )
}

export default Deals
