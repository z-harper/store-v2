import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';

export const Searchbar = styled.div`
  padding-top: 2rem;
  background: #c8eff9;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;

  @media screen and ${breakpoints.device.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Label = styled.label`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const LabelText = styled.span``;

export const Input = styled.input`
  width: 250px;
  margin-right: 0.5rem;
  padding: 2px 6px;
  outline: none;
  color: #022449;
  font-size: 18px;
  border: 2px solid #022449;
  border-radius: 8px;

  @media screen and ${breakpoints.device.sm} {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

export const SearchButton = styled.button`
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