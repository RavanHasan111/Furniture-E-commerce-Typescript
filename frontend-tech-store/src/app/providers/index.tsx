// import { BrowserRouter } from "react-router-dom";
// import { StoreProvider } from "./StoreProvider";
// import { ThemeProvider } from "./ThemeProvider";

import { BrowserRouter } from "react-router";
import { StoreProvider } from "./StoreProvider";

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <BrowserRouter>
      <StoreProvider>
        {children}
      </StoreProvider>
    </BrowserRouter>
  );
}
