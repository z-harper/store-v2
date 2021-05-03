import { useState, useEffect } from 'react';
import * as S from './Paginate.styled';
import ItemsContainer from '../ItemsContainer';

const ITEMS_LIMIT = 6;  // Number of items shown per page
const PAGES_LIMIT = 3;  // Number of pages displayed at a time

const Paginate = ({isLoading, items}) => {

  const [currentPage, setCurrentPage] = useState(1);

  // Returns number of posts equal to the ITEMS_LIMIT
  const getPaginatedItems = () => {
    const startIndex = currentPage * ITEMS_LIMIT - ITEMS_LIMIT;
    const endIndex = startIndex + ITEMS_LIMIT;
    return items.slice(startIndex, endIndex);
  }

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 300 });
  }, [currentPage]);

  // Returns group of page numbers in the pagination equal to PAGES_LIMIT
  const getPaginatedGroup = () => {
    let pages = Math.ceil(items.length / ITEMS_LIMIT);

    if (pages <= PAGES_LIMIT) {
      return new Array(pages).fill().map((_, pages) => pages + 1);
    }
    if (currentPage === 1) {
      return new Array(PAGES_LIMIT).fill().map((_, i) => currentPage + i);
    }
    if (currentPage === pages) {
      let pagesStart = currentPage - PAGES_LIMIT + 1;
      return new Array(PAGES_LIMIT).fill().map((_, i) => pagesStart + i);
    }
    // Need additional logic if want to change number of pages displayed from 3
    return [currentPage - 1, currentPage, currentPage + 1];
  }

  // Called when the user clicks on any page number
  const changePage = (e) => {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }

  return (
    <S.Paginate>      
      <ItemsContainer isLoading={isLoading} items={getPaginatedItems()} />
      <S.Wrapper>
        <S.PrevNextButton disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Prev
        </S.PrevNextButton>
        {getPaginatedGroup().map((item, index) => (
            <S.PageButton key={index} onClick={changePage} isActive={Number(item) === currentPage}>
              {item}
            </S.PageButton>
        ))}
        <S.PrevNextButton disabled={currentPage === Math.ceil(items.length / ITEMS_LIMIT) || items.length === 0} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </S.PrevNextButton>
      </S.Wrapper>
    </S.Paginate>
  )
}

export default Paginate
