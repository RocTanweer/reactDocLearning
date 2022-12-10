import React from "react";
import { useReducer } from "./MyReact";
import Chat from "./Chat.jsx";
import ContactList from "./ContactList.jsx";
import { initialState, messengerReducer } from "./messengerReducer";
import { contacts } from "./contacts";

function App() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  const message = state.messages[state.selectedId];

  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <div>
      <ContactList contacts={contacts} selectedId={state.selectedId} dispatch={dispatch} />
      <Chat key={contact.id} message={message} contact={contact} dispatch={dispatch} />
    </div>
  );
}

export default App;
