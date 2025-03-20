import Message from "./Message";

export default function MessageBox({ children }) {
  return <div className="overflow-y-auto pt-5">{children}</div>;
}
