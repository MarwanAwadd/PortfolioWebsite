import SplashScreen from "./Components/SplashScreen";
import React from "react";
import Home from "./Components/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  breakpoints: {
    values:{
      xs: 320,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1440
    }
  }
})
const App = () => {
  const [enter, setEnter] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
    <div >
      {!enter && <SplashScreen enter={enter} setEnter={setEnter} />}
      {enter && <Home />}
    </div>
    </ThemeProvider>
  );
}

export default App;
