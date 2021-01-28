import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html, body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: 62.5%;
}

* {
    padding: 0;
    margin: 0;
}
`;

export default GlobalStyle;
