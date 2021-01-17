import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, input, button {
    -webkit-font-smoothing: antialiased;
    background: #311738;

    font-family: 'Roboto Slab', serif;
  }

  button {
    cursor: pointer;
  }
`;
