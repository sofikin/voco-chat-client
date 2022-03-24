import React, { useState } from "react";
import "./Chat.css";
import data from "../data.json";
import dot from "./Oval.svg";

function Chat() {
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Array<object>>([]);

  const handleInput = (event: React.FormEvent) => {
    event.preventDefault();
    setMessages([...messages, { username, message }]);
    setMessage("");
  };
  return (
    <div className="chat">
      <h1>KHK</h1>
      <div className="chatBox">
        <div className="chatOutput">
          {data.map((cardItem) => {
            return (
              <>
                <div className="chatContainer">
                  <div className="chatMessage">{cardItem.message}</div>
                  <div className="chatUsername">{cardItem.username}</div>
                  <img className="dot" src={dot} alt="dot" />
                  <div className="chatDate">{cardItem.date}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="chatInputBox">
        <form>
          <div>
            <input
              className="username"
              type="username"
              name="username"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              className="input"
              type="text"
              name="text"
              placeholder="Type your message.."
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" onClick={() => handleInput()}>
              Input
            </button>
          </div>
        </form>
        {username ? (
          <p>
            {username}: {message}
          </p>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

export default Chat;
