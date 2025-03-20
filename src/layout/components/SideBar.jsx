import React from "react";
import { useLocalStorage } from "usehooks-ts";
import { useMessages } from "../../contexts/messagesContext";

export default function SideBar() {
  const { setMessages } = useMessages();
  const [history, setHistory] = useLocalStorage("history", {});

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ">
      <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-700">
        <ul className="space-y-2 font-medium">
          <li className="text-center">
            <button className=" text-white  p-2 w-full text-center rounded-lg group hover:cursor-pointer">
              Chat History
            </button>
          </li>
          {Object.keys(history).map((item, index) => (
            <li key={index}>
              <a
                onClick={() => setMessages(history[item])}
                className="flex items-center p-2  rounded-lg text-white bg-neutral-600 group hover:cursor-pointer"
              >
                <span className="ms-3">{item}</span>
              </a>
            </li>
          ))}
          {Object.keys(history).length !== 0 ? (
            <li className="text-center">
              <button
                onClick={() => setHistory({})}
                className=" text-red-400  p-2 w-full text-center rounded-lg bg-neutral-600 group hover:cursor-pointer"
              >
                Clear History
              </button>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </aside>
  );
}
