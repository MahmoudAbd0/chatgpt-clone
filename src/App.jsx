import { useCallback, useState } from "react";

import "./App.css";
import MessageBox from "./components/MessageBox";
import SideBar from "./layout/components/SideBar";
import { useLocalStorage } from "usehooks-ts";
import EndChatButton from "./components/MessageForm/EndChatButton";
import MessageForm from "./components/MessageForm/MessageForm";
import MessageTextArea from "./components/MessageForm/MessageTextArea";
import MessageError from "./components/MessageForm/MessageError";
import SendMessageButton from "./components/MessageForm/SendMessageButton";
import MessageActions from "./components/MessageForm/MessageActions";
import Container from "./layout/components/Container";
import WelcomeMessage from "./components/WelcomeMessage";
import { useMessages } from "./contexts/messagesContext";
import Layout from "./layout/Layout";
import Message from "./components/Message";

function App() {
  // const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [history, setHistory] = useLocalStorage("history", {});

  const { messages, updateMessages, deleteMessages } = useMessages();

  const onMessageSubmit = useCallback(handleMessageSubmit, [
    message,
    updateMessages,
  ]);
  function handleMessageSubmit(event) {
    event.preventDefault();
    if (!message) {
      setValidationMessage("Input cant be empty");
      return;
    }
    setValidationMessage("");
    updateMessages([message]);
    setMessage("");
  }

  const onEndChat = useCallback(handleEndChat, [
    history,
    messages,
    setHistory,
    deleteMessages,
  ]);
  function handleEndChat() {
    let object = { ...history };
    object[messages[0]] = messages;
    setHistory(object);

    deleteMessages();
  }

  return (
    <>
      <Layout>
        {messages.length === 0 ? (
          <WelcomeMessage />
        ) : (
          <MessageBox>
            {messages.map((message, index) => (
              <Message setMessage={setMessage} content={message} key={index} />
            ))}
          </MessageBox>
        )}
        <MessageForm onSubmit={onMessageSubmit} messages={messages}>
          <MessageTextArea message={message} setMessage={setMessage} />
          {validationMessage && <MessageError>validationMessage</MessageError>}

          <MessageActions>
            {messages.length > 0 && <EndChatButton onClick={onEndChat} />}
            <SendMessageButton disabled={!message} />
          </MessageActions>
        </MessageForm>
      </Layout>
    </>
  );
}

export default App;
