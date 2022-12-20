import { createGlobalStyle } from 'styled-components';
// 전역 스타일링
import reset from 'styled-reset';
// 리셋

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
 }

  body {
    background: rgb(217,205,124);
    background: linear-gradient(115deg, rgba(217,205,124,1) 0%, rgba(234,241,231,1) 66%, rgba(194,218,181,1) 91%);
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300; /* 100, 300, 400 */
  }

  section {
    max-width: 390px;
    height: 100vh;
    margin: 0 auto;
    background-color: #F3F1E8;
    box-shadow: 1px solid black;
  }

  .ir {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect (0, 0, 0, 0);
  }
`;

export default GlobalStyle;
