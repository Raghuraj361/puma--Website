import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./components/StateProvider/StateProvider";
import { initialState } from "./Reducer";
import reducer from "./Reducer";
// import AppContext from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AppContext> */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    {/* </AppContext> */}
  </React.StrictMode>
);