import React, { useState } from "react";
import "./Chat.css";
import data from "../data.json";
import dot from "./Oval.svg";

function Chat() {
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const messages = [username, message];

  const handleInput = () => {
    console.log(username, message, messages);
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
          <div className="username">
            <input
              type="username"
              name="username"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="text"
              placeholder="Type your message.."
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="btn">
            <button onClick={() => handleInput()}>Input</button>
          </div>
        </form>
        {username ? <p>Welcome {username}!</p> : " "}
      </div>
    </div>
  );
}

export default Chat;
