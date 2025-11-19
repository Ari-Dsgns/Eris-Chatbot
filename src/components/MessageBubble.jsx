import robot from "../assets/robot.svg";

export const MessageBubble = ({ msg }) => (
  <div
    className={`my-1 p-4  w-auto ${
      msg.from === "bot"
        ? "bg-zinc-200 text-text2  self-start rounded"
        : "bg-zinc-400 text-text2  self-end  rounded"
    }`}
  >
    <div className="flex items-center gap-2">
      {msg.from === "bot" && (
        <img
          className="animate-bounce"
          src={robot}
          alt="Icono de mensaje del bot"
        />
      )}
      {msg.text}
    </div>
  </div>
);
