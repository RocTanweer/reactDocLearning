export function getFinalState(baseState, queue) {
  let finalState = baseState;

  queue.forEach((q) => {
    if (typeof q === "function") {
      finalState = q(finalState);
    } else if (typeof q === "number") {
      finalState = q;
    }
  });

  return finalState;
}
