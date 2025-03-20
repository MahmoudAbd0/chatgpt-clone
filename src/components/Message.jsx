import React from "react";
import ChatResponse from "./ChatResponse";

export default function Message({ setMessage, content }) {
  return (
    <div key={content} className="mt-2">
      <div className="flex justify-end gap-5 my-4">
        <div className="bg-neutral-700  end rounded-full text-md text-white w-fit py-2 px-5 cursor-pointer   ">
          {content}
        </div>
        <div
          onClick={() => setMessage(content)}
          className=" end material-symbols-outlined text-gray-300 hover:cursor-pointer "
        >
          edit_square
        </div>
      </div>
      <ChatResponse />
    </div>
  );
}
