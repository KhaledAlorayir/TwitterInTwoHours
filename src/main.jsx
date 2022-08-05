import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StateProvider } from "./components/ErrorContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const clinet = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
      <QueryClientProvider client={clinet}>
        <App />
      </QueryClientProvider>
    </StateProvider>
  </React.StrictMode>
);
