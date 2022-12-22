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
    font-weight: 300; /* 100 = 얇게, 300 = 보통, 400 = 두껍게 */
  }
  
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 108px);
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    justify-content: center;
  }

  main::-webkit-scrollbar {
    display: none;
  }

  .ir {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
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
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
