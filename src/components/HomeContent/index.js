import { useState } from 'react';
import * as S from './HomeContent.styled';
import Searchbar from '../Searchbar';
import ItemsContainer from '../ItemsContainer';

const HomeContent = ({isLoading, items}) => {

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

  return (
    <S.HomeContent>
      <Searchbar handleChange={handleChange} />
      <ItemsContainer isLoading={isLoading} items={userSearch.length < 1 ? items : searchResults} />
    </S.HomeContent>
  )
}

export default HomeContent
