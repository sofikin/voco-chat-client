import React from "react";
import "./Chat.css";

function Chat() {
  return (
    <div>
      <h1>KHK</h1>
      <div className="chatBox">
        <div className="chatInputBox">
          <div className="username">Guest3367</div>
          <div className="input">Input text</div>
        </div>
      </div>
      <div className="btn">Send</div>
    </div>
  );
}

export default Chat;
