import React, { useState } from "react";

function Form() {
  const [text, setText] = useState("");
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}

export default Form;
