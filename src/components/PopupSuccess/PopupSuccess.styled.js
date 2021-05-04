import styled from 'styled-components';

export const PopupSuccess = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background: rgba(200,239,249,0.7);
`;

export const Wrapper = styled.div`
  position: relative;
  width: 60%;
  max-width: 800px;
  margin: auto;
  margin-top: 15vh;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseIcon = styled.span`
  content: 'X';
  padding: 4px 8px;
  color: #022449;
  background: #f27d42;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #022449;
  border-radius: 50%;
  cursor: pointer;
`;

export const Message = styled.p`
  width: 100%;
  margin-top: 3px;
  padding: 1rem;
  font-size: 18px;
  color: #022449;
  line-height: 1.6;
  background: #fff;
  border: 1px solid #022449;
  border-radius: 4px;
  background: rgba(124,252,0,0.7);
`;