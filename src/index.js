import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import Router from './routes';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

  *,
  *:after,
  *:before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html {
    font-family: 'Open Sans', sans-serif;
    background: #1e1e1e;
  }

  
`;

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <Router />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
