import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoints from '../../themes/breakpoints';

export const ItemCard = styled.div`
  border: 2px solid var(--itemCardBorder);
  min-height: 200px;
  min-width: 200px;
  padding: 1rem;
  background: var(--itemCardBg);
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and ${breakpoints.device.sm} {
    align-items: center;
    justify-content: center;
  }

  @media screen and ${breakpoints.device.xs} {
    display: block;
  }
`;

export const ImgWrapper = styled.div`
  width: 180px;
  height: 180px;
  margin: auto;
  margin-bottom: 1rem;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const InfoWrapper = styled.div``;

export const Name = styled.h3`
  margin-bottom: 16px;
  text-align: center;
  color: var(--itemCardPrimaryText);
`;

export const PriceWrapper =styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;

  @media screen and ${breakpoints.device.sm} {
    justify-content: center;
  }
`;

export const Price = styled.h4`
  margin-right: 8px;
  letter-spacing: 1.1px;

  @media screen and ${breakpoints.device.sm} {
    margin: 0;
  }
`;

export const OnSale = styled.p`
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 14px;
  background: var(--itemCardOnSaleBg);
  color: var(--itemCardOnSaleColor);
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewItemLink = styled(Link)`
  margin-top: 1rem;
  width: var(--btnWidth);
  height: var(--btnHeight);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--btnBg);
  color: var(--btnColor);
  font-size: 1rem;
  letter-spacing: 1.2px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: #022449;
  }
`;