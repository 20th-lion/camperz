import { createGlobalStyle } from 'styled-components';
// 전역 스타일링
import reset from 'styled-reset';
// 리셋

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .ir {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300; /* 100 = 얇게, 300 = 보통, 400 = 두껍게 */
    overflow-y: hidden;
  }
  
  main {
    height: calc(100vh - 108px);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  main::-webkit-scrollbar {
    display: none;
  }

  section {
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    vertical-align: top;
  }

  li {
    list-style: none;
  }

  button {
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: inherit;
  }

  input, 
  textarea {
    background-color: inherit;
    border: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit; 
    color: #000000;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: #92918A;
  }
`;

export default GlobalStyle;
