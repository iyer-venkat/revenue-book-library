import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle as GlobalStyleKiama } from "@snsw/react-component-library";
import { GlobalStyles } from "./common/styles/index";
import "./index.css";
import App from "./App";
import Loader from "./common/loader";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyleKiama />
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <App />
      <Loader />
    </QueryClientProvider>
  </React.StrictMode>
);
