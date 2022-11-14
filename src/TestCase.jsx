import React from "react";
import { getFinalState } from "./processQueue";

export default function TestCase({ baseState, queue, expected }) {
  const actual = getFinalState(baseState, queue);

  return (
    <>
      <p>
        Base state: <b>{baseState}</b>
      </p>
      <p>
        Queue: <b>[{queue.join(", ")}]</b>
      </p>
      <p>
        Expected result: <b>{expected}</b>
      </p>
      <p
        style={{
          color: actual === expected ? "green" : "red",
        }}
      >
        Your result: <b>{actual}</b> ({actual === expected ? "correct" : "wrong"})
      </p>
    </>
  );
}
