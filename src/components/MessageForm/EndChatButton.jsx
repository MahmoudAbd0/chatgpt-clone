import { actionButtonsClasses } from "../../utils/stylingClasses/buttons";

function EndChatButton({ onClick }) {
  return (
    <button onClick={onClick} className={actionButtonsClasses}>
      End Chat
    </button>
  );
}

export default EndChatButton;
