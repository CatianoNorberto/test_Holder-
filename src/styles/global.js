import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F0F1F7;
    -webkit-font-smoothing: antialiased;
    scrollbar-width: thin;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  body #root{
     /* Hide scrollbar for IE, Edge and Firefox */
     -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
  }

  body, input, button, textarea {
    font: 500 1rem 'Inter', sans-serif;
    color: #312e38;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    font-family: 'Inter', sans-serif;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  strong {
    font-weight: 500;
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
    transition: filter 0.2s;
    font-family: 'Inter', sans-serif;

    &:hover {
      filter: brightness(0.9);
    }
  }

  label {
    span {
      color: #e02041 !important;
    }
  }

  img {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .slick-arrow {
    background: #999;
    height: 40px;
    width: 40px;

    &:hover{
      background: #999;
    }
  }

  a {
    text-decoration: none;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;