import React from "react";
import "./Chat.css";
import data from "../data.json";
import dot from "./Oval.svg";

function Chat() {
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
        <div className="username">Guest3367</div>
        <div className="input">Input text</div>
        <div className="btn">Send</div>
      </div>
    </div>
  );
}

export default Chat;
