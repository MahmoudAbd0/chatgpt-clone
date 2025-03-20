import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MessagesProvider } from "./contexts/messagesContext.jsx";

createRoot(document.getElementById("root")).render(
  <MessagesProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MessagesProvider>
);
