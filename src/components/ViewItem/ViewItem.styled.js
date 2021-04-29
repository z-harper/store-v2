import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';

export const ViewItem = styled.div`
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media screen and ${breakpoints.device.sm} {
    padding-top: 2rem;
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and ${breakpoints.device.sm} {
    max-width: 300px;
    max-height: 300px;
    margin: auto;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  margin-left: 1rem;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--itemsContainerBg);
  border-radius: 1rem;

  @media screen and ${breakpoints.device.sm} {
    margin: 0;
  }
`;

export const Name = styled.h2`
  color: #022449;
  margin: 1rem 0;
`;

export const Description = styled.p`
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  color: #558dca;
  border-bottom: 1px solid #558dca;
`;

export const PriceWrapper =styled.div`
  display: flex;
  align-items: center;

  @media screen and ${breakpoints.device.sm} {
    justify-content: center;
  }
`;

export const Price = styled.h4`
  margin-top: 4px;
  margin-right: 8px;
  color: #022449;
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

export const QuantityContainer = styled.div`
  margin-top: 1rem;
`;

export const QuantityLabel = styled.label`
  margin-right: 8px;
  font-size: 18px;
  color: #558dca;
`;

export const QuantitySelected = styled.input`
  padding: 2px 6px;
  margin-bottom: 1rem;
  width: 4rem;
  color: #558dca;
  font-size: 18px;
  border: 2px solid #558dca;
  border-radius: 8px;
  outline: none;
`;

export const AddToCartBtn = styled.button`
  margin-bottom: 1rem;
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
    background: #558dca;
  }
`;