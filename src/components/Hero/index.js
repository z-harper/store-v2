import * as S from './Hero.styled';

const Hero = ({data, wavesSvg, itemsCount}) => {
  return (
    <S.Hero>
      <S.Waves xmlns={wavesSvg.xmlns} viewBox={wavesSvg.viewBox}><path fill={wavesSvg.fill} fillOpacity={wavesSvg.fillOpacity} d={wavesSvg.d}></path></S.Waves>
      <S.Wrapper>
        <S.Left>
          {data.headerDisplay && <S.Header>{data.header}</S.Header>}
          {data.subHeaderDisplay && <S.SubHeader>{data.subHeader}</S.SubHeader>}
          {data.btnDisplay && <S.LearnMoreBtn>{data.btnText}</S.LearnMoreBtn>}
        </S.Left>
        <S.Right>
          <S.Img src={data.img} alt='nature' />
        </S.Right>
      </S.Wrapper>
    </S.Hero>
  )
}

export default Hero
