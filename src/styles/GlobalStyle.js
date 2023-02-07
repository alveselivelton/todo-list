import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  body {
    height: 100vh;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    background-color: #141517;
    color: #fff;
  }
`;
