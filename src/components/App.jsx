import React, { useState } from "react";
import Form from "./Form.jsx";

function App() {
  const [showHint, setShowHint] = useState(false);
  if (showHint) {
    return (
      <div>
        <Form />
      </div>
    );
  }

  return (
    <div>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form />
      {showHint ? (
        <button
          onClick={() => {
            setShowHint(false);
          }}
        >
          Hide hint
        </button>
      ) : (
        <button
          onClick={() => {
            setShowHint(true);
          }}
        >
          Show hint
        </button>
      )}
    </div>
  );
}

export default App;
