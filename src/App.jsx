import React from "react";
import TestCase from "./TestCase.jsx";
import "./main.css";

const App = () => (
  <>
    <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
    <hr />
    <TestCase baseState={0} queue={[increment, increment, increment]} expected={3} />
    <hr />
    <TestCase baseState={0} queue={[5, increment]} expected={6} />
    <hr />
    <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />s
  </>
);

function increment(n) {
  return n + 1;
}

increment.toString = () => "n => n + 1";

export default App;
