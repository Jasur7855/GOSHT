import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import App from "./App";
import { GlobalStyle } from "./theme/globalStyle";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Footer } from "./components/widgets/Footer/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      
      <App />
      
    </ThemeProvider>
    </Provider>
  </StrictMode>
);
