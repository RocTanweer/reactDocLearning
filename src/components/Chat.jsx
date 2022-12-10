import React from "react";

export default function Chat({ message, contact, dispatch }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      />
      <br />
      <button
        onClick={(e) => {
          alert(`name: ${contact.name}\nemail: ${contact.email}`),
            dispatch({
              type: "sent_message",
            });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
