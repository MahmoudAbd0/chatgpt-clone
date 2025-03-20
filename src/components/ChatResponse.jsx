import { TypeAnimation } from "react-type-animation";

export default function ChatResponse() {
  return (
    <TypeAnimation
      sequence={["Just a static response, It might be real one day"]}
      wrapper="span"
      speed={90}
      style={{ fontSize: "1em", display: "inline-block", color: "white" }}
      cursor={false}
    />
  );
}
