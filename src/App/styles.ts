import styled, { injectGlobal } from 'styled-components';

/* tslint:disable */
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;
/* tslint:enable */

const AppStyle = styled.div`
  text-align: center;

  & img {
  animation: App-logo-spin infinite 20s linear;
  height: 2rem;
  }

  & h1 {
    font-size: 1.5em;
  }

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const HeaderStyle = styled.header`
  background-color: #222;
  height: 5rem;
  padding: 1rem;
  color: white;
`;

export {
  AppStyle,
  HeaderStyle
};