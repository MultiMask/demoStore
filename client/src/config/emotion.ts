import { injectGlobal } from "emotion";

export const theme = {
  colors: {
    background: "#FBFBFB",
    error: "#FF3433",
    hint: "#DEE3EC",
    main: "#32325D",
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
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: inherit;
  }

  #root {
    height: 100%;
  }
`;
