import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LotusTheme, ChakraProvider } from "@masaischool/lotus";
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      m: "0px",
    },
    h1: {
      fontWeight: "800!important",
      fontSize: "48px!important",
      lineHeight: "62px!important",
      bgColor: "red",
    },
    h2: {
      fontWeight: "700!important",
      fontSize: "34px!important",
      lineHeight: "40px!important",
    },
    h3: {
      fontWeight: "700!important",
      fontSize: "24px!important",
      lineHeight: "32px!important",
    },
    h4: {
      fontWeight: "700!important",
      fontSize: "20px!important",
      lineHeight: "28px!important",
    },
    h5: {
      fontWeight: "700!important",
      fontSize: "18px!important",
      lineHeight: "24px!important",
    },
    h6: {
      fontWeight: "700!important",
      fontSize: "16px!important",
      lineHeight: "20px!important",
    },
  },
};
const customTheme = extendTheme({ ...LotusTheme, styles });
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
