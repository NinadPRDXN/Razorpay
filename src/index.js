import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    flex-direction: column;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle/>
    <App />
  </>,
  document.getElementById('root')
);
