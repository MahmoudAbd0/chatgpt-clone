function MessageForm({ onSubmit, messages, children }) {
  return (
    <form
      onSubmit={onSubmit}
      className={
        "flex flex-col justify-center align-middle transition-all " +
        (messages.length !== 0 ? "mt-auto mb-10" : "")
      }
    >
      {children}
    </form>
  );
}

export default MessageForm;
