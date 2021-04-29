import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --maxWidth: 1100px;
    --btnBg: #f27d42;
    --btnColor: #fff;
    --btnWidth: 150px;
    --btnHeight: 30px;
    --navbarBg: #022449;
    --linkColor: #fff;
    --linkActive: #f27d42;
    --heroHeaderText: #fff;
    --heroSubHeaderText: #022449;
    --heroBgTop: #022449;
    --heroBgBottom: #96ffff;
    --itemsContainerBg: #c8eff9;
    --itemCardBg: #fff;
    --itemCardBorder: #022449;
    --itemCardPrimaryText: #022449;
    --itemCardOnSaleBg: #f27d42;
    --itemCardOnSaleColor: #fff;
  }

`;

export default GlobalStyles;
