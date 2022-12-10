import { useState } from "react";

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  // MAIN CODE IMPLEMEDTED BY ME
  function dispatch(actionsObj) {
    const newState = reducer(state, actionsObj);

    setState(newState);
  }

  return [state, dispatch];
}
