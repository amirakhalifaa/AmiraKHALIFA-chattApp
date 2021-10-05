import React, { useContext, useState } from "react";
import ThemeContext from "../../context/themeContext";
import { UserContext } from "../../context/UserContext";

function MessageForm() {
  var { theme } = useContext(ThemeContext);
  var { selectedUser, sendMessage } = useContext(UserContext);
  var [message, setMessage] = useState(message);

  if (!selectedUser) return null;

  return (
    <div style={theme} className="message-form">
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        type="text"
        className="response-input"
        placeholder="Type"
      ></input>
      <button onClick={() => sendMessage(message)} className="response-button">
        SEND
      </button>
    </div>
  );
}

export default MessageForm;