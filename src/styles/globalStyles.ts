import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --white: #FFF;
        --black: #000;
        --aqua: #80BDB8;
        --darkAqua: #61918B;
        --blue: #3BA3AA;
        --orange: #F36324;
        --red: #CD251D;
        --darkGrey: #231f20;
    }
    
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Open Sans", sans-serif;
        background: var(--white);
        color: var(--black);
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: var(--white);
    }

`;