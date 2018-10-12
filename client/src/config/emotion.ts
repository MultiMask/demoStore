import { injectGlobal } from "emotion";

export const theme = {
  colors: {
    background: "#FBFBFB",
    error: "#FF3433",
    primary: "#1888FE",
    secondary: "#C7CCD7"
  },
  shadows: {
    0: "0px 0px 40px 0px rgba(44,66,119,0.05)",
    1: "20px 0px 40px 0px rgba(44,66,119,0.05);"
  },
  typography: {
    large: 17,
    medium: 15,
    small: 14
  }
};

// TODO: resolve this problem
// tslint:disable-next-line:no-unused-expression
injectGlobal`
  * {
    outline: none;
  }

  html,
  body {
    font-family: 'Montserrat', sans-serif;
    color: #000000;
    line-height: 1.3;
    min-height: 100vh;
    margin: 0;
    outline: none;
  }

  #root {
    height: 100%;
  }

  a {
    display: inline-block;
    text-decoration: none;
    transition: all 0.3s;
  }
`;
