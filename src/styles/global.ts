import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body {
        background: ${props => props.theme.colors.pageBackground};
    }

    body, input, textarea, button {
        font-weight: 500;
        font-size: 1rem;
        font-family: Inter, sans-serif;
        color: ${props => props.theme.colors.pageColor};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: Lexend, sans-serif;
        font-weight: 600;
        color: ${props => props.theme.colors.titleColor};
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    button {
        cursor: pointer;
    }
`;

