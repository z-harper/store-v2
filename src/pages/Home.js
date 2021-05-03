import { useState, useEffect } from 'react';
import axios from 'axios';
import { homedata, wavesSvg } from '../components/Hero/Hero.data';
import Hero from '../components/Hero';
import Searchbar from '../components/Searchbar';
import Paginate from '../components/Paginate';

const URL = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc';

const Home = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userSearch, setUserSearch] = useState('');  // User search
  const [searchResults, setSearchResults] = useState([]);  // Item(s) returned from search

  // Updates the user's search entry and filters based on search
  const handleChange = (searchQuery) => {
    setUserSearch(searchQuery);
    const newItemList = items.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    })
    setSearchResults(newItemList)
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

  return (
    <>
      <Hero data={homedata} wavesSvg={wavesSvg} />
      <Searchbar handleChange={handleChange} />
      <Paginate isLoading={isLoading} items={userSearch.length < 1 ? items : searchResults} />
    </>
  )
}

export default Home
