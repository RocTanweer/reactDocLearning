import React, { useState } from "react";
import Chat from "./Chat.jsx";
import ContactList from "./ContactList.jsx";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

function App() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <ContactList contacts={contacts} selectedContact={to} onSelect={(contact) => setTo(contact)} />
      <Chat key={to.id} contact={to} />
    </div>
  );
}

export default App;
