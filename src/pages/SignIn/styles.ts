import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImage from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${backgroundImage}) no-repeat right;

  h1 {
    color: #fff;
    padding: 12px;
    margin-bottom: 16px;
    border: 3px double #f7b538;
    border-right: none;
    border-left: none;
  }

  form {
    align-items: center;
    justify-content: center;

    /* max-width: 700px; */
  }

  > a {
    color: #f7b538;
    font-weight: 500;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f7b538')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
