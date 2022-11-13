import React, { useState } from "react";

function Form() {
  const [inputVal, setInputVal] = useState({ firstName: "", lastName: "" });

  function handleFirstNameChange(e) {
    setInputVal({ ...inputVal, firstName: e.target.value });
  }

  function handleLastNameChange(e) {
    setInputVal({ ...inputVal, lastName: e.target.value });
  }

  function handleReset() {
    setInputVal({ firstName: "", lastName: "" });
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input placeholder="First name" value={inputVal.firstName} onChange={handleFirstNameChange} />
      <input placeholder="Last name" value={inputVal.lastName} onChange={handleLastNameChange} />
      <h1>
        Hi, {inputVal.firstName} {inputVal.lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

export default Form;
