import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LotusTheme, ChakraProvider } from "@masaischool/lotus";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={LotusTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
