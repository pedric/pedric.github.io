import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #f6f6f6;
    box-sizing: border-box;
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

  .app-wrapper {
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

    @media screen and (min-width:800px){
      flex-basis: 50%;
      max-width: 50%;
    }
  }

  .media-container.media-container--body { padding: 0 20px 0 20px; }

  .active { background: #e6e6e6; }

  a:not(.active):hover { text-decoration: underline !important; }

  .listcard {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 160px;
    padding: 2%;

    @media screen and (min-width:500px){
      flex-basis: 33.3334%;
      max-width: 33.3334%;
      padding: 2%;
    }

    @media screen and (min-width:800px){
      flex-basis: 16.6667%;
      max-width: 16.6667%;
      padding: 20px;
    }
  }
`;

export default GlobalStyle;
