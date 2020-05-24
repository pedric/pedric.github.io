import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #fafafa;
  }

  body {
    font-family: Helvetica, 'Helvetica Neue', Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  h1 {
    font-size: 60px;
  }

  #app {
    min-height: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  p,
  label {
    line-height: 1.5em;
  }

  .media-container {
    position: relative;
    padding: 0 20px 0 0;
    flex-basis: 100%;
    max-width: 100%;
    // min-width: 400px;

    @media screen and (min-width:800px){
      padding: 0 20px 0 0;
      flex-basis: 50%;
      max-width: 50%;
      // min-width: 400px;
    }
  }

  .media-container.media-container--body { padding: 0 20px 0 20px; }
`;

export default GlobalStyle;
