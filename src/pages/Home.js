import { useState, useEffect } from 'react';
import axios from 'axios';
import { homedata, wavesSvg } from '../components/Hero/Hero.data';
import Hero from '../components/Hero';
import HomeContent from '../components/HomeContent';

const URL = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc';

const Home = () => {

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
      <Hero data={homedata} wavesSvg={wavesSvg} />
      <HomeContent isLoading={isLoading} items={items} />
    </>
  )
}

export default Home
