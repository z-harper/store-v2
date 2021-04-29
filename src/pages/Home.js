import { useState, useEffect } from 'react';
import axios from 'axios';
import { homedata, wavesSvg } from '../components/Hero/Hero.data';
import Hero from '../components/Hero';
import ItemsContainer from '../components/ItemsContainer';

const URL = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc';

const Home = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getAllItems = async () => {
      const response = await axios.get(URL);
      setItems(response.data.items);
    }
    getAllItems();
  }, [])

  return (
    <>
      <Hero data={homedata} wavesSvg={wavesSvg} />
      <ItemsContainer items={items} />
    </>
  )
}

export default Home
