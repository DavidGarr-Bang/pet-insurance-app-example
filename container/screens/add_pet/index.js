import React from "react";
import Main from "./Main";
import { ContextProvider } from "./context";

function App(props) {
  return (
    <ContextProvider {...props}>
      <Main />
    </ContextProvider>
  );
}

export default App;
