import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    };

    body,html {
        margin: 0;
        padding: 0;
        height: 100vh;
    }

    body {
        background: ${({ theme }) => theme.colors.mainBackground};
        color: ${({ theme }) => theme.colors.main};
        font-family: ${({ theme }) => theme.fonts.main};
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: ${({ theme }) => theme.fonts.heading};
        letter-spacing: -1px;
        margin: 0;
        margin-bottom: 1rem;
    };

    h1,h2,h3 {
        font-weight: 600;
    }
`;
