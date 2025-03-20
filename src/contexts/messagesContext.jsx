import React, { createContext, useContext, useState } from "react";

const MessagesContext = createContext();

export function MessagesProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const updateMessages = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const deleteMessages = () => {
    setMessages([]);
  };

  return (
    <MessagesContext.Provider
      value={{ messages, updateMessages, deleteMessages, setMessages }}
    >
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessages() {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error("useMessages must be used within a MessagesProvider");
  }
  return context;
}
