import { actionButtonsClasses } from "../../utils/stylingClasses/buttons";

function SendMessageButton({ disabled }) {
  return (
    <button className={actionButtonsClasses} disabled={disabled}>
      send
    </button>
  );
}

export default SendMessageButton;
