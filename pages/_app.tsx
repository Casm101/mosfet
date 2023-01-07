import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import { GlobalStyles } from "../theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../theme/useTheme";
//import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, []);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
