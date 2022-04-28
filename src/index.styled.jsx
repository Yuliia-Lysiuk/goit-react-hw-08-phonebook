import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   body {
    box-sizing: border-box;
    color: #5a0715;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.03em;
    line-height: 1.71;
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover,
  a:focus {
    color: red;
  }
  /* Забрали маркери в списках */
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  /* Забрали відступи в заголовках */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  .section {
    padding-top: 60px;
    padding-bottom: 60px;
    
  }
  a {
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition {
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`