import { useRef } from 'react';
import * as S from './Searchbar.styled';

const Searchbar = ({handleChange}) => {

  const searchInput = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <S.Searchbar>
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor='item-search'>
          <S.LabelText>Search Items</S.LabelText>
        </S.Label>
        <S.Input type='search' id='item-search' placeholder='Search Items' ref={searchInput} onChange={() => handleChange(searchInput.current.value)} />
        <S.SearchButton type='submit'>Search</S.SearchButton>
      </S.Form>
    </S.Searchbar>
  )
}

export default Searchbar
