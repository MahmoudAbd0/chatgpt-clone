import Message from "./Message";
import ChatReponse from "./ChatReponse";

export default function MessageBox({ messages, setMessage, children }) {
  return (
    <div className="overflow-y-auto pt-5">
      {messages.map((message, index) => (
        <div key={index} className="mt-2">
          <Message
            setMessage={setMessage}
            content={message}
            key={index}
          ></Message>
          {children}
          <ChatReponse />
        </div>
      ))}
    </div>
  );
}
