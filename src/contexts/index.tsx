import { ThemeProvider } from "styled-components";
import React, { FC } from "react";
import { theme } from "../theme";
import SafeAreaProvider from "./SafeAreaProvider";

const RootContextProvider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SafeAreaProvider>{children}</SafeAreaProvider>
  </ThemeProvider>
);

export default RootContextProvider;
