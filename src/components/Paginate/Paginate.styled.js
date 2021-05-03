import styled from 'styled-components';

export const Paginate = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  background: #c8eff9;
`;

export const Wrapper = styled.div`
  margin-top: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PrevNextButton = styled.button`
margin: 0 4px;
width: 50px;
height: 25px;
background: ${({ disabled }) => (disabled ? 'rgba(2,36,73,0.1)' : 'rgba(2,36,73,1)')};
color: var(--btnColor);
font-size: 1rem;
letter-spacing: 1.2px;
border-radius: 8px;
border: none;
outline: none;
cursor: pointer;
cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
transition: all 0.2s ease-in-out;
`;

export const PageButton = styled.button`
  margin: 0 4px;
  width: 50px;
  height: 25px;
  background: ${({ isActive }) => (isActive ? '#f27d42' : '#022449')};
  color: var(--btnColor);
  font-size: 1rem;
  letter-spacing: 1.2px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;