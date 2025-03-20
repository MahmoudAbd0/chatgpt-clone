import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function ChatReponse() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Static Chat Response from chat gpt ",
      ]}
      wrapper="span"
      speed={90}
      style={{ fontSize: "1em", display: "inline-block", color: "white" }}
      cursor={false}
    ></TypeAnimation>
  );
}
