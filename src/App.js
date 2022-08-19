import SplashScreen from "./Components/SplashScreen";
import React from "react";
import Home from "./Components/Home";

const App = () => {
  const [enter, setEnter] = React.useState(false);

  return (
    <div >
      {!enter && <SplashScreen enter={enter} setEnter={setEnter} />}
      {enter && <Home />}
    </div>
  );
}

export default App;
