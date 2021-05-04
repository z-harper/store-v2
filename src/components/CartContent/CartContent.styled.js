import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';

export const CartContent = styled.div`
  max-width: 992px;
  min-height: 400px;
  margin: auto;
  padding: 0 2rem;

  @media screen and ${breakpoints.device.sm} {
    padding: 0 1rem;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 3rem;

  @media screen and ${breakpoints.device.sm} {
    padding-top: 2rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: #022449;
`;

export const CartItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
`;

export const ItemContainer = styled.div`
  padding: 8px;
  display: flex;
  border: 2px solid #022449;
  border-radius: 4px;
`;

export const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Name = styled.h3`
  color: #022449;
`;

export const QuantityContainer = styled.div`
  border: 1px solid red;
`;

export const PriceContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CurrentQuantity = styled.h4`
  color: #558dca;
`;

export const Price = styled.h2`
  color: #022449;
  letter-spacing: 1.1px;
  text-align: right;
  border-top: 2px solid #022449;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckoutBtn = styled.button`
  margin: 3rem 0;
  width: var(--btnWidth);
  height: var(--btnHeight);
  background: var(--btnBg);
  color: var(--btnColor);
  font-size: 1rem;
  letter-spacing: 1.2px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #022449;
  }
`;

export const GrandTotal = styled.h2`
  padding-right: 12px;
  color: #022449;
`;