function MessageTextArea({ message, setMessage }) {
  return (
    <textarea
      className="mt-5 rounded-2xl sm:w-full lg:w-full p-5 mx-auto text-white text-lg bg-neutral-700"
      name="question"
      value={message}
      onChange={(event) => {
        setMessage(event.target.value);
      }}
    ></textarea>
  );
}

export default MessageTextArea;
