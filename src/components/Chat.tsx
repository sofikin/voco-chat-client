import React from "react";
import "./Chat.css";
import data from "../data.json";

function Chat() {
  return (
    <div>
      <h1>KHK</h1>
      <div className="chatBox">
        <div className="chatContainer">Lorem Ipsum something</div>
        <div className="chatInputBox">
          <div className="username">Guest3367</div>
          <div className="input">Input textnpm</div>
        </div>
      </div>
      <div className="btn">Send</div>
    </div>
  );
}

export default Chat;
