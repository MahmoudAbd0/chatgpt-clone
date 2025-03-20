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

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [history, setHistory] = useLocalStorage("history", {});

  const onMessageSubmit = useCallback(handleMessageSubmit, [message, messages]);
  function handleMessageSubmit(event) {
    event.preventDefault();
    if (!message) {
      setValidationMessage("Input cant be empty");
      return;
    }
    setValidationMessage("");
    setMessages([...messages, message]);
    setMessage("");
  }

  const onEndChat = useCallback(handleEndChat, [history, messages, setHistory]);
  function handleEndChat() {
    let object = { ...history };
    object[messages[0]] = messages;
    setHistory(object);

    setMessages([]);
  }

  return (
    <>
      <Container>
        <SideBar setMessages={setMessages}></SideBar>
        {messages.length === 0 ? (
          <WelcomeMessage />
        ) : (
          <MessageBox messages={messages} setMessage={setMessage} />
        )}
        <MessageForm onSubmit={onMessageSubmit} messages={messages}>
          <MessageTextArea message={message} setMessage={setMessage} />
          {validationMessage && <MessageError>validationMessage</MessageError>}

          <MessageActions>
            {messages.length > 0 && <EndChatButton onClick={onEndChat} />}
            <SendMessageButton disabled={!message} />
          </MessageActions>
        </MessageForm>
      </Container>
    </>
  );
}

export default App;
