import * as S from './Navbar.styled';
import { data } from './Navbar.data';

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Wrapper>
        <S.Link exact to='/'>
          <S.Img src={data.img} alt='logo' />
        </S.Link>
        <S.LinksList>
          {data.links.map(navLink => {
            return (
              <S.LinkItem key={navLink.linkTo}>
                <S.Link exact to={navLink.linkTo}>
                  {navLink.displayAs}
                </S.Link>
              </S.LinkItem>
            )
          })}
          </S.LinksList>
      </S.Wrapper>
    </S.Navbar>
  )
}

export default Navbar
