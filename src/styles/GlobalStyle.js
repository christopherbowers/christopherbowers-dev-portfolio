import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    color: hsl(0, 0%, 80%);
    background: black;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(30px, 8vw, 70px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(20px, 7vw, 55px);
  }

  .section-heading {
    margin: 10px 0 40px;
    font-size: clamp(25px, 8vw, 40px);
  }

  #root, #__next {
    isolation: isolate;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    padding: 0 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    @media (max-width: 1080px) {
      padding: 0 100px;
    }
    @media (max-width: 768px) {
      padding: 0 50px;
    }
    @media (max-width: 480px) {
      padding: 0 25px;
    }
  }



`

export default GlobalStyle
