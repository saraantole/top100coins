import { ThemeProvider } from "styled-components";

const theme = {
    fontSizes: {
        small: "12px",
        medium: "14px"
    },
    borderRadius: '20px',
    shadowOut: `.8rem .8rem 1.4rem #c8d0e7, 
                -.2rem -.2rem 1.8rem #FFFFFF`,
    shadowIn: `inset .2rem .2rem .5rem #c8d0e7, 
                inset -.2rem -.2rem .5rem #FFFFFF`
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
