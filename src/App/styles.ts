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

  & .App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  }

  & .App-title {
    font-size: 1.5em;
  }

  & .App-intro {
    font-size: large;
  }

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const HeaderStyle = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

export {
  AppStyle,
  HeaderStyle
};