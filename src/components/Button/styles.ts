import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #f7b538;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #311738;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  margin: 24px 0;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#DB7C26')};
  }
`;
